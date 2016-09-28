var turn = 0;

function createX() {
$('.tic').click(function() {
    if (turn % 2 === 0) {
      $(this).text("X");
    }
    else {
    $(this).text('O');
    }
    turn++;
});
};

$(function () {
createX();
});