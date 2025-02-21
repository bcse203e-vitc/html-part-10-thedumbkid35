function generateTable() {
    const number = document.getElementById("numberInput").value;

    if (number === "" || isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    const tableBody = document.getElementById("multiplicationTable").getElementsByTagName("tbody")[0];

    tableBody.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = number; 
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = i; 
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = number * i; 
        row.appendChild(cell3);

        tableBody.appendChild(row);
    }
}

