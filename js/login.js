function getDat() {
    const email = document.querySelector('input[type="email"]').value
    const password = document.querySelector('input[type="password"]').value
    return {
        email,
        password
    }
}

function auth() {
    const { email, password } = getDat()
    if (email && password) {
        return true
    }
    return false
}


function save(credentials) {
    let users = JSON.parse(localStorage.getItem('users'))
    
    if (!users) {
        users = []
    }
    
    const found = users.find(user => user === credentials);

    let newUsers = [];

    if (!found) {
        newUsers = [...users, credentials]
    } else {
        newUsers = users
    }

    localStorage.setItem('users', JSON.stringify(newUsers))
}

document.querySelector('button').onclick = function login(event) {
    event.preventDefault()
    const { email, password } = getDat()
    if (auth()) {
        save({
            email,
            password
        })
        localStorage.setItem('authenticated', true)
        window.location.href = 'index.html'
    } else {
        alert('Email ou senha inválidos')
    }
}