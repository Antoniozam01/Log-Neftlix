const loginForm = document.getElementById("login-form")
const sucessMessage = document.getElementById("sucess-message")

loginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value    
    if( username === 'pepito' && password == '123')
    {
        sucessMessage.style.display = "block";
        sucessMessage.textContent = "Login Exitoso"
    }
    else{
        alert("Usuario o password incorrecto")
    }

})