// Treehouse Project-04: Tic-Tac-Toe Game
'use strict';
(function() {
// Global Variables -----------------------------------------------------
	// Get the various screen divs
	const $start = $('#start');
	const $button = $('.button');
	const $finish1 = $('#finish1');
	const $finish2 = $('#finish2');
	const $tie = $('#tie');
	// Gets 'O' & 'X' divs at top of game board
	const $player2 = $('#player2');
	const $player1 = $('#player1');
	// Gets ul of of game board
	const $board = $('.boxes');
	const $box = $('.box');
	let turn = 0;
	const player1 = {
		svg: 'img/o.svg',
		boxFill: 'box-filled-1',
		grid: 'O',
		isWinner: false,
	};
	const player2 = {
		svg: 'img/x.svg',
		boxFill: 'box-filled-2',
		grid: 'X',
		isWinner: false,
	};
// Main Functions ------------------------------------------------------------
	$(document).ready(function() {
		// Load the start screen, call function to play game.
		$start.css('display', 'block');
		// Hide the various winning screens.
		$finish1.css('display', 'none');
		$finish2.css('display', 'none');
		$tie.css('display', 'none');
		startGame();
	});

	function startGame() {
		// Function sets up the game to be played, shows the board, starts player1 to move first.
		$button.on('click', function() {
			enterName();
			// Hide the start screen.
			$start.css('display', 'none');
			setGridToZero('MT');
			// Set player1 to move first.
			$player1.toggleClass('active');
			hover(player1);
			clickSquare();
		});
	}

	function enterName() {
		// If players enter names, then they'll be displayed on the game board & on win screens, default is Player One & Two.
		const playerOneInput = document.getElementById('name1');
		const playerOneLabel = document.getElementsByClassName('nameOne');
		const playerTwoInput = document.getElementById('name2');
		const playerTwoLabel = document.getElementsByClassName('nameTwo');

		if (playerOneInput.value !== '' && playerTwoInput.value !== '') {
			playerOneLabel[0].textContent = playerOneInput.value;
			playerTwoLabel[0].textContent = playerTwoInput.value;
			$start.css('display', 'none');
		} else {
			playerOneInput.placeholder = 'Enter Player 1 Name!';
			playerTwoInput.placeholder = 'Enter Player 2 Name!';
		}
	}

	function setGridToZero(num) {
		// Resets game grid li's class="box", gridValue="MT" for a new game.	Which allows hover & click functions to display player svg/color.
		for (let idx=0;idx<$box.length;idx++) {
			$box[idx].setAttribute('gridValue', num);
		// reset $board li class="box" & reset background
			$box.removeClass().addClass('box');
			$box[idx].style.backgroundColor = '';
			$box[idx].style.backgroundImage = '';
		}
	}

	function hover(player) {
		// Function checks for player active status & if square is empty, if so then displays current player symbol on square & removes it on mouseout.
		if ($player1.hasClass('active'))	{
			$('.box').hover(function() {
				if ( $(this).attr('gridvalue') === 'MT') {
					$(this).css({'backgroundImage': 'url(' + player1.svg + ')'});
				}
			}, function() {
				if ( $(this).attr('gridvalue') === 'MT') {
					$(this).css({'backgroundImage': ''});
				}
			}
				);
		} else if ($player2.hasClass('active')) {
			$('.box').hover(function() {
				if ( $(this).attr('gridvalue') === 'MT') {			$(this).css({'backgroundImage': 'url(' + player2.svg + ')'});
				}
			}, function() {
				if ( $(this).attr('gridvalue') === 'MT') {
					$(this).css({'backgroundImage': ''});
				}
			}
			);
		}
	}

	function clickSquare() {
		// Function allows player to only pick an empty square.
		$('.box').one('click', function() {
			// Conditional checks the board li to see if it's MT, if MT then set color/img to current player.
			if ($(this)[0].attributes[1].value === 'MT') {
				if ( $player1.hasClass('active') ) {
					$(this).addClass(player1.boxFill);
					// Set value to 'O' or 'X'
					$(this)[0].setAttribute('gridValue', player1.grid);
					turn++;
					togglePlayer(player1);
				} else if ( $player2.hasClass('active') ) {
					$(this).addClass(player2.boxFill);
					// Set value to 'O' or 'X'
					$(this)[0].setAttribute('gridValue', player2.grid);
					turn++;
					togglePlayer(player2);
				}
			}
		});
	}

	function togglePlayer(player) {
		// Changes turns between players, once game has reached 5 turns, starts checking for winning combos.
		$player1.toggleClass('active');
		$player2.toggleClass('active');
		hover(player2);
		if (turn >= 5) {
			checkWin(player);
		}
	}

	function checkWin(player) {
		/*Function checks for Win/Tie combinations by comparing gridvalue attribute of board li's.	The gridvalue is set to O/X when a player clicks on an empty square.
		HORIZONTAL
		[1, 3, 5],
		[7, 9, 11],
		[13, 15, 17],
		// DIAGONAL
		[1, 9, 17],
		[5, 9, 13],
		// VERTICAL
		[1, 7, 13],
		[3, 9, 15],
		[5, 11, 17]*/
		if ( $board[0].childNodes[1].outerHTML.includes(player.grid) && $board[0].childNodes[7].outerHTML.includes(player.grid) && $board[0].childNodes[13].outerHTML.includes(player.grid) ) {
			player.isWinner = true;
		} else if ($board[0].childNodes[3].outerHTML.includes(player.grid) && $board[0].childNodes[9].outerHTML.includes(player.grid) && $board[0].childNodes[15].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		} else if ($board[0].childNodes[5].outerHTML.includes(player.grid) && $board[0].childNodes[11].outerHTML.includes(player.grid) && $board[0].childNodes[17].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		} else if ($board[0].childNodes[1].outerHTML.includes(player.grid) && $board[0].childNodes[3].outerHTML.includes(player.grid) && $board[0].childNodes[5].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		} else if ($board[0].childNodes[7].outerHTML.includes(player.grid) && $board[0].childNodes[9].outerHTML.includes(player.grid) && $board[0].childNodes[11].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		} else if ($board[0].childNodes[13].outerHTML.includes(player.grid) && $board[0].childNodes[15].outerHTML.includes(player.grid) && $board[0].childNodes[17].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		} else if ($board[0].childNodes[1].outerHTML.includes(player.grid) && $board[0].childNodes[9].outerHTML.includes(player.grid) && $board[0].childNodes[17].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		} else if ($board[0].childNodes[5].outerHTML.includes(player.grid) && $board[0].childNodes[9].outerHTML.includes(player.grid) && $board[0].childNodes[13].outerHTML.includes(player.grid)) {
			player.isWinner = true;
		}
		winner();
		checkTie(player);
	}

	function checkTie(player) {
		if (turn === 9 && player1.isWinner === false && player2.isWinner === false){
			winner();
		}
	}

	function winner() {
		//	Sets up the finish screens w/ player name if one was entered & displays the screen.
		if (player1.isWinner) {
			const player1Winner = document.getElementsByClassName('nameOne');
			let setPlayer1Winner = document.getElementsByClassName('wrapper-O');
			// display player 1 win screen
			$finish1.css('display', 'block');
			reStartGame();
			if (player1Winner[0].textContent !== 'Player One') {
				setPlayer1Winner[0].children[0].textContent = (player1Winner[0].textContent + ' Wins!');
			} else {
				setPlayer1Winner[0].children[0].textContent = ' Winner';
			}
		} else if (player2.isWinner) {
			const player2Winner = document.getElementsByClassName('nameTwo');
			let setPlayer2Winner = document.getElementsByClassName('wrapper-X');
			// display player 2 win screen
			$finish2.css('display', 'block');
			reStartGame();
			if (player2Winner[0].textContent !== 'Player Two') {
				setPlayer2Winner[0].children[0].textContent = (player2Winner[0].textContent + ' Wins!');
			} else {
				setPlayer2Winner[0].children[0].textContent = 'Winner';
			}
		} else if (!player1.isWinner && !player1.isWinner && turn === 9) {
			// display tie screen
			$tie.css('display', 'block');
			reStartGame();
		}
	}

	function reStartGame() {
		// Sets buttons to clear the win/tie screens, resets the game board to initial values for a new game.
		for (let idx=1;idx<$button.length;idx++) {
			$button[idx].text = 'Press for New Game';
		}
		$button.one('click', function() {
			$finish1.css('display', 'none');
			$finish2.css('display', 'none');
			$tie.css('display', 'none');
			turn=0;
			setGridToZero('MT');
			player1.isWinner = false;
			player2.isWinner = false;
			// Toggle players to reset for new game.
			if ($player2.hasClass('active')) {
				// If player2 is active, then remove class="active"
				$player2.toggleClass('active');
			}
			// Sets player1 to go first in new game.
			if ( !$player1.hasClass('active') ) {
				$player1.toggleClass('active');
			}
			hover(player1);
		});
	}

})(window);
