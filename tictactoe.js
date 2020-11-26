// Created by Tanish Kushwaha

var restart = $('#restart');
var squares = $('td');
var winAlert = $('#winalert');
var winFlag;
var turnAlert = $('#turnalert');
var tieAlert = $('#tiealert');
var themeCheckbox = $('#customSwitch1');
var themeSwitch = $('#toggle-button');
var body = $('body');

function init() {
    squares.text('');
    squares.css('background-color', '');
    markCount = 0;
    console.log("Init!");
    winFlag = false;
    winAlert.text('');
    winAlert.css('display', 'none');
    turnAlert.css('display', 'block');
    turnAlert.html("<strong>X's</strong> turn");
    tieAlert.css('display', 'none');
}

function changeMarker() {
    if($(this).text() === '' && markCount % 2 === 0 && winFlag !== true) {
        $(this).text('X');
        markCount ++;
    }
    if($(this).text() === '' && markCount % 2 !== 0 && winFlag !== true) {
        $(this).text('O');
        markCount ++;
    }
}

function whosTurn() {
    if(markCount % 2 == 0) {
        turnAlert.html("<strong>O's</strong> turn");
    }
    else {
        turnAlert.html("<strong>X's</strong> turn");
    }
}

function winGame(s1, s2, s3) {
    winFlag = true;
    console.log("Winner found!");
    s1.css('background-color', 'var(--win-square-color)');
    s2.css('background-color', 'var(--win-square-color)');
    s3.css('background-color', 'var(--win-square-color)');
    if(markCount % 2 == 0) {
        winAlert.html('Congratulations! O won the game! Hit <strong>Restart</strong> to play again.');
    }
    else {
        winAlert.html('Congratulations! X won the game! Hit <strong>Restart</strong> to play again.');
    }
    winAlert.css('display', 'block');
    turnAlert.css('display', 'none');
}

function getWinner() {
    if(squares.eq(0).text() != '' && squares.eq(0).text() == squares.eq(1).text() && squares.eq(1).text() == squares.eq(2).text()) {
        winGame(squares.eq(0), squares.eq(1), squares.eq(2));
    }

    if(squares.eq(3).text() != '' && squares.eq(3).text() == squares.eq(4).text() && squares.eq(4).text() == squares.eq(5).text()) {
        winGame(squares.eq(3), squares.eq(4), squares.eq(5));
    }

    if(squares.eq(6).text() != '' && squares.eq(6).text() == squares.eq(7).text() && squares.eq(7).text() == squares.eq(8).text()) {
        winGame(squares.eq(6), squares.eq(7), squares.eq(8));
    }

    if(squares.eq(0).text() != '' && squares.eq(0).text() == squares.eq(3).text() && squares.eq(3).text() == squares.eq(6).text()) {
        winGame(squares.eq(0), squares.eq(3), squares.eq(6));
    }

    if(squares.eq(1).text() != '' && squares.eq(1).text() == squares.eq(4).text() && squares.eq(4).text() == squares.eq(7).text()) {
        winGame(squares.eq(1), squares.eq(4), squares.eq(7));
    }

    if(squares.eq(2).text() != '' && squares.eq(2).text() == squares.eq(5).text() && squares.eq(5).text() == squares.eq(8).text()) {
        winGame(squares.eq(2), squares.eq(5), squares.eq(8));
    }

    if(squares.eq(0).text() != '' && squares.eq(0).text() == squares.eq(4).text() && squares.eq(4).text() == squares.eq(8).text()) {
        winGame(squares.eq(0), squares.eq(4), squares.eq(8));
    }

    if(squares.eq(2).text() != '' && squares.eq(2).text() == squares.eq(4).text() && squares.eq(4).text() == squares.eq(6).text()) {
        winGame(squares.eq(2), squares.eq(4), squares.eq(6));
    }
}

function tieCheck() {
    var squareCount = 0;
    for(var i = 0; i < squares.length; i++) {
        if(squares.eq(i).text() != '') {
            squareCount ++;
        }

        if(squareCount === 9 && winFlag === false) {
            turnAlert.css('display', 'none');
            tieAlert.html("Whoops! It's a tie! Hit <strong>Restart</strong> to play again.");
            tieAlert.css('display', 'block');
        }
    }
}

function themeToggle() {
    if(themeCheckbox.prop('checked')) {
        // OFF
        body.toggleClass('dark');
    }
    else {
        // ON
        body.toggleClass('dark');
    }
}

init();
restart.click(init);
squares.click(whosTurn);
squares.click(changeMarker);
squares.click(getWinner);
squares.click(tieCheck);
themeSwitch.click(themeToggle);