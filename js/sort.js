/* ======================================================================================================================
キーワード検索
====================================================================================================================== */
$('#keyword').quicksearch('#listWrapper article');

/* ======================================================================================================================
ボタンでソート
====================================================================================================================== */

// 温泉がある宿
$(".onsen").on("click", function () {
    // リストの数だけ処理を繰り返す
    $("article").each(function () {
        // 温泉がある宿を抽出
        if ($(this).is(":contains('温泉がある宿')")) {
            $(this).fadeIn("slow");
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
            $(this).fadeIn("slow");
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
            $(this).fadeIn("slow");
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
            $(this).fadeIn("slow");
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
            $(this).fadeIn("slow");
        } else {
            $(this).hide();
        }
    });
    list();
});

// リストをリセットする
$(".reset").on("click", function () {
    $("article").fadeIn("slow");
});

function list() {
    if ($('article').height() === 0) {
        $(".list__notxt").fadeIn("slow");
        $("article ul").hide();
    } else {
        $(".list__notxt").hide();
        $("article ul").show();
    }
}
