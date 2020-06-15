$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function Contiene(value, arr) {
    var result = false;

    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].value;
        if (name === value) {
            result = true;
            break;
        }
    }

    return result;
}
