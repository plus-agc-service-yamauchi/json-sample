/* ======================================================================================================================
list.json取得
====================================================================================================================== */

const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'json/list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const facilitiesList = request.response;
    populateHeader(facilitiesList);
    showHeroes(facilitiesList);
}

function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['title'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = '町名: ' + obj['cities'] + obj['address'];
    header.appendChild(myPara);
}

function showHeroes(obj) {
    const facility = obj['facilities'];

    for (let i = 0; i < facility.length; i++) {
        const myArticle = document.createElement('article');
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'imageWrapper';
        const myPara0 = document.createElement('h3');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'linkButton';

        imageWrapper.innerHTML = '<img src="' + facility[i].image + '" alt="' + facility[i].alt + '">';
        myPara0.textContent = '施設名:' + facility[i].name;
        myPara1.textContent = 'カテゴリ:' + facility[i].category;
        myPara2.textContent = 'タグ:' + facility[i].tag;
        myPara3.textContent = '概要:';
        buttonWrapper.innerHTML = '<a href="' + facility[i].url + '">' + '詳しく見る' + '</a>'

        const overview = facility[i].overview;
        for (let j = 0; j < overview.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = overview[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(imageWrapper);
        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        myArticle.appendChild(buttonWrapper);

        section.appendChild(myArticle);
    }
}

/* ======================================================================================================================
ボタンでソート
====================================================================================================================== */

// 温泉がある宿
$(".onsen").on("click", function () {
    // リストの数だけ処理を繰り返す
    $("article").each(function () {
        // 温泉がある宿を抽出
        if ($(this).is(":contains('温泉がある宿')")) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    list();
});

// 旅館・ホテル
$(".ryokan").on("click", function () {
    // リストの数だけ処理を繰り返す
    $("article").each(function () {
        // 旅館・ホテルを抽出
        if ($(this).is(":contains('旅館・ホテル')")) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    list();
});

// 民宿
$(".minshuku").on("click", function () {
    // リストの数だけ処理を繰り返す
    $("article").each(function () {
        // 旅館・ホテルを抽出
        if ($(this).is(":contains('民宿')")) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    list();
});

// ペンション
$(".pension").on("click", function () {
    // リストの数だけ処理を繰り返す
    $("article").each(function () {
        // 旅館・ホテルを抽出
        if ($(this).is(":contains('ペンション')")) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    list();
});

// コテージ
$(".cottage").on("click", function () {
    // リストの数だけ処理を繰り返す
    $("article").each(function () {
        // 旅館・ホテルを抽出
        if ($(this).is(":contains('コテージ')")) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    list();
});

// リストをリセットする
$(".reset").on("click", function () {
    $("article").show();
});

function list() {
    if ($('article').height() === 0) {
        $(".list__notxt").show();
        $("article ul").hide();
    } else {
        $(".list__notxt").hide();
        $("article ul").show();
    }
}

/* ======================================================================================================================
キーワード検索
====================================================================================================================== */
$('#keyword').quicksearch('#listWrapper article');
