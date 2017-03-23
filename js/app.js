// Treehouse Project-04: Tic-Tac-Toe Game
'use strict';
(function (module) {

// Global Variables -----------------------------------------------------
  // Get the start screen div
  const $start = $('#start');
  // Get the button that hides the start screen
  const $button = $('.button');
  const $finish1 = $('#finish1');
  const $finish2 = $('#finish2');
  const $tie = $('#tie');

  const $player1 = $('#player1');
  const $player2 = $('#player2');
  const $board = $('#board');
  const $boxes = $('.boxes');
  const twoDimArr = [];
  const game = document.querySelectorAll('.boxes');
  let count = 0;



  const player1 = {
    name: 'player1',
    bgColor: '#FFA000',
    svg: 'img/o.svg',
    boxFill: 'box-filled-1',
    isWinner: false
  };

  const player2 = {
    name: 'player2',
    bgColor: '#3688C3',
    svg: 'img/x.svg',
    boxFill: 'box-filled-2',
    isWinner: false
  };

  // Hide the various winning screens.
  $finish1.css('display', 'none');
  $finish2.css('display', 'none');
  $tie.css('display', 'none');

// Main Function ------------------------------

  // On page load, show the start screen.
  $(document).ready(function() {
    $start.css('display', 'block');
    // call a function which controls the start button
    // and won't start game until a name is entered
    startGame();
  });


  function enterName() {
    const playerOneInput = document.getElementById('name1');
    const playerOneLabel = document.getElementsByClassName('nameOne');

    const playerTwoInput = document.getElementById('name2');
    const playerTwoLabel = document.getElementsByClassName('nameTwo');

    if (playerOneInput.value != '' && playerTwoInput.value != '') {
      playerOneLabel[0].textContent = playerOneInput.value;
      playerTwoLabel[0].textContent = playerTwoInput.value;

    } else {
      playerOneInput.value = 'Enter A Name';
      playerTwoInput.value = 'Enter A Name';
    }
  }

  function startGame() {
    // Put the $button.on() inside a function
    // On button click, start the game.
    $button.on('click', function() {
      enterName();
      $start.css('display', 'none');
      $finish1.css('display', 'none');
      $finish2.css('display', 'none');
      $player1.toggleClass('active');
      togglePlayer();
    });
  }



  function play(player) {
    $('.box').hover(
      function() {
        $(this).toggleClass(player.boxFill);
      });
  }

  function pickSquare(player) {
    $('.box').click(
      function() {
        $(this).css({'background-image': 'url(' + player.svg + ')'});
        $(this).css({'background-color': player.bgColor});
        count++;
        console.log(count);
        increaseCount();
      }
    )
  }

  function increaseCount() {
    if (count < 9) {
      togglePlayer();
    } else if (count === 9) {
      $finish1.css('display', 'block');
      count = 0;
    }
  }

  function togglePlayer() {
    // Changes the active O or X on game board.
    if (count === 0) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player1);
      pickSquare(player1);
    } else if (count != 0 && $player1.hasClass('active')) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player1);
      pickSquare(player1);
    } else if ($player2.hasClass('active')) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player2);
      pickSquare(player2);
    }
  }


}) (window);
