const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());