"use strict";

var str = "a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur sunt, consequatur asperiores voluptatem harum deserunt odit placeat, provident cumque aperiam culpa nihil ad assumenda cum, ea dignissimos accusamus quae!";

function ChangeToUppercase(string, letter) {

    var arrFromStr = string.split(' ');

    for (var i = 0; i < arrFromStr.length; i++ ) {

        var temp = '';

        for (var j = 0; j < arrFromStr[i].length; j++) {
            if (arrFromStr[i][j] == letter) {
                temp = temp + arrFromStr[i][j].toUpperCase();
            } else {
                temp = temp + arrFromStr[i][j];
            }
        }
        arrFromStr[i] = temp;
    }
    console.log(arrFromStr.join(' '));
}

ChangeToUppercase(str, "t")