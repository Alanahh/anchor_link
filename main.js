$(document).ready(function(){
    $('a.item').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr("href")).offset().top },600);
        });
  
    })
    var nav = document.getElementById("nav");
    var sticky = nav.offsetTop;
    $(window).scroll(function(){
        if (window.pageYOffset >= sticky) {
               $('#nav').addClass("sticky")
            } else {
                 $('#nav').removeClass("sticky");
            }
    })
  

   
   