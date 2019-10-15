$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
        anchors: ['firstSection', 'secondSection', 'thirdSection', '4th', '5th'],
        menu: '.main-nav ul',
        licenseKey: '6A53BCF6-46E5458A-A28A48F7-E821B8CA',
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;

            //using index
            if (origin.index == 2) {
           
            }

            //using anchorLink
            if (origin.anchor == 'secondSlide') {
            
            }
        },
        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            //after leaving section 2
            if (origin.index == 1 && direction == 'down') {
           
            }

            else if (origin.index == 1 && direction == 'up') {
             
            }
        }
    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

    $(function () {

        $('#cd-dropdown').dropdown({
            gutter: 5,
            delay: 100,
            random: true
        });

        $('#cd-dropdown2').dropdown({
            gutter: 5,
            delay: 100,
            random: true
        });

    });



});