// Create an object representing the reader
let reader = {
    Name: 'Samane',
    LastName: 'Razmi',
    MiddleName: 'Sama',
    Age:'33',
    Colors: ['Blue', 'Green', 'Red'],
    Interests: ['Driving', 'Traveling', 'Cooking','Playing Guitar'],
    Singers: ['Michael Jackson', 'Jennifer Lopez', 'Shakira'],
};

// Populate the table dynamically
document.addEventListener('DOMContentLoaded', function () {
    let table = document.getElementById('myTable');
    for (let attribute in reader) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = `<h4>${attribute}</h4>`;
        cell2.innerHTML = `<h4>${Array.isArray(reader[attribute]) ? reader[attribute].join(', ') : reader[attribute]}</h4>`;
    }
});
