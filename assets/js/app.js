const inputs = document.querySelectorAll(".input-padron");

const contact = document.querySelector('contact-component');
const input = contact.shadowRoot.querySelector('input')
const textarea = contact.shadowRoot.querySelector('textarea')

const inputsContact = [];
inputsContact.push(input);
inputsContact.push(textarea);


inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});

inputsContact.forEach(input => {
    input.addEventListener('blur', (input) => {
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

    // contact form validation
    name: {
        valueMissing: "Debes completar el campo Nombre para poder continuar",
        tooShort: "Debe tener al menos 4 caracteres"
    },
    message: {
        valueMissing: "Debes completar el campo Mensaje para poder continuar"
    },

    // login form validation
    email: {
        valueMissing: "El campo E-mail no puede estar vacío",
        typeMismatch: "El E-mail no es válido",
      },
      password: {
        valueMissing: "El campo Contraseña no puede estar vacío",
        patternMismatch:
          "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
      },

      // add products validatiion
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

    if (input.validity.valid && input.checkValidity()) {
        input.parentElement.classList.remove("input-container-invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container-invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}



function mostrarMensajeDeError (tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach ( (error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        };
    });

    return mensaje;
};