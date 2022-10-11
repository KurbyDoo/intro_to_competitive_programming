$(document).ready(function () {
    $("a").attr("target", "_blank");
    $(".internal_link").attr("target", "_self");
});

$.get("../nav.html", function(data){
    $("#navbar").replaceWith(data);
});

$.get("../footer.html", function(data){
    $("#footer").replaceWith(data);
});

