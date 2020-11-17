$(".navbar-toggler-icon").click(function(){
    $(".nav-menu").toggleClass("hidden");
});    
$(document).ready(function(){
    $("#index-s1-owl").owlCarousel({items:1,autoplay:true,loop:true});
    $("#booklet-owl, #poster-owl").owlCarousel({items:2,autoplay:true,loop:true});
    $("#graphics-owl, #video-owl").owlCarousel({items:3,autoplay:true,loop:true});
});