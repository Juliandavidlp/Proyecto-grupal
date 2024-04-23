const user= JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')
logout.addEventListener('click', ()=>{
    alert('Hasta Pronto')
    localStorage.removeItem('login_success')
    window.location.href= 'login.html'
})