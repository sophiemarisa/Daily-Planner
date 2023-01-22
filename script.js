var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var hour = moment().hour();
var nine = document.getElementById("9am");
var ten = document.getElementById("10am");
var Rows = [
            [9, nine],
            [10, ten]

]

var textRow = $('.textRow');

console.log(textRow)

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


for(i=0; i< textRow.length; i++){

    var blockID = textRow[i].id;

    if(blockID == hour){
        textRow[i].classList.add('present')
    }
    else if(blockID < hour){
        textRow[i].classList.add('past')
    }
    else if(blockID > hour){
        textRow[i].classList.add('future')
    }

}