function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const regBtn = document.getElementById("regBtn");

regBtn.addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').checked;

    let bien = true;
    
    if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '') {  
      alert('Tiene que marcar todos los campos');
      showAlertError(); 
      bien = false;
    }
    
    
    if (password1.length < 6 || password2.length < 6) {
      alert('Las contraseñas deben tener al menos 6 caracteres.');
      showAlertError();
      bien = false;
    }
    
    
    if (password1 !== password2) {     
      alert('Las contraseñas no coinciden. Por favor, verifique.');
      showAlertError();
      bien = false;
    }
    
    
    if (!terminos) {    
      alert('Debe aceptar los términos');
      showAlertError();
      bien = false;
    }

    if (bien) {
        showAlertSuccess();
    }
}
);