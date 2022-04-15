const inputs = document.querySelectorAll(".input-padron");

inputs.forEach (input => {
    input.addEventListener('blur', (input) =>{
        valida(input.target);
    });
});





const tipoDeErrores = [
    'patternMismatch',
    'valueMissing',
    'tooShort',
    'typeMissmatch'
];

const mensajesDeError = {
    email: {
        valueMissing: "El campo E-mail no puede estar vacío",
        typeMismatch: "El E-mail no es válido",
      },
      password: {
        valueMissing: "El campo Contraseña no puede estar vacío",
        patternMismatch:
          "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
      },
};

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container-invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container-invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
};

function mostrarMensajeDeError (tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach ( (error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        };
    });

    return mensaje;
};