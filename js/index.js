function scroll(){
    if (document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("noTransparrent");
    }else{
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}
window.onscroll= function(){
    scroll();
}

$(document).ready(function(){
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill :"#0575e6"
    }).on.on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('span').html(Math.round(stepValue * 100) + '%')
    })
     
   
});
$(function(){
    $('#contact-form').validate();
})

