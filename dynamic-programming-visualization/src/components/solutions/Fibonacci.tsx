import "./MinMaxCostPath.css"

async function fibonacci(delay: number) {
    // Get user input for sequence limit
    const limit: number = parseInt(prompt("Enter how long the sequence you want to be: ")!);

    // Check if value is correct
    if (isNaN(limit)) {
        alert("Please enter a valid number!");
        return;
    }

    //Create container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create container for table
    const containerTable = document.createElement("div");
    containerTable.classList.add("containerTable");

    // Create the table
    const table = document.createElement("table");
    const row = document.createElement("tr");
    for (let i = 0; i < limit; i++) {
        const cell = document.createElement("td");
        cell.textContent = "-";
        row.appendChild(cell);
    }
    table.appendChild(row);
    containerTable.appendChild(table);

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

    document.body.appendChild(container);

    const dp: number[] = [];

    // Base cases
    dp[0] = 0;
    dp[1] = 1;
    table.rows[0].cells[0].textContent = dp[0].toString();
    table.rows[0].cells[1].textContent = dp[1].toString();
    table.rows[0].cells[0].classList.add("final-cost-path");
    table.rows[0].cells[1].classList.add("final-cost-path");

    for (let i = 2; i < limit; i++) {
        // Calculate the i-th Fibonacci number
        dp[i] = dp[i - 1] + dp[i - 2];
        await new Promise((resolve) => setTimeout(resolve, delay));
        table.rows[0].cells[i].classList.add("current-path");
        table.rows[0].cells[i - 1].classList.add("search-path");
        table.rows[0].cells[i - 2].classList.add("search-path");
        calculationBox.textContent = `${dp[i - 2].toString()} + ${dp[i - 1].toString()}`;

        await new Promise((resolve) => setTimeout(resolve, delay));
        table.rows[0].cells[i].textContent = dp[i].toString();
        table.rows[0].cells[i].classList.remove("current-path");
        table.rows[0].cells[i].classList.add("final-cost-path");
        table.rows[0].cells[i - 1].classList.remove("search-path");
        table.rows[0].cells[i - 2].classList.remove("search-path");
    }

    calculationBox.textContent = `The ${limit.toString()}. fibonacci number is: ${dp[limit - 1].toString()}`;
}

export default fibonacci;