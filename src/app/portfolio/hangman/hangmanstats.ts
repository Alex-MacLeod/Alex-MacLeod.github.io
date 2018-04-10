export class HangmanStats {
    constructor(
        private wins: number = 0,
        private losses: number = 0
      ) {  }

    public getWins(): number {
        return this.wins;
    }

    public getLosses(): number {
        return this.losses;
    }

    public addWin() {
        this.wins++;
    }

    public addLoss() {
        this.losses++;
    }

    public getGamesPlayed(): number {
        return this.wins + this.losses;
    }

    public getWinPercentage(): number {
        return this.getGamesPlayed() === 0 ? 0 : (this.wins / this.getGamesPlayed()) * 100;
    }
}
