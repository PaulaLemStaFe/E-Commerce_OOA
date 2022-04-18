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
    img: {
        valueMissing: "Debes seleccionar al menos una imagen",
      },
      product_name: {
        valueMissing: "El campo Nombre del Producto no puede estar vacío",
      },
      price: {
        valueMissing: "El campo Precio no puede estar vacío",
        patternMismatch: "El formato requerido es 123.456 (según corresponda) y no puede haber un cero (0) solo delante del punto",
      },
      description: {
        valueMissing: "El campo Mensaje no puede estar vacío"
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