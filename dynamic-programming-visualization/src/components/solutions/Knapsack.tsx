function Knapsack(capacity, weights, values) {
    const n = weights.length
    const table = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0))

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i - 1] <= j) {
                table[i][j] = Math.max(
                    values[i - 1] + table[i - 1][j - weights[i - 1]],
                    table[i - 1][j]
                )
            } else {
                table[i][j] = table[i - 1][j]
            }
        }
    }

    return table[n][capacity]
}

export default Knapsack