const testScores = {
    _scores: [],

    add(score) {
        if (typeof score === 'number' && score >= 0 && score <= 100) {
            this._scores.push(score);
        } else {
            throw new Error("Score must be a number from 0 to 100.");
        }
    },

    get total() {
        return this._scores.reduce((total, score) => total + score, 0);
    },

    get length() {
        return this._scores.length;
    },

    get avg() {
        return this.length === 0 ? 0 : this.total / this.length;
    },

    get lastThree() {
        const len = this._scores.length;
        return len >= 3 ? this._scores.slice(-3) : this._scores.slice();
    },

    toString() {
        return this._scores.join(", ");
    },

    * [Symbol.iterator]() {
    for (const score of this._scores) {
        yield score;
    }
}
};
