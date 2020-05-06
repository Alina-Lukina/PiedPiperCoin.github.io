$(function (){

/* Menu nav toggle */
    $("#nav__toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("nav__toggle--active");
        $("nav").toggleClass("nav__toggle--active");
    });

});
