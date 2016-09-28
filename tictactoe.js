var turn = 0;

function gameRestartX() {
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
    }
    if ($("#board4").text() == 'X' && $("#board5").text() == 'X' && $("#board6").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board4, #board5, #board6").css("color", "red");
    }
    if ($("#board7").text() == 'X' && $("#board8").text() == 'X' && $("#board9").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board7, #board8, #board9").css("color", "red");
    }
    if ($("#board1").text() == 'X' && $("#board4").text() == 'X' && $("#board7").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board4, #board7").css("color", "red");
    }
    if ($("#board2").text() == 'X' && $("#board5").text() == 'X' && $("#board8").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board2, #board5, #board8").css("color", "red");
    }
    if ($("#board3").text() == 'X' && $("#board6").text() == 'X' && $("#board9").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board6, #board9").css("color", "red");
    }
    if ($("#board1").text() == 'X' && $("#board5").text() == 'X' && $("#board9").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board5, #board9").css("color", "red");
    }
    if ($("#board3").text() == 'X' && $("#board5").text() == 'X' && $("#board7").text() == 'X') {
        $(".tic").off('click'); 
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board5, #board7").css("color", "red");
    }
    if ($("#board1").text() == 'O' && $("#board2").text() == 'O' && $("#board3").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board2, #board3").css("color", "red");
    }
    if ($("#board4").text() == 'O' && $("#board5").text() == 'O' && $("#board6").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board4, #board5, #board6").css("color", "red");
    }
    if ($("#board7").text() == 'O' && $("#board8").text() == 'O' && $("#board9").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board7, #board8, #board9").css("color", "red");
    }
    if ($("#board1").text() == 'O' && $("#board4").text() == 'O' && $("#board7").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board4, #board7").css("color", "red");
    }
    if ($("#board2").text() == 'O' && $("#board5").text() == 'O' && $("#board8").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board2, #board5, #board8").css("color", "red");
    }
    if ($("#board3").text() == 'O' && $("#board6").text() == 'O' && $("#board9").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board6, #board9").css("color", "red");
    }
    if ($("#board1").text() == 'O' && $("#board5").text() == 'O' && $("#board9").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board1, #board5, #board9").css("color", "red");
    }
    if ($("#board3").text() == 'O' && $("#board5").text() == 'O' && $("#board7").text() == 'O') {
        $(".tic").off('click'); 
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
        $("#oturn").hide();
        $("#board3, #board5, #board7").css("color", "red");
    }
}

$(function () {
createX();
$("#restartx").hide();
$("#restarto").hide();
$("#boardfull").show();
$("#xwins").hide();
$("#owins").hide();
$("#xturn").show();
$("#oturn").hide();
});