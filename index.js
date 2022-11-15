//gör att variabler måste deklareras, kan tas bort
'use strict';

/*
Hämtar:
 add 'Lägg till' knapp,
 restore, 'Återställ' knapp,
 todoList, 'Att göra' listan,
 doneList, 'Färdig' listan
*/
const add = document.getElementById('add');
const restore = document.getElementById('restore');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
const addInput = document.getElementById('add-input');

//i ändring av text input, aktiverar/avaktiverar 'Lägg till' knappen
addInput.addEventListener('change', () => {
    if(addInput.value !== ''){
        add.disabled = false;
    } else {
        add.disabled = true;
    }
});


/*
lägger till en eventlistener som triggar en funktion när 
'Lägg till knappen' trycks på
*/
add.addEventListener('click', () => {
    //sparar värdet i text input
    const addInputValue = document.getElementById('add-input').value;

    //skapar punkt i listan, text input samt knapparna
    const listItem = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    //placeholder till input = input som lades till
    input.placeholder = addInputValue;
    // kan endast läsas som default
    input.readOnly = true;
    const change = document.createElement('button');
    change.innerHTML = 'Ändra';
    /*
        event listener till 'Ändra' och 'Spara' knappen
        om readonly == true så ändras knappen till 'Spara' och en kan ändra input
        om readonly == false så ändras knappen till 'Ändra' och en kan inte ändra i input
     */
    change.addEventListener('click', () => {
        if(input.readOnly === true){
            change.innerHTML = 'Spara';
            input.readOnly = false;
        } else {
            change.innerHTML = 'Ändra';
            input.readOnly = true;
        }
    });
    const done = document.createElement('button');
    done.innerHTML = 'Färdig';
    //event listener till 'Färdig' knappen, flyttar list punkten till färdigt listan
    done.addEventListener('click', () => {
        doneList.append(listItem);
    });
    const delet = document.createElement('button');
    delet.innerHTML = 'Radera';
    //evenlistener till 'Radera' knappen, tar bort list punkten samt alla under element
    delet.addEventListener('click', () => {
        listItem.remove();
    });

    //lägger till under element till list punkten
    listItem.appendChild(input);
    listItem.appendChild(change);
    listItem.appendChild(done);
    listItem.appendChild(delet);
    //lägger till list punkten i listan 'Att göra'
    todoList.appendChild(listItem);
});

//tar bort värdet i text input samt alla list punkter
restore.addEventListener('click', () => {
    addInput.value = '';
    const todoItems = todoList.querySelectorAll('li');
    const doneItems = doneList.querySelectorAll('li');

    for(const item of todoItems){
        item.remove();
    }

    for(const item of doneItems){
        item.remove();
    }
});


