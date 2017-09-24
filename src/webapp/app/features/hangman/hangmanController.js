"use strict";

(function() {

    let HangmanController =  function($http) {
        let vm = this;

        vm.showStartButton = true;
        vm.showGetDefinition = true;
        vm.showMistakeLetters = "";
        vm.gallows = "hangmanBlank.jpg";
        vm.showWinLoseMessage = "";
        vm.games = 0;
        vm.losses = 0;
        vm.wins = 0;

        let word = "";
        let letters = [];

        let mistakes = 0;

        function getWordList() {
            $http.get("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt")
                .then(function (response) {
                    let wordList = response.data.split("\n");
                    console.log("wordList length = " + wordList.length);
                    setupGame(wordList);
                }, function (error) {
                    console.log("getWordList ERROR: " + error);
                });
        }

        function chooseWordFrom(list) {
            if (list.length > 0) {
                let random = Math.floor(Math.random() * list.length);
                let randWord = list[random];
                return randWord.toUpperCase();
            } else {
                alert("Error: no words in list");
            }
        }

        vm.start = function (){
            vm.showStartButton = false;
            vm.showLoading = true;
            getWordList();
        };

        function setupGame(list) {
            word = chooseWordFrom(list);
            console.log("Word is " + word);
            word = word.substring(0,word.length-1); //added this line after work since it started adding mysterious
            for (let i = 0; i < word.length; i++) {        //character at end of string when i tested it at home
                letters[i] = "_";
                vm.showLetters += letters[i] + " ";
            }
            vm.showLoading = false;
            vm.showGuess = true;
            vm.showGallows = true;
            console.log("Ready to play!");
        }

        function drawGallows() {
            switch (true) {
                case (mistakes === 1):
                    vm.gallows = "hangmanNoPost.jpg";
                    break;
                case (mistakes === 2):
                    vm.gallows = "hangmanNoArm.jpg";
                    break;
                case (mistakes === 3):
                    vm.gallows = "hangmanNoPerson.jpg";
                    break;
                case (mistakes === 4):
                    vm.gallows = "hangmanNoBody.jpg";
                    break;
                case (mistakes === 5):
                    vm.gallows = "hangmanNoLegs.jpg";
                    break;
                case (mistakes === 6):
                    vm.gallows = "hangmanNoRope.jpg";
                    break;
                case (mistakes === 7):
                    vm.gallows = "hangmanComplete.jpg";
                    break;
                default:
                    alert("Draw error");
            }
        }

        function win() {
            vm.wins++;
            vm.games++;
            vm.showGuess = false;
            vm.showWinLoseMessage = "You won! Well played!";
            vm.showPlayAgain = true;
        }

        function lose() {
            vm.losses++;
            vm.games++;
            vm.showGuess = false;
            vm.showWinLoseMessage = "You lost! The word was " + word;
            vm.showPlayAgain = true;
        }

        function mistake() {
            mistakes++;
            drawGallows();
            if (mistakes === 7) {
                lose();
            }
        }

        vm.checkLetter = function (guessedLetter) {
            if (word.length>0) {
                console.log("guessedLetter = " + guessedLetter);
                if (word.includes(guessedLetter)) {
                    let index = word.indexOf(guessedLetter);
                    for (let k = index; k < word.length; k++) {
                        if (word.charAt(k) === guessedLetter) {
                            letters[k] = guessedLetter;
                        }
                    }
                    vm.showLetters = "";
                    for (let j = 0; j < letters.length; j++) {
                        vm.showLetters += letters[j] + " ";
                    }

                    let stringLetters = "";
                    for (let s = 0; s < letters.length; s++) {
                        stringLetters += letters[s];
                    }
                    if (stringLetters === word) {
                        win();
                    }
                } else if (guessedLetter===undefined) {
                    alert("Don't forget to choose a letter");
                } else {
                    vm.showMistakeLetters += guessedLetter + " ";
                    mistake();
                }
            } else {
                alert("Hold on, the game hasn't started yet!");
            }
        };

        vm.checkWord = function (guessedWord) {
            if (word.length>0) {
                guessedWord = guessedWord.toUpperCase();
                if (word === guessedWord) {
                    win();
                } else {
                    mistake();
                }
            } else if (guessedWord==="") {
                alert("Don't forget to choose a word");
            } else {
                alert("Hold on, the game hasn't started yet!");
            }
        };

        vm.getDefinition = function () {
            vm.showGetDefinition = false;
            /*vm.showLoadingDefinition = true;
            $http({
                method: "GET",
                url: "https://od-api.oxforddictionaries.com/api/v1/inflections/en/" + word.toLowerCase(),
                headers: {
                    "Accept": "application/json",
                    "app_id": "1643e9d1",
                    "app_key": "ffd1e350ac1275bd2b8c23bca8c064d1"}
                }).then(function (response) {
                    console.log(word + " confirmed to be in dictionary");
                    let rootWord = response.data.results.lexicalEntries.inflectionOf.text;
                    console.log("rootWord = " + rootWord);
                    $http({
                        method: "GET",
                        url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + rootWord,
                        headers: {
                            "Accept": "application/json",
                            "app_id": "1643e9d1",
                            "app_key": "ffd1e350ac1275bd2b8c23bca8c064d1"
                        }
                        }).then(function (response) {
                            console.log("Received definition for " + rootWord);
                            vm.definition = response.data.results.lexicalEntries.entries.senses.definitions[0];
                            vm.showLoadingDefinition = false;
                        }, function (error) {
                            console.log("getDefinition ERROR: " + error);
                            vm.showLoadingDefinition = false;
                            vm.definition = "Error loading definition";
                        });
                }, function (error) {
                    console.log("getDefinition ERROR: " + error);
                    vm.showLoadingDefinition = false;
                    vm.definition = "Error loading definition";
                });*/
            vm.definition = "Sorry, not yet implemented";
        };

        vm.reset = function () {
            word = "";
            letters = [];
            mistakes = 0;
            vm.showStartButton = true;
            vm.showLetters = "";
            vm.showGetDefinition = true;
            vm.definition = "";
            vm.showMistakeLetters = "";
            vm.showGallows = false;
            vm.gallows = "hangmanBlank.jpg";
            vm.showWinLoseMessage = "";
            vm.showPlayAgain = false;
            vm.showStats = true;
        };

    };

    alexApp.controller('hangmanController', ['$http', HangmanController]);
}());