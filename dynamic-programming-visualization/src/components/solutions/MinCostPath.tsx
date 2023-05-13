import "./MinCostPath.css"

async function findMinCostPath(): Promise<number> {
    // Get user input for the matrix size
    const m = parseInt(prompt("Enter number of rows:")!);
    const n = parseInt(prompt("Enter number of columns:")!);

    // Get user input for the matrix values
    const matrix: number[][] = [];
    for (let i = 0; i < m; i++) {
        const row: number[] = [];
        for (let j = 0; j < n; j++) {
            const value = parseInt(prompt(`Enter value for row ${i + 1} column ${j + 1}:`)!);
            row.push(value);
        }
        matrix.push(row);
    }

    // Initialize the dp array with the first row and column
    const dp: number[][] = [];
    dp[0] = [matrix[0][0]];
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + matrix[0][j];
    }
    for (let i = 1; i < m; i++) {
        dp[i] = [dp[i - 1][0] + matrix[i][0]];
    }

    // Fill up the dp array using the recurrence relation
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Find the minimum cost path
    const minCost = dp[m - 1][n - 1];
    const path: [number, number][] = [[m - 1, n - 1]];
    let i = m - 1, j = n - 1;
    while (i > 0 || j > 0) {
        if (i === 0) {
            j--;
        } else if (j === 0) {
            i--;
        } else {
            if (dp[i - 1][j] < dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
        path.unshift([i, j]);
    }

    // Create the table
    const table = document.createElement("table");
    for (let i = 0; i < m; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("td");
            cell.textContent = matrix[i][j].toString();
            if (path.some(([x, y]) => x === i && y === j)) {
                cell.classList.add("min-cost-path");
                //await new Promise((resolve) => setTimeout(resolve, 500));
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Add the table to the document
    document.body.appendChild(table);

    // Return the minimum cost path
    return minCost;
}

export default findMinCostPath;
