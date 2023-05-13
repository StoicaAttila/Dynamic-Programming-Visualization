function CoinChange(coins, amount) {
    const n = coins.length
    const table = new Array(n + 1).fill(null).map(() => new Array(amount + 1).fill(Infinity));

    for (let i = 0; i <= n; i++) {
        table[i][0] = 0
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i - 1] <= j) {
                table[i][j] = Math.min(table[i - 1][j], 1 + table[i][j - coins[i - 1]])
            } else {
                table[i][j] = table[i - 1][j]
            }
        }
    }

    return table[n][amount] === Infinity ? -1 : table[n][amount]
}

export default CoinChange