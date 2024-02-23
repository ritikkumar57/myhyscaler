document.addEventListener("DOMContentLoaded", function() {
    // Sample employee data
    const employees = [
        { id: 1, sales: 10156 },
        { id: 2, sales: 21102 },
        { id: 3, sales: 29851 },
        { id: 4, sales: 42596 },
        { id: 5, sales: 15975 },
        { id: 6, sales: 11109 },
        { id: 7, sales: 48134 },
        { id: 8, sales: 29786 },
        { id: 9, sales: 22467 },
        { id: 10, sales: 51003 },
        { id: 11, sales: 14638 },
        { id: 12, sales: 36982 },
        { id: 13, sales: 18254 },
        { id: 14, sales: 31823 },
        { id: 15, sales: 42159 },
        { id: 16, sales: 13572 },
        { id: 17, sales: 21138 },
        { id: 18, sales: 49601 },
        { id: 19, sales: 49349 },
        { id: 20, sales: 12654 },
        // Add more employee data as needed
    ];

    // Function to calculate incentives
    function calculateIncentives(sales) {
        let incentive = 0;
        let bonus = "";
        let holidayPackage = "No";

        if (sales >= 10000 && sales < 20000) {
            incentive = 1.5;
        } else if (sales >= 20000 && sales < 30000) {
            incentive = 3.0;
        } else if (sales >= 30000 && sales < 50000) {
            incentive = 3.5;
            bonus = "$1000";
        } else if (sales >= 50000) {
            incentive = 5.0;
            bonus = "$1000";
            holidayPackage = "Yes";
        }

        return { incentive, bonus, holidayPackage };
    }

    // Function to display employee data in table rows
    function displayEmployeeData() {
        const tableBody = document.querySelector("#employeeTable tbody");

        employees.forEach(employee => {
            const { id, sales } = employee;
            const { incentive, bonus, holidayPackage } = calculateIncentives(sales);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>Employee ${id}</td>
                <td>${sales}</td>
                <td>${incentive}%</td>
                <td>${bonus}</td>
                <td>${holidayPackage}</td>
            `;

            tableBody.appendChild(row);
        });
    }

    // Display employee data when the page loads
    displayEmployeeData();
}); 

document.addEventListener("DOMContentLoaded", function() {
    // Sample employee data
    const employees = [
        { id: 1, sales: 10156 },
        { id: 2, sales: 21102 },
        { id: 3, sales: 29851 },
        { id: 4, sales: 42596 },
        { id: 5, sales: 15975 },
        { id: 6, sales: 11109 },
        { id: 7, sales: 48134 },
        { id: 8, sales: 29786 },
        { id: 9, sales: 22467 },
        { id: 10, sales: 51003 },
        { id: 11, sales: 14638 },
        { id: 12, sales: 36982 },
        { id: 13, sales: 18254 },
        { id: 14, sales: 31823 },
        { id: 15, sales: 42159 },
        { id: 16, sales: 13572 },
        { id: 17, sales: 21138 },
        { id: 18, sales: 49601 },
        { id: 19, sales: 49349 },
        { id: 20, sales: 12654 }
        // Add more employee data as needed
    ];

    // Function to calculate incentives
    function calculateIncentives(sales) {
        let incentive = 0;
        let bonus = "";
        let holidayPackage = "No";

        if (sales >= 10000 && sales < 20000) {
            incentive = 1.5;
        } else if (sales >= 20000 && sales < 30000) {
            incentive = 3.0;
        } else if (sales >= 30000 && sales < 50000) {
            incentive = 3.5;
            bonus = "$1000";
        } else if (sales >= 50000) {
            incentive = 5.0;
            bonus = "$1000";
            holidayPackage = "Yes";
        }

        return { incentive, bonus, holidayPackage };
    }

    // Function to display employee data in table rows
    function displayEmployeeData() {
        const tableBody = document.querySelector("#employeeTable tbody");

        employees.forEach(employee => {
            const { id, sales } = employee;
            const { incentive, bonus, holidayPackage } = calculateIncentives(sales);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>Employee ${id}</td>
                <td>${sales}</td>
                <td>${incentive}%</td>
                <td>${bonus}</td>
                <td>${holidayPackage}</td>
            `;

            tableBody.appendChild(row);
        });
    }

    // Display employee data when the page loads
    displayEmployeeData();

    // Form submission for adding a holiday package
    const addPackageForm = document.getElementById("addPackageForm");
    addPackageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const packageDetails = Object.fromEntries(formData.entries());
        console.log("Adding Holiday Package:", packageDetails);
        // Add logic to add the holiday package
        console.log("Holiday package added successfully!");
        this.reset();
    });
});
