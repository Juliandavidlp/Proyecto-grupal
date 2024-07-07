const singupForm = document.querySelector('#signupForm')
singupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name')
    const email= document.querySelector('#email')
    const password= document.querySelector('#password')

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario esta registrado')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'
})