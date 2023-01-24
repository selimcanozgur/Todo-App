// Dom Elements
const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list-group');
const alertw = document.querySelector('#alertw');
const alertd = document.querySelector('#alertd');
const alerts = document.querySelector('#alerts');

// Events

btn.addEventListener('click', addItem);
list.addEventListener('click', removeItem);
list.addEventListener('click', change);

// Functions
function addItem() {
    if (input.value == 0) {
        alertw.style.display = "block";
        setTimeout(() => {
            alertw.style.display = "none";
        }, 2500)
    }

    else {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let icon = document.createElement('i');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        span.className = 'badge badge-primary badge-pill';
        icon.className = 'fa-solid fa-trash-can';

        li.textContent = input.value;

        span.appendChild(icon);
        li.appendChild(span);
        list.appendChild(li);
        
        alerts.style.display = "block";
        setTimeout(() => {
            alerts.style.display = "none";
        }, 2500)

    }
}

function removeItem(e) {
    if (e.target.className == 'fa-solid fa-trash-can') {
        e.target.parentElement.parentElement.remove();

        alertd.style.display = "block";
        setTimeout(() => {
            alertd.style.display = "none";
        }, 2500)
    }
}

function change (e) {
    if (e.target.tagName = 'li'){
        e.target.classList.toggle('checked');
    }
}