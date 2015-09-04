$(document).ready(function(){
    
    var $root = $('html, body');
    $('a[href*=#]').click(function() {
        /*alert("top position: " + $( $(this).attr('href') ).position().top);*/
        var scrollToPos = $( $(this).attr('href') ).offset().top
        $root.animate({
            scrollTop: scrollToPos
        }, 500);
        return false;
    });
    
});