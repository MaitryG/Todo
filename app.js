const addTodo = document.querySelector('.add');
const ulTodo = document.querySelector('.todos');
const addIcon = document.querySelector('.add-icon');
const deleteIcon = document.querySelector('.delete');
const search = document.querySelector('.search input');

//This function is used to create the complete html code with todo typed by user.
const generateTodo = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    console.log(html)
    ulTodo.innerHTML += html;
}

//This will fire when user presses the enter key after typing the todo
addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.adds.value.trim();
    if(todo.length>0){
      generateTodo(todo);
      addTodo.reset();
    }
});

//This event will fire when the user clicks the plus icon after typing the todo
addIcon.addEventListener('click', e => {
    e.preventDefault();
    const todo = addTodo.adds.value.trim();
    if(todo.length>0){
        generateTodo(todo);
        addTodo.reset();
    }

});

//This function will fire when user clicks the trash icon
ulTodo.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//This function is used for filtering todos.
const filterTodos = (term) => {

    Array.from(ulTodo.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ulTodo.children)
      .filter((todo) => todo.textContent.includes(term))
      .forEach((todo) => todo.classList.remove('filtered'));
}

//This event will fire when user presses the search bar
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
