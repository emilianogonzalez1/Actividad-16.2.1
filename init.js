const form = document.querySelector('#formulario');
const warning = document.querySelector('.warning');
sessionStorage.setItem('terminos','false');

function checkPassword(){
    const password1 = document.querySelector("#password1").value;
    const password2 = document.querySelector("#password2").value;
    let msj = document.getElementById("mensaje");
    if(password1 !== password2){
        msj.textContent = 'Las contraseñas no coinciden'
        msj.classList.remove('d-none')
    }
    else{
        form.classList.add('was-validated');
        msj.classList.add('d-none');
        
    }
}

function terminos(){
    const check = document.getElementById('terminos');
    check.addEventListener('input',()=>{
        if(check.checked){
            console.log("true")
            sessionStorage.setItem('terminos','true');
            
        }
        else{
            console.log("false")
            sessionStorage.setItem('terminos','false');
            
            
        }
    })
}

function validar(){
    let localCheck = sessionStorage.getItem('terminos')
    if(form.checkValidity() && localCheck == 'true'){
        window.location.reload;
        warning.classList.add('d-none')
        console.log("pasa")
    }
    if(form.checkValidity() && localCheck == 'false'){
        warning.classList.remove('d-none')
        e.preventDefault()
    }
    else{
        e.preventDefault()
        alert("Complete todos los campos")
        console.log("no pasa")
    }
}


form.addEventListener('submit',(e)=>{
    checkPassword()
    validar()
})

