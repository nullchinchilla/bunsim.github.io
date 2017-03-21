function translit(i, obj) {
    var old = obj.innerHTML;
    obj.innerHTML = TongWen.convert(old, TongWen.flagSimp);
    obj.lang = "zh-cn";
}

var marked = {};
var markedlang = {};

function marknt() {
    $(".no-translit, :lang(ja)").each(function(i, obj) {
        marked[i] = obj.innerHTML;
        markedlang[i] = obj.lang;
    });
}

function restorent() {
    $(".no-translit, :lang(ja)").each(function(i, obj) {
        obj.innerHTML = marked[i];
        obj.lang = markedlang[i];
    });
}

function trans2simp() {
    marknt();

    $("title").each(translit);
    $(".translit").each(translit);
    $("p").each(translit);
    $("li").each(translit);
    $("blockquote").each(translit);
    $("h1").each(translit);
    $("h2").each(translit);
    $("h3").each(translit);
    $("h4").each(translit);
    $("h5").each(translit);
    $("figcaption").each(translit);

    restorent();
}
