const form = document.querySelector('#formulario');

function checkPassword(){
    const password1 = document.querySelector("#password1").value;
    const password2 = document.querySelector("#password2").value;
    let msj = document.getElementById("mensaje");
    if(password1 !== password2){
        msj.textContent = 'las contraseñas no coinciden'
    }
    else{
        form.classList.add('was-validated');
        
    }
}

function terminos(){
    const check = document.getElementById('terminos')
    check.addEventListener('input',()=>{
        if(check.checked){
            console.log("true")
            localStorage.setItem('terminos','true');
            
        }
        else{
            console.log("false")
            localStorage.setItem('terminos','false');
            
        }
    })
}

function validar(){
    let localCheck = localStorage.getItem('terminos')
    if(form.checkValidity() && localCheck == 'true'){
        alert("formulario enviado")
        window.location.reload;
        console.log("joya")
    }
    else{
        alert("Complete todos los campos")
        console.log("no pasa")
    }
}


form.addEventListener('submit',()=>{
    checkPassword()
    validar()
})

