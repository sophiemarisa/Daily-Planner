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

    var results = set.filter(preSave => preSave.time === blockID);
    console.log(results)

    

}

for(i=0; i < textRow.length; i++)

for(i=0; i < prevSave.length; i++){
    timeBlock = prevSave[i].time;
    timeBlockText = prevSave[i].text;

    for ( j=0; j < textRow.length; j++){

        console.log(timeBlock, textRow[i].id)
        if(timeBlock === textRow[i].id)
            textRow[i].value = timeBlockText;
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





