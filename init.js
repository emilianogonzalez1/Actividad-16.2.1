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

const terminos = document.querySelector('#terminos');
terminos.addEventListener('click',()=>{
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
    
})


function validar(){
    let localCheck = sessionStorage.getItem('terminos')
    if(form.checkValidity() && localCheck == 'true'){
        warning.classList.add('d-none')
        console.log("pasa")
    }
    else if(form.checkValidity() && localCheck == 'false'){
        warning.classList.remove('d-none')
        event.preventDefault()
    }
    else{
        alert("Complete todos los campos")
        event.preventDefault()
        console.log("no pasa")
    }
}

const btn = document.querySelector('#boton')
btn.addEventListener('click',(e)=>{
    checkPassword()
    validar()
})
