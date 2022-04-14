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
    name: {
        valueMissing: "Debes completar el campo Nombre para poder continuar",
        tooShort: "Debe tener al menos 4 caracteres"
    },
    message: {
        valueMissing: "Debes completar el campo Mensaje para poder continuar"
    }
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