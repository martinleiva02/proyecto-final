var usuario = document.getElementById('usuario')
var correo = document.getElementById('email')
var telefono = document.getElementById('telefono')

function validarFormulario(){
    usuario.addEventListener('input',validarUsuario)
    correo.addEventListener('input',validadCorreo)
    telefono.addEventListener('input',validarTelefono)
    
    validarUsuario()
    validadCorreo()
    validarTelefono()
}
function validarUsuario(){
  if (usuario.value == ""){
     usuario.setCustomValidity("Ingrese un nombre...")
   }else{
     usuario.setCustomValidity("")
   }
}
function validadCorreo(){
   if (correo.value==""){
       correo.setCustomValidity("Ingrese su email...")
   }else{
       correo.setCustomValidity("")
   }

    if(/\w+@\w+\.+[a-z]/.test(correo.value)){
     correo.setCustomValidity("")
 }else{
     correo.setCustomValidity("El correo ingresado no es correcto")
 }    
}
function validarTelefono(){
    if(telefono.value==""){
        telefono.setCustomValidity("Ingrese el número de telefono...")

    }else{
        telefono.setCustomValidity("")
    }
    if (/[0-9]+/.test(telefono.value)){
        telefono.setCustomValidity("")
    }else{
        telefono.setCustomValidity("Solo puede ingresar números")
    }
}

window.addEventListener('load',validarFormulario)