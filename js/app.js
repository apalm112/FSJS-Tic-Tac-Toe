/* eslint-disable*/
// ABOVE LINE DISABLES ESLINT FOR THIS FILE.
// Treehouse Project-04: Tic-Tac-Toe Game
'use strict';
(function(module) {

/*
  From Treehouse The Module Pattern:

  (function() {
    // code
  }(window) );

  That is the self-enclosing function or
  the module pattern.
  Can also use a '+' or '!' sign,

  !function(module) {
    // code
  }(window);
*/


// Global Variables -----------------------------------------------------
  // Get the start screen div
  const $start = $('#start');
  // Get the button that hides the start screen
  const $button = $('.button');
  // Get 'O' win game div
  const $finish1 = $('#finish1');
  const $finish2 = $('#finish2');
  const $tie = $('#tie');

  // Gets 'O' & 'X' divs at top of game board
  const $player1 = $('#player1');
  const $player2 = $('#player2');
  // Gets entire game board div
  const $board = $('#board');
  // Gets ul of of game board
  const $boxes = $('.boxes');
  // create MT array to hold stuff?????
  let twoDimArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  // Get all the li's of the game grid
  const game = document.querySelectorAll('.boxes');
  // Trying to code 7/13/17
  let gridSquare = document.querySelectorAll('.box');
  let turn = 0;
  // Count something????
  let count = 0;

  const player1 = {
    name: 'player1',
    bgColor: '#FFA000',
    svg: 'img/o.svg',
    boxFill: 'box-filled-1',
    isWinner: false,
    grid: 'O',
  };
  const player2 = {
    name: 'player2',
    bgColor: '#3688C3',
    svg: 'img/x.svg',
    boxFill: 'box-filled-2',
    isWinner: false,
    grid: 'X',
  };

  let liNodeList = document.querySelectorAll('.box');
  let liHTMLCollection = document.getElementsByClassName('.box');

  const boardState = {
    // Object to experiment w/ making an Object to track the state of the game in the DOM & maybe help control the game w/ its own methods.
  };

// Main Functions ------------------------------------------------------------

  // On page load, show the start screen.
  $(document).ready(function() {
    $start.css('display', 'block');
    // Hide the various winning screens.
    $finish1.css('display', 'none');
    $finish2.css('display', 'none');
    $tie.css('display', 'none');
    // call a function which controls the start button
    // and won't start game until a name is entered
    startGame();
  });

  function enterName() {
    // Meets rubric EC: On the start screen, prompt the user add their name before the game starts.
    const playerOneInput = document.getElementById('name1');
    const playerOneLabel = document.getElementsByClassName('nameOne');
    const playerTwoInput = document.getElementById('name2');
    const playerTwoLabel = document.getElementsByClassName('nameTwo');

    if (playerOneInput.value != '' && playerTwoInput.value != '') {
      // Meets rubric: Display the player’s name on the board screen during game play
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

  function startGame() {
    // On button click, start the game.
    $button.on('click', function() {
    //  enterName();
	    $start.css('display', 'none');
	    $finish1.css('display', 'none');
	    $finish2.css('display', 'none');
      setGridToZero('MT');
      $player1.toggleClass('active');
      hover(player1);
      clickIt(player1);
    });
  }

  let liZero = document.querySelectorAll('.box');
  // TEST LINE BELOW
  let turd = document.getElementsByClassName('.box');

  function setGridToZero(num) {
    for (let idx=0;idx<liZero.length;idx++) {
     liZero[idx].setAttribute('gridValue', num);
    }
  }

  function hover(player) {
  // Function checks if grid square is empty, if so then displays current player symbol & color on grid.
    $('.box').hover(
      function() {
            $(this).toggleClass(player.boxFill, 'MT');
          });
  }
  function clickIt(player) {
    $('.box').one('click', function() {
			// Conditional checks the board li to see if it's MT, if MT then change color/img.
      if ($(this)[0].attributes[1].value === 'MT') {
        if ( $player1.hasClass('active') ) {
          $(this).css({'background-image': 'url(' + player1.svg + ')'});
          $(this).css({'background-color': player1.bgColor});
					// Set value to 'O' or 'X'
					$(this)[0].setAttribute('gridValue', player1.grid);
          count++;
          turn++;
          console.log(turn);
          togglePlayer();
        } else if ( $player2.hasClass('active') ) {
          $(this).css({'background-image': 'url(' + player2.svg + ')'});
          $(this).css({'background-color': player2.bgColor});
          // Set value to 'O' or 'X'
          $(this)[0].setAttribute('gridValue', player2.grid);
          count++;
          turn++;
          console.log(turn);
          togglePlayer();
        }
      }
		});
  }

  function togglePlayer() {
    // Play alternates between X and O.
    $player1.toggleClass('active');
    $player2.toggleClass('active');
    hover(player2);
    clickIt(player2);
  }

	//	TODO: The game ends when one player has three of their symbols in a row either horizontally, vertically or diagonally. If all of the squares are filled and no players have three in a row, the game is a tie.


	//	TODO: Add programming so that when the game ends, the board disappears and the game end screen appears. Use the tictactoe-03-winner1.png and tictactoe-04-winner2.png mockups, and the win.txt HTML snippet for guidance.
		// Depending on the game results the final screen should:	Show the word "Winner" or the phrase "It's a Tie!"
		// Add the appropriate class to the <div> for the winning screen: <div class="screen screen-win" id="finish"> screen-win-one for player 1, screen-win-two for player two, or screen-win-tie if the game ends with no winner. For example, if player 1 wins, the HTML should look like this: <div class="screen screen-win screen-win-one" id="finish">

		//	TODO: Add programming so that when a player pushes the "New Game" button, the board appears again, empty, and a new game begins.

		//	TODO:	Use the module pattern to wrap all of your JavaScript code into a single global variable or an immediately invoked function.

})(window);
