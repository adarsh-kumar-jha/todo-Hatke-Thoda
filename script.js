const signupButton = document.getElementById('signupButton');
const signinButton = document.getElementById('signinButton');
const addTaskButton = document.getElementById('addTaskButton');
const logoutButton = document.getElementById('logoutButton');
const todosList = document.getElementById('todosList');
const todoApp = document.getElementById('todoApp');
const authForm = document.getElementById('auth');

let token = null;

const backendUrl = 'http://localhost:3000'; 

// Sign Up
signupButton.addEventListener('click', async () => {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch(`${backendUrl}/signup`, {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();
    alert(result.message);
});

// Sign In
signinButton.addEventListener('click', async () => {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const response = await fetch(`${backendUrl}/signin`, {  // Use backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    if (result.token) {
        token = result.token;
        authForm.classList.add('hidden');
        todoApp.classList.remove('hidden');
        fetchTodos();
    } else {
        alert(result.message);
    }
});

// Fetch Todos
async function fetchTodos() {
    const response = await fetch(`${backendUrl}/todos`, {  // Use backend URL
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const result = await response.json();
    todosList.innerHTML = '';
    result.todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.task;
        todosList.appendChild(li);
    });
}

// Add Todo
addTaskButton.addEventListener('click', async () => {
    const task = document.getElementById('newTask').value;

    await fetch(`${backendUrl}/todos`, {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ task })
    });

    document.getElementById('newTask').value = '';
    fetchTodos();
});

// Logout
logoutButton.addEventListener('click', () => {
    token = null;
    authForm.classList.remove('hidden');
    todoApp.classList.add('hidden');
});
