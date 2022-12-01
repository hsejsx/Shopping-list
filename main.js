'use strict';

const shoppingList = document.querySelector('.shopping-list');
const addForm = document.querySelector('.add-form');
const addInput = document.querySelector('.form-control');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addInput.value.trim() && addItem();
})

shoppingList.addEventListener('click', e => {
    deleteItem(e);
})

function addItem() {
    const item = addInput.value;
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const i = document.createElement('i');
    span.textContent = item;
    li.append(span);
    i.setAttribute('class', 'fa-solid fa-trash');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'delete-btn');
    button.setAttribute('data-id', `${Date.now()}`);
    button.append(i);
    li.append(button);
    shoppingList.append(li);
    addInput.value = '';
}

function deleteItem(e) {
    const target = e.target;
    if (target.dataset.id) {
        target.parentElement.remove();
    }
}