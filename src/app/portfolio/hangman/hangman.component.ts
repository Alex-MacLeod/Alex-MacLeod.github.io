import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HangmanStats } from './hangmanstats';
import { HangmanService } from './hangman.service';

@Component({
    selector: 'app-hangman',
    templateUrl: './hangman.component.html',
    styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
    private chooseTheme: FormGroup;
    private gameThemes: Array<string> = ["Anime", "Football", "Singapore", "Software Development", "UK Politics", "Random", "All"];
    private gameStats: HangmanStats = new HangmanStats;
    private gameWord: string | undefined;
    private wordLists: any[];
    private alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    private letters: Array<string> = [];
    private mistakes: number = 0;

    constructor(
        private formbuilder: FormBuilder,
        private hangmanService: HangmanService
    ) { }

    ngOnInit(): void {
        this.hangmanService.loadWordLists().subscribe(wordLists => {
            this.wordLists = wordLists;
            console.log(this.wordLists);
        });
        this.createThemeForm();
    }

    createThemeForm(): void {
        this.chooseTheme = this.formbuilder.group({
            theme: ['', Validators.required ]
        });
    }

    startGame(): void {
        const theme = this.setTheme(this.chooseTheme.value.theme);
        this.gameWord = this.getGameWord(theme).toUpperCase();
        console.log(this.gameWord);
        for (let i = 0; i < this.gameWord.length; i++) {
            this.letters[i] = "_";
        }
    }

    setTheme(theme: string): string {
        if (theme === "Random") {
            let randomThemes: Array<string> = this.gameThemes.filter((theme) => theme !== "Random");
            return this.randomElementFrom(randomThemes);
        } else {
            return theme;
        }
    }

    getGameWord(theme: string): string {
        let themeWordList = [];
        if (theme === "All") {
            this.wordLists.forEach((list) => themeWordList = themeWordList.concat(list.words));
        } else {
            themeWordList = this.wordLists.find((list) => list.theme === theme).words;
        }
        console.log(themeWordList);
        return this.randomElementFrom(themeWordList);
    }

    randomElementFrom(array: Array<any>): any {
        const randomIndex = Math.floor(Math.random()*(array.length));
        return array[randomIndex];
    }

    guessLetter(letter: string): void {
        console.log(letter);
        if (this.gameWord.includes(letter)) {
            let index: number = this.gameWord.indexOf(letter);
            for (let k: number = index; k < this.gameWord.length; k++) {
                if (this.gameWord.charAt(k) === letter) {
                    this.letters[k] = letter;
                }
            }
            //TODO: button disabled, tick
            if (this.letters.join("") === this.gameWord) {
                this.endGame();
            }
        } else {
            //TODO: button disabled, cross
            this.madeMistake();
        }
    }

    guessWord(word: string): void {
        console.log(word);
        if (word.length>0) {
            word = word.toUpperCase();
            if (this.gameWord === word) {
                this.endGame();
            } else {
                this.madeMistake();
            }
        } else {
            alert("Don't forget to choose a word");
        }
    }

    madeMistake(): void {
        this.mistakes++;
        console.log("Mistakes: " + this.mistakes);
        if (this.mistakes >= 7) {
            this.endGame();
        }
        //TODO: draw hangman
    }

    endGame(): void {
        if (this.mistakes >= 7) {
            console.log("YOU LOSE");
            //TODO: lose game
            this.gameStats.addLoss();
        } else {
            console.log("YOU WIN");
            //TODO: win game
            this.gameStats.addWin();
        }
        console.log(this.gameStats);
        this.resetGame();
    }

    resetGame(): void {
        this.gameWord = undefined;
        this.letters = [];
        this.mistakes = 0;
    }

}
