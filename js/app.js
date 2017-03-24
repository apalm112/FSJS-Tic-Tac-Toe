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
  // $boxes is the ul that holds the game tiles
  const $boxes = $('.boxes');

  const $box = $('.box');
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

  function startGame() {
    // On button click, start the game.
    $button.on('click', function() {
      enterName();
    //  $player1.toggleClass('active');
      togglePlayer();
    });
  }

  function enterName() {
    const playerOneInput = document.getElementById('name1');
    const playerOneLabel = document.getElementsByClassName('nameOne');
    const playerTwoInput = document.getElementById('name2');
    const playerTwoLabel = document.getElementsByClassName('nameTwo');

    if (playerOneInput.value != '' && playerTwoInput.value != '') {
      playerOneLabel[0].textContent = playerOneInput.value;
      playerTwoLabel[0].textContent = playerTwoInput.value;
      $start.css('display', 'none');
      $finish1.css('display', 'none');
      $finish2.css('display', 'none');
    } else {
      playerOneInput.placeholder = 'Enter Player 1 Name!';
      playerTwoInput.placeholder = 'Enter Player 2 Name!';
    }
  }

  function togglePlayer() {
    // TODO: Current Working Position!
      /*      1) Get teh game to alternate btwn O & X
                make it so that a function controls the flow of the game
                each possible action & affect is a seperate function.
                
            2) Active player is correctly hightlighted
            3) Cannot click on already occupied squares
              make it so that when a box is clicked it's class is set to
              'box filled', then Hover function can check each box for 'className === "box filled"' then do Not show O or X.
              */
    // Changes the active O or X on game board.
    if (count === 0) {
      $player1.toggleClass('active');
    //  $player2.toggleClass('active');
      play(player1);
      pickSquare(player1);
    } else if (count === 1 && $player1.hasClass('active')) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player1);
      pickSquare(player1);
    } else if (count === 1 && $player2.hasClass('active')) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player2);
      pickSquare(player2);
    }
  }

  function play(player) {
    // This function controls showing the respective O or X when the cursor hovers over a open tile.
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
      });
  }

  function increaseCount() {
    if (count < 9) {
      togglePlayer();
    } else if (count === 9) {
      $finish1.css('display', 'block');
      count = 0;
    }
  }

}) (window);
