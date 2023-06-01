import "./problems.css";

async function catalanNumbers(delay: number) {
    // Get user input for sequence limit
    const limit: number = parseInt(prompt("Enter how long the sequence you want to be: ")!);

    // Check if value is correct
    if (isNaN(limit)) {
        alert("Please enter a valid number!");
        return;
    }

    // Create container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create container for table
    const containerTable = document.createElement("div");
    containerTable.classList.add("containerTable");

    // Create the table
    const table = document.createElement("table");
    const row = document.createElement("tr");
    for (let i = 0; i <= limit; i++) {
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
        refreshButton.style.backgroundColor = "gray";
    });
    refreshButton.addEventListener("mouseout", function () {
        refreshButton.style.backgroundColor = "white";
    });
    buttonAndBox.appendChild(refreshButton);

    // Create calculation box
    const calculationBox = document.createElement("p");
    calculationBox.textContent = "Calculation Box";
    buttonAndBox.appendChild(calculationBox);

    // Add tables, button and box to container
    container.appendChild(containerTable);
    container.appendChild(buttonAndBox);

    document.body.appendChild(container);

    const dp: number[] = [];

    // Base case
    dp[0] = 1;
    table.rows[0].cells[0].textContent = dp[0].toString();
    table.rows[0].cells[0].classList.add("final");

    for (let i = 1; i <= limit; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            // Calculate the i-th Catalan number
            let temp = dp[i];
            dp[i] += dp[j] * dp[i - j - 1];
            await new Promise((resolve) => setTimeout(resolve, delay));
            table.rows[0].cells[i].classList.add("current");
            table.rows[0].cells[j].classList.add("search");
            table.rows[0].cells[i - j - 1].classList.add("search");
            calculationBox.textContent = `(${dp[j].toString()} * ${dp[i - j - 1].toString()}) + ${temp.toString()}`;

            await new Promise((resolve) => setTimeout(resolve, delay));
            table.rows[0].cells[i].textContent = dp[i].toString();
            table.rows[0].cells[j].classList.remove("search");
            table.rows[0].cells[i - j - 1].classList.remove("search");
        }
        table.rows[0].cells[i].classList.remove("current");
        table.rows[0].cells[i].classList.add("final");
    }

    calculationBox.textContent = `The ${limit.toString()}. Catalan number is: ${dp[limit].toString()}`;
}

export default catalanNumbers;
