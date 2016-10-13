$(function() {

    $('#side-menu').metisMenu();

});
function getZTimeOfDay(){
    var hourStamp = new Date().setHours(0, 0,0,0);
    var dates = new Date(hourStamp);
    return dates.getTime();
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getLTimeOfDay(date){
    var hourStamp = new Date(date).setHours(23, 59,59,999);
    var dates = new Date(hourStamp);
    return dates.getTime();
};

function getDateFromStr(dateStr){
    var parts = dateStr.split(':');
    if (parts.length == 3){
        var dates = new Date($.datepicker.formatDate("yy-M-d", new Date()) +' ' +dateStr);
        return [dates.getTime(),dates.setHours(parseInt(parts[0])+1,0,0,0)];
    }
    else {
        var dates = new Date(new Date().getFullYear()+'-'+dateStr)
        return [dates.getTime(),getLTimeOfDay(dates)];
    };
};
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        // height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        // height = height - topOffset;
        // if (height < 1) height = 1;
        // if (height > topOffset) {
        //     $("#page-wrapper").css("min-height", (height) + "px");
        // }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
