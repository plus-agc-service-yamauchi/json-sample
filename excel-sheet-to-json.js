const c = require('ansi-colors')
const fs = require('fs')
const glob = require('glob')
const XLSX = require('xlsx')

class ExcelSheetToJson {
    constructor() {
        this.src = 'data/'
        this.dest = 'json/'
        this.pattern = `${this.src}/!(~$)*.+(xls|xlsx|xlsm)`
    }

    init() {
        glob(this.pattern, (err, files) => {
            if (err) {
                console.error(err)
                return
            }
            for (const file of files) {
                const fileName = file.match(/([^/]*)\./)[1]
                const data = this.getExcelData(file, fileName)
                this.writeJsonFile(data, fileName)
            }
        })
    }

    // エクセルファイルの1シート目のデータを取得
    getExcelData(excelFilePath, excelFileName) {
        const workbook = XLSX.readFile(excelFilePath)
        const Sheet1 = workbook.Sheets[workbook.SheetNames[0]]
        // meta 管理用のエクセルの場合
        if (excelFileName === 'meta') {
            const data = XLSX.utils.sheet_to_json(Sheet1, {
                defval: ''
            })
            const metaData = {}
            for (const obj of data) {
                const pageData = {}
                for (const [key, value] of Object.entries(obj)) {
                    if (key === 'pageUrl') continue
                    pageData[key] = value
                }
                metaData[obj.pageUrl] = pageData
            }
            return metaData
        }
        // meta 管理用のエクセル以外
        return XLSX.utils.sheet_to_json(Sheet1)
    }

    // JSONファイルの書き込み
    writeJsonFile(data, excelFileName) {
        const jsonStr = JSON.stringify(data)
        // JSONファイルの格納ディレクトリがなければ作成
        if (!fs.existsSync(this.dest)) {
            fs.mkdirSync(this.dest, { recursive: true })
        }
        // JSONファイル作成
        fs.writeFile(`${this.dest}${excelFileName}.json`, jsonStr, (err) => {
            if (err) {
                console.error(
                    c.red('ERR! ') +
                    `Failed to create '${this.dest}${excelFileName}.json'：${err}`
                )
                return
            }
            console.log(
                `Created '` + c.green(`${this.dest}${excelFileName}.json`) + `'`
            )
        })
    }
}
const excelSheetToJson = new ExcelSheetToJson()
excelSheetToJson.init()
