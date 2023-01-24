var datetime = null,
    date = null;

//gets current time
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var hour = moment().hour();
var textRow = $('.textRow');
var preSave = JSON.parse(localStorage.getItem("memSave"));
var timeBlock = "";
var timeBlockText = "";

//adds current time to the page
$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

//checks the text area block's hour and compares against currernt hour
for (i = 0; i < textRow.length; i++) {

    var blockID = textRow[i].id;

    if (blockID == hour) {
        textRow[i].classList.add('present')
    }
    else if (blockID < hour) {
        textRow[i].classList.add('past')
    }
    else if (blockID > hour) {
        textRow[i].classList.add('future')
    }
}

//gets any activites saved in memory onto the page
for (i=0; i < preSave.length; i++){

    var count = 9;

    while(count < 18){
        addText(count, preSave[i]);
        count ++;
    }

}

//function to compare the presave item to the text area block so the write activity gets put on the right time
function addText(count, preSaveItem){

    if(preSaveItem.time === count.toString()){
        var text = document.getElementById(count.toString());
        text.value = preSaveItem.text;
    }
}

//event listner listens for button clicks then saves that text to the local storage 
document.addEventListener('click', function (e) {
    let element = e.target;
    var saveTime = element.id

    if (element.tagName == "BUTTON") {
        for (i = 0; i < textRow.length; i++) {
            if (saveTime === textRow[i].id) {

                let saveText = textRow[i].value;

                var memSave = {
                    time: saveTime,
                    text: saveText,
                }

                var prevSave = JSON.parse(localStorage.getItem("memSave") || '[]');
                prevSave.push(memSave);
                localStorage.setItem("memSave", JSON.stringify(prevSave));
                
            }
        }
    }
})





