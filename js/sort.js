let arr = [
    {date: '2020-02-20', memo: 'あいうえお'}
    , {date: '2020-02-30', memo: 'かきくけこ'}
    , {date: '2020-02-10', memo: 'さしすせそ'}
    , {date: '2020-02-05', memo: 'たちつてと'}
];

function sortDate() {
    let result = arr.sort(function (a, b) {
        return (a.date < b.date) ? -1 : 1;  //オブジェクトの昇順ソート
    });
}

