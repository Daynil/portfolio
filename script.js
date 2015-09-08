$(document).ready(function(){

    // Smooth scroll on link click
    var $root = $('html, body');
    $('a[href*=#]').click(function() {
        var scrollToPos = $( $(this).attr('href') ).offset().top
        $root.animate({
            scrollTop: scrollToPos
        }, 500);
        return false;
    });
    
});