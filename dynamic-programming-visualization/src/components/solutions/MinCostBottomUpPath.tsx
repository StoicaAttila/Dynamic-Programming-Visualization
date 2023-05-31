import "./MinMaxCostPath.css"

async function findMinCostBottomUpPath(delay: number): Promise<number> {
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

    //Create container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create container for tables
    const containerTable = document.createElement("div");
    containerTable.classList.add("containerTable");

    // Create the table
    const table = document.createElement("table");
    for (let i = 0; i < m; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("td");
            cell.textContent = matrix[i][j].toString();
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Create the tableDP
    const tableDP = document.createElement("table");
    for (let i = 0; i < m; i++) {
        const rowDP = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const cellDP = document.createElement("td");
            cellDP.textContent = "0";
            rowDP.appendChild(cellDP);
        }
        tableDP.appendChild(rowDP);
    }

    // Add the tables to the document
    containerTable.appendChild(table);
    containerTable.appendChild(tableDP);

    // Create container for refresh button and calculation box
    const buttonAndBox = document.createElement("div");
    buttonAndBox.classList.add("buttonAndBox");

    // Create refresh button
    const refreshButton = document.createElement("button");
    refreshButton.textContent = "Refresh";
    refreshButton.addEventListener("click", function () {
        window.location.reload();
    });
    refreshButton.addEventListener("mouseover", function () {
        refreshButton.style.backgroundColor = "gray"
    });
    refreshButton.addEventListener("mouseout", function () {
        refreshButton.style.backgroundColor = "white";
    });
    buttonAndBox.appendChild(refreshButton);

    // Create calculation box
    const calculationBox = document.createElement("p");
    calculationBox.textContent = "Calculation Box"
    buttonAndBox.appendChild(calculationBox);

    // Add tables, button and box to container
    container.appendChild(containerTable);
    container.appendChild(buttonAndBox);

    // Add everything to the document
    document.body.appendChild(container);

    // Initialize the dp array with the first row and column
    const dp: number[][] = [];
    dp[0] = [matrix[0][0]];
    await new Promise((resolve) => setTimeout(resolve, delay));
    tableDP.rows[0].cells[0].classList.add("current-path");

    await new Promise((resolve) => setTimeout(resolve, delay));
    table.rows[0].cells[0].classList.add("search-path");
    calculationBox.textContent = ` ${matrix[0][0].toString()}`

    await new Promise((resolve) => setTimeout(resolve, delay));
    table.rows[0].cells[0].classList.remove("search-path");
    tableDP.rows[0].cells[0].textContent = dp[0].toString();
    tableDP.rows[0].cells[0].classList.remove("current-path");
    tableDP.rows[0].cells[0].classList.add("final-cost-path");
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + matrix[0][j];

        await new Promise((resolve) => setTimeout(resolve, delay));
        tableDP.rows[0].cells[j].classList.add("current-path");

        await new Promise((resolve) => setTimeout(resolve, delay));
        table.rows[0].cells[j].classList.add("search-path");
        tableDP.rows[0].cells[j - 1].classList.add("search-path");

        calculationBox.textContent = ` ${matrix[0][j].toString()} + ${dp[0][j - 1].toString()}`

        await new Promise((resolve) => setTimeout(resolve, delay));
        table.rows[0].cells[j].classList.remove("search-path");
        tableDP.rows[0].cells[j - 1].classList.remove("search-path");
        tableDP.rows[0].cells[j].textContent = dp[0][j].toString();
        tableDP.rows[0].cells[j].classList.remove("current-path");
        tableDP.rows[0].cells[j].classList.add("final-cost-path");
    }
    for (let i = 1; i < m; i++) {
        dp[i] = [dp[i - 1][0] + matrix[i][0]];

        await new Promise((resolve) => setTimeout(resolve, delay));
        tableDP.rows[i].cells[0].classList.add("current-path");

        await new Promise((resolve) => setTimeout(resolve, delay));
        table.rows[i].cells[0].classList.add("search-path");
        tableDP.rows[i - 1].cells[0].classList.add("search-path");

        calculationBox.textContent = ` ${matrix[i][0].toString()} + ${dp[i - 1][0].toString()}`

        await new Promise((resolve) => setTimeout(resolve, delay));
        table.rows[i].cells[0].classList.remove("search-path");
        tableDP.rows[i - 1].cells[0].classList.remove("search-path");
        tableDP.rows[i].cells[0].textContent = dp[i].toString();
        tableDP.rows[i].cells[0].classList.remove("current-path");
        tableDP.rows[i].cells[0].classList.add("final-cost-path");
    }

    // Fill up the dp array using the recurrence relation
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i].cells[j].classList.add("current-path");

            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i - 1].cells[j].classList.add("search-path");
            tableDP.rows[i].cells[j - 1].classList.add("search-path");

            calculationBox.textContent = ` Min(${dp[i - 1][j].toString()}, ${dp[i][j - 1].toString()})`

            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i - 1].cells[j].classList.remove("search-path");
            tableDP.rows[i].cells[j - 1].classList.remove("search-path");
            tableDP.rows[i].cells[j].textContent = Math.min(dp[i - 1][j], dp[i][j - 1]).toString();

            await new Promise((resolve) => setTimeout(resolve, delay));
            table.rows[i].cells[j].classList.add("search-path");

            calculationBox.textContent = ` Min(${dp[i - 1][j].toString()}, ${dp[i][j - 1].toString()}) + ${matrix[i][j].toString()}`

            await new Promise((resolve) => setTimeout(resolve, delay));
            table.rows[i].cells[j].classList.remove("search-path");
            tableDP.rows[i].cells[j].textContent = dp[i][j].toString();
            tableDP.rows[i].cells[j].classList.remove("current-path");
            tableDP.rows[i].cells[j].classList.add("final-cost-path");
        }
    }

    calculationBox.textContent = "-";

    // Find the minimum cost path
    const minCost = dp[m - 1][n - 1];
    const path: [number, number][] = [[m - 1, n - 1]];
    let i = m - 1, j = n - 1;
    await new Promise((resolve) => setTimeout(resolve, delay));
    table.rows[i].cells[j].classList.add("final-cost-path");
    while (i > 0 || j > 0) {
        if (i === 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i].cells[j - 1].classList.add("search-path");
            j--;
        } else if (j === 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i - 1].cells[j].classList.add("search-path");
            i--;
        } else {
            if (dp[i - 1][j] < dp[i][j - 1]) {
                await new Promise((resolve) => setTimeout(resolve, delay));
                tableDP.rows[i - 1].cells[j].classList.add("search-path");
                tableDP.rows[i].cells[j - 1].classList.add("search-path");
                i--;
            } else {
                await new Promise((resolve) => setTimeout(resolve, delay));
                tableDP.rows[i - 1].cells[j].classList.add("search-path");
                tableDP.rows[i].cells[j - 1].classList.add("search-path");
                j--;
            }
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
        for (let k1 = 0; k1 < m; k1++) {
            for (let k2 = 0; k2 < n; k2++) {
                tableDP.rows[k1].cells[k2].classList.remove("search-path")
            }
        }
        path.unshift([i, j]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        table.rows[i].cells[j].classList.add("final-cost-path");
    }

    // Return the minimum cost path
    calculationBox.textContent = ` The minimum cost path is: ${minCost.toString()}`
    return minCost;
}

export default findMinCostBottomUpPath;
