// const container = document.querySelector('#container');
// const table = document.createElement('table');
// let count = 1;
// for (let i = 0; i < 10; i++) {
//   const tr = document.createElement('tr');
//   for (let j = 0; j < 10; j++) {
//     const td = document.createElement('td');
//     td.innerHTML = count;
//     tr.append(td);
//     count++;
//   }
//   table.append(tr);
// }

// container.append(table);

const table = document.createElement('table');
let count = 1;

for (let i = 0; i < 10; i++) {
    const tr = table.insertRow();
    for (let j = 0; j < 10; j++) {
        const td = tr.insertCell();
        td.textContent = count;
        count++;
    }
}

document.body.append(table);