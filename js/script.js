$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $("#navBar").addClass("noTransparent");
    } else {
        $("#navBar").removeClass("noTransparent");
    }
});
$(document).ready(function () {

    $("a.scroll").on("click", function (event) {
        var hash = this.hash;
        $('html,body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });
    });

    $(".timer").countTo();

    $(function () {
        $("#commentForm").validate();
    });
});