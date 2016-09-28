var turn = 0;
var xcounter = 0;
var ocounter = 0;
var winwin;

function gameRestartX() {
    xcounter++;
    document.getElementById("xtotal").innerHTML="" +xcounter+ "";
    turn = 0;
    $('.tic').text("");
    $("#restartx").hide();
    $("#restarto").hide();
    $("#boardfull").show();
    $("#xwins").hide();
    $("#owins").hide();
    $("#xturn").show();
    $("#oturn").hide();
    $("#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9").css("color", "cyan");
    createX();

}

function gameRestartO() {
    ocounter++;
    document.getElementById("ototal").innerHTML="" +ocounter+ "";
    turn = 1;
    $('.tic').text("");
    $("#restartx").hide();
    $("#restarto").hide();
    $("#boardfull").show();
    $("#xwins").hide();
    $("#owins").hide();
    $("#xturn").hide();
    $("#oturn").show();
    $("#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9").css("color", "cyan");
    createX();

}

function playerturn() {
    if (turn % 2 === 1) {
        $("#xturn").show();
        $("#oturn").hide();
    }
    if (turn % 2 === 0) {
        $("#xturn").hide();
        $("#oturn").show();
    }
    if (victory() == true) {
        $("#xturn").hide();
        $("#oturn").hide();
    }
}

function createX() {
$('.tic').click(function() {
    if (turn % 2 === 0 && $(this).text() == '') {
      $(this).text("X");
      victory();
      playerturn();
      turn++;
    }
    if (turn % 2 === 1 && $(this).text() == '') {
      $(this).text("O");
      victory();
      playerturn();
      turn++;
    }
});
};

function victory() {
    if ($("#board1").text() == 'X' && $("#board2").text() == 'X' && $("#board3").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board2, #board3").css("color", "red");
        winwin = true;
    }
    if ($("#board4").text() == 'X' && $("#board5").text() == 'X' && $("#board6").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board4, #board5, #board6").css("color", "red");
        winwin = true;
    }
    if ($("#board7").text() == 'X' && $("#board8").text() == 'X' && $("#board9").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board7, #board8, #board9").css("color", "red");
        winwin = true;
    }
    if ($("#board1").text() == 'X' && $("#board4").text() == 'X' && $("#board7").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board4, #board7").css("color", "red");
        winwin = true;
    }
    if ($("#board2").text() == 'X' && $("#board5").text() == 'X' && $("#board8").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board2, #board5, #board8").css("color", "red");
        winwin = true;
    }
    if ($("#board3").text() == 'X' && $("#board6").text() == 'X' && $("#board9").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board6, #board9").css("color", "red");
        winwin = true;
    }
    if ($("#board1").text() == 'X' && $("#board5").text() == 'X' && $("#board9").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board5, #board9").css("color", "red");
        winwin = true;
    }
    if ($("#board3").text() == 'X' && $("#board5").text() == 'X' && $("#board7").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board5, #board7").css("color", "red");
        winwin = true;
    }
    if ($("#board1").text() == 'O' && $("#board2").text() == 'O' && $("#board3").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board2, #board3").css("color", "red");
        winwin = true;
    }
    if ($("#board4").text() == 'O' && $("#board5").text() == 'O' && $("#board6").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board4, #board5, #board6").css("color", "red");
        winwin = true;
    }
    if ($("#board7").text() == 'O' && $("#board8").text() == 'O' && $("#board9").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board7, #board8, #board9").css("color", "red");
        winwin = true;
    }
    if ($("#board1").text() == 'O' && $("#board4").text() == 'O' && $("#board7").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board4, #board7").css("color", "red");
        winwin = true;
    }
    if ($("#board2").text() == 'O' && $("#board5").text() == 'O' && $("#board8").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board2, #board5, #board8").css("color", "red");
        winwin = true;
    }
    if ($("#board3").text() == 'O' && $("#board6").text() == 'O' && $("#board9").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board6, #board9").css("color", "red");
        winwin = true;
    }
    if ($("#board1").text() == 'O' && $("#board5").text() == 'O' && $("#board9").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board5, #board9").css("color", "red");
        winwin = true;
    }
    if ($("#board3").text() == 'O' && $("#board5").text() == 'O' && $("#board7").text() == 'O' && $("#draw").hide() ) {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board5, #board7").css("color", "red");
        winwin = true;
    }
    else if ($("#board1").text() != '' && $("#board2").text() != '' && $("#board3").text() != '' && $("#board4").text() != '' && $("#board5").text() != '' && $("#board6").text() != '' && $("#board7").text() != '' && $("#board8").text() != '' && $("#board9").text() != '' && winwin != true) {
        $("#draw").show();
        $("#xturn").hide();
        $("#oturn").hide();
    turn++;
    }
}

$(function () {
createX();
document.getElementById("xtotal").innerHTML="" +xcounter+ "";
document.getElementById("ototal").innerHTML="" +ocounter+ "";
$("#restartx").hide();
$("#restarto").hide();
$("#boardfull").show();
$("#xwins").hide();
$("#owins").hide();
$("#xturn").show();
$("#oturn").hide();
$("#draw").hide();
});