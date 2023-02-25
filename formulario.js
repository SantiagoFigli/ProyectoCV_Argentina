const formulario = document.querySelector('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');


formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();
  validarFormulario();
});

function validarFormulario() {
  const nombreValor = nombre.value.trim();
  const apellidoValor = apellido.value.trim();
  const correoValor = correo.value.trim();
  

  if (nombreValor === '') {
    mostrarError(nombre, 'El campo Nombre no puede estar vacío.');
  } else {
    mostrarExito(nombre);
  }

  if (apellidoValor === '') {
    mostrarError(apellido, 'El campo Apellido no puede estar vacío.');
  } else {
    mostrarExito(apellido);
  }

  if (correoValor === '') {
    mostrarError(correo, 'El campo Correo electrónico no puede estar vacío.');
  } else if (!validarCorreo(correoValor)) {
    mostrarError(correo, 'El correo electrónico no es válido.');
  } else {
    mostrarExito(correo);
  }


}

function mostrarError(campo, mensaje) {
  const divCampo = campo.parentElement;
  const divError = divCampo.querySelector('div');
  divCampo.classList.add('error');
  divError.innerText = mensaje;
}

function mostrarExito(campo) {
  const divCampo = campo.parentElement;
  divCampo.classList.remove('error');
  divCampo.classList.add('exito');
}


