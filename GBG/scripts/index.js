$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['white', 'white', 'white'],
        anchors: ['firstSection', 'secondSection', 'thirdSection', '4th', '5th'],
        menu: '.main-nav ul',
        licenseKey: '6A53BCF6-46E5458A-A28A48F7-E821B8CA',
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;     
                $("#section2").css("display", "table");
            //using anchorLink
            if (origin.anchor == 'secondSlide') {
            
            }
        },
        onLeave: function (origin, destination, direction) {
            var leavingSection = this;
            //after leaving section 2
            if (origin.index == 2 ) {

                $("#section2").css("display", "table");
            }
            else if (origin.index == 2) {            
                $("#section2").css("display", "table");
            }
        },
        onSlideLeave: function (section, origin, destination, direction) {
            $("#section2").css("display", "table");
        }
    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false); 

});