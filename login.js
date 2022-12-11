const loginForm = document.querySelector('#login-form');

const login = () => { 
    const name = document.querySelector('#name').value.toLowerCase();
    const existingUser = localStorage.getItem(name);
    const form = document.querySelector('form');

    if(name === "") {
        alert("Please enter your name first.");
        form.action = "./index.html";
        return false;
    }

    if (!existingUser) {
        const data = { 'name': name, 'todolist': [] };
        const jsonData = JSON.stringify(data);
        localStorage.setItem(name, jsonData);
    }
}

loginForm.addEventListener('submit', () => login())
