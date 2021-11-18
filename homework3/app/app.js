


function initListeners() {
    $(".bars").click(function(e){
        console.log("clicked")
        $(".bars").toggleClass("active")
        $(".links").toggleClass("active")
    });

    $(".button").click(function(e){
        console.log("clicked");
        $(".button").toggleClass("active")
        $(".button-holder").toggleClass("active")
        
    });
}

$(".links a").click(function(e){
    $(".bars").toggleClass("active")
    $(".links").toggleClass("active")
});



$(document).ready(function () {
    initListeners();
});