var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var hour = moment().hour();
var textRow = $('.textRow');
var preSave = JSON.parse(localStorage.getItem("memSave"));
var timeBlock = "";
var timeBlockText = "";

$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

hour = 10;

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

for (i=0; i < preSave.length; i++){

    var count = 9;

    while(count < 18){
        addText(count, preSave[i]);
        count ++;
    }

}

function addText(count, preSaveItem){

    if(preSaveItem.time === count.toString()){
        var text = document.getElementById(count.toString());
        text.value = preSaveItem.text;
    }
}


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





