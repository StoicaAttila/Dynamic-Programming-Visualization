import "./problems.css";

async function countCoinChange(delay: number): Promise<number> {
    // Get user input for the target amount
    const targetInput = prompt("Enter the target amount:")!;
    const target = parseInt(targetInput);

    // Get user input for the coin denominations
    const coinInput = prompt("Enter the coin denominations, separated by spaces:")!;
    const coins = coinInput.split(" ").map(Number);

    // Create container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create container for tables
    const containerTable = document.createElement("div");
    containerTable.classList.add("containerTable");

    // Create table for coin change
    const table = document.createElement("table");
    const row = document.createElement("tr");
    for (let i = 0; i < coins.length; i++) {
        const cell = document.createElement("td");
        cell.textContent = coins[i].toString();
        row.appendChild(cell);
    }
    table.appendChild(row);

    // Create the tableDP
    const tableDP = document.createElement("table");
    for (let i = 0; i <= coins.length; i++) {
        const rowDP = document.createElement("tr");
        for (let j = 0; j <= target; j++) {
            const cellDP = document.createElement("td");
            cellDP.textContent = "-";
            rowDP.appendChild(cellDP);
        }
        tableDP.appendChild(rowDP);
    }

    // Add the table to the table container
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

    // Initialize the dp array with base cases
    const dp: number[][] = [];
    dp[0] = Array(target + 1).fill(0);
    for (let i = 0; i <= target; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        tableDP.rows[0].cells[i].textContent = "0";
        tableDP.rows[0].cells[i].classList.add("final");
    }
    // Fill up the dp array using the dynamic programming approach
    for (let i = 1; i <= coins.length; i++) {
        dp[i] = [1];
        await new Promise((resolve) => setTimeout(resolve, delay));
        tableDP.rows[i].cells[0].textContent = "1";
        tableDP.rows[i].cells[0].classList.add("final");

        for (let j = 1; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i].cells[j].classList.add("current");
            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i - 1].cells[j].classList.add("search");
            await new Promise((resolve) => setTimeout(resolve, delay));
            tableDP.rows[i - 1].cells[j].classList.remove("search");
            tableDP.rows[i].cells[j].textContent = dp[i][j].toString();

            await new Promise((resolve) => setTimeout(resolve, delay));
            calculationBox.textContent = ` If ${j.toString()}(column) >= ${coins[i - 1].toString()}`
            table.rows[0].cells[i - 1].classList.add("search");
            if (j >= coins[i - 1]) {
                let temp = dp[i][j];
                dp[i][j] += dp[i][j - coins[i - 1]];
                await new Promise((resolve) => setTimeout(resolve, delay));
                table.rows[0].cells[i - 1].classList.remove("search");
                tableDP.rows[i].cells[j - coins[i - 1]].classList.add("search");
                calculationBox.textContent = ` TRUE => ${temp.toString()} + ${dp[i][j - coins[i - 1]].toString()}`;
                await new Promise((resolve) => setTimeout(resolve, delay));
                tableDP.rows[i].cells[j - coins[i - 1]].classList.remove("search");
                tableDP.rows[i].cells[j].textContent = dp[i][j].toString()
            }
            else {
                await new Promise((resolve) => setTimeout(resolve, delay));
                calculationBox.textContent = " FALSE";
                table.rows[0].cells[i - 1].classList.remove("search");
            }

            await new Promise((resolve) => setTimeout(resolve, delay));
            calculationBox.textContent = "-"
            tableDP.rows[i].cells[j].classList.remove("current");
            tableDP.rows[i].cells[j].classList.add("final");
        }
    }

    // Find the number of ways to make change for the target amount
    const ways = dp[coins.length][target];

    // Return the number of ways
    calculationBox.textContent = `The number of ways to make change for the target(${target.toString()}) amount: ${ways.toString()}`
    return ways;
}

export default countCoinChange;
