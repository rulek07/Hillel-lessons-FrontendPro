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