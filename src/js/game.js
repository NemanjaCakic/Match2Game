	var Game = {
		cards : '',
		gameWrap : document.getElementById('game-wrap'),
		openingCard : false,
		tilesScored : [],
		tiles : [],
		cardOpened : false,
		cardsLen : 0,
		timeLeft: 60,

		renderGame: function() {
			cards = [
				{
					name: 'facebook',
					icon: '<i class="fa fa-facebook-square"></i>'
				},
				{
					name: 'windows',
					icon: '<i class="fa fa-windows"></i>'
				},
				{
					name: 'android',
					icon: '<i class="fa fa-android"></i>'
				},
				{
					name: 'google',
					icon: '<i class="fa fa-google"></i>'
				},
				{
					name: 'dropbox',
					icon: '<i class="fa fa-dropbox"></i>'
				},
				{
					name: 'dribbble',
					icon: '<i class="fa fa-dribbble"></i>'
				},
				{
					name: 'youtube',
					icon: '<i class="fa fa-youtube-play"></i>'
				},
				{
					name: 'twitter',
					icon: '<i class="fa fa-twitter"></i>'
				},
			];

			cards = cards.concat(cards.slice()).sort(function() {
			  	return .5 - Math.random();
			});


			var template = Handlebars.compile(document.getElementById('cards-template').innerHTML);
			var temp = template(cards);


			// we are appending string so we use insertAdjacentHTML
			// instead of insertChild whitch needs "real" element
			this.gameWrap.insertAdjacentHTML('beforeend', temp);

		},

		handleEvents : function() {
			var cards = [].slice.call(document.querySelectorAll('.card')),
				that = this;

			that.cardsLen = cards.length;

			for (var i = 0; i < that.cardsLen; i++) {
				cards[i].addEventListener('click', (function(i){
					return function(e){
						if (that.openingCard === false) {
							that.openCard(cards[i], e);
						}
					};
				}(i)) );
			}
		},


		finishedGame: function (lose) {
			var that = this
				statusVal = 'You Win';

			var template = Handlebars.compile(document.getElementById('win-template').innerHTML);

			if (lose === true) {
				statusVal = 'You Lose';
			}

			var temp = template({
				'status': statusVal,
			});

			// we are appending string so we use insertAdjacentHTML
			// instead of insertChild whitch needs "real" element
			this.gameWrap.insertAdjacentHTML('beforeend', temp);

			document.getElementById('btn-start-over').addEventListener('click', function(){
				that.startOver();
			});

		},

		openCard: function(card, e) {
				var	tile = card.querySelector('.front'),
					that = this;

				that.openingCard = true;

				// if the same tile is clicked or
				// if clicked on aleready scored tile we return
				if (tile === that.tiles[0] || that.tilesScored.indexOf(tile) > -1) {

					that.openingCard = false;

					return;
				}

				tile.style.zIndex = 100;
				that.tiles.push(tile);

		setTimeout(function(){
				if (that.cardOpened) {
						if (that.tiles[0].dataset.name === that.tiles[1].dataset.name ) {

							that.tilesScored.push(that.tiles[0]);
							that.tilesScored.push(that.tiles[1]);
							that.tiles = [];

							if (that.cardsLen === that.tilesScored.length) {
								that.finishedGame();
							}

						} else {
							that.tiles[0].style.zIndex = 1;
							that.tiles[1].style.zIndex = 1;
						}

						that.tiles = [];
						that.cardOpened = false;

				} else {
					that.cardOpened = true;

			}

			that.openingCard = false;
			}, that.cardOpened ? 1000 : 100);

		},

		startTimer: function() {
			var that = this,
				timer = document.getElementById('game-timer'),
				interval;

			timer.innerHTML = that.timeLeft;

		function startInterval() {
				interval = setInterval(updateTime, 1000);
			}

		function updateTime() {
			that.timeLeft -= 1;
			timer.innerHTML = that.timeLeft;

			if (that.timeLeft === 0) {
				clearInterval(interval);
				that.finishedGame(true);
			}
		}

		startInterval();
	},

	startOver: function() {
		this.gameWrap.innerHTML = '';
		this.timeLeft = 60;
		this.init();
	},
	init : function () {
		this.renderGame();
		this.handleEvents();
		this.startTimer();
	}
};

	Game.init();