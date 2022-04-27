const contactTemplate = document.createElement('template');

var urlImageHtml = 'https://raw.githubusercontent.com/PaulaLemStaFe/E-Commerce_OOA/master/assets/imagenes/header/Logo.png';
var urlMenuHtml = '';

if (document.title == "AluraGeek") {
    urlMenuHtml = "./assets/pages/enconstruccion/enconstruccion.html";
} else if (document.title == "AluraGeek - All Products" | document.title == "AluraGeek - Login" | document.title == "AluraGeek - Editar Producto" | document.title == "AluraGeek - Agregar Producto") {
    urlMenuHtml = "../enconstruccion/enconstruccion.html";
} else if (document.title == "AluraGeek - Detalles") {
    urlMenuHtml = "../../enconstruccion/enconstruccion.html";
}

contactTemplate.innerHTML = `
    <style>
            .contact {
                background-color: #EAF2FD;
                margin-top: 3.5rem;
                padding: 4rem 0;
            }
            
            .contact_content {
                display: flex;
                flex-flow: row wrap;
                gap: 7rem;
                justify-content: space-between;
                margin: 0 auto;
                max-width: 1920px;
                width: 80%;
            }
            
            .contact_logo_img {
                content: url(${urlImageHtml});
                width: 100%;
            }
            
            .menu {
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
            }
            
            .menu_item {
                transition: all 1s;
            }
            
            .menu_item:hover {
                transform: scale(1.1);
            }
            
            .menu_link {
                color: #464646;
                text-decoration: none;
                transition: all 1s;
            }
            
            .menu_link:hover {
                color: #2A7AE4;
            }
            
            .contact_form {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;
            }
            
            .contact_form__title {
                font-weight: 700;
            }
            
            .contact_form_area {
                display: flex;
                flex-direction: column;
            }
            
            .contact_form__label {
                background-color: #FFFFFF;
                border-top-left-radius: 0.5rem;
                border-top-right-radius: 0.5rem;
                font-size: 0.8rem;
                font-weight: 300;
                padding: 0.5rem 0.5rem 0 0.5rem;
            }
            
            .contact_form__input {
                background-color: #FFFFFF;
                border: none;
                border-bottom: 1px solid rgb(192, 191, 191);
                font-family: Raleway, sans-serif;
                font-size: 1rem;
                outline: none;
                padding: 0.5rem;
                width: 35rem;
            }
            
            .contact_form__input:focus, .menssage:focus {
                border-color: #2A7AE4;
            }
            
            .menssage {
                background-color: #FFFFFF;
                border: none;
                border-bottom: 1px solid rgb(192, 191, 191);
                border-top-left-radius: 0.5rem;
                border-top-right-radius: 0.5rem;
                font-family: Raleway, sans-serif;
                font-size: 1rem;
                height: 4rem;
                outline: none;
                padding: 0.5rem;
                resize: none;
                width: 35rem;
            }
            
            .mensaje-error {
                display: none;
            }
            
            .input-container-invalid {
                margin-bottom: 0.5rem;
            }
            
            .input-container-invalid .input-padron {
                border-bottom: 2px solid #df2525;
                border-radius: 7px;
                margin: 0 0 5px;
            }
            
            .input-container-invalid .input-label {
                color: #df2525;
            }
            
            .input-container-invalid .mensaje-error {
                color: #df2525;
                display: block;
            }
            
            .contact_form__button {
                background-color: #2A7AE4;
                border: none;
                border-radius: 5%;
                color:#FFFFFF;
                cursor: pointer;
                margin-right: auto;
                padding: 1rem 2rem;
                transition: all 1s;
            }
            
            .contact_form__button:hover {
                background-color: darkblue;
                box-shadow: 2px 2px 18px #2A7AE4;
            }
            
            .send_message__button {
                color:#FFFFFF;
                text-decoration: none;
            }
            
            
            
            @media (min-width:451px) and (max-width:768px) {
            
                .contact {
                    margin-top: 2.5rem;
                    padding: 2rem 0;
                }
            
                .contact_content {
                    align-items: center;
                    display: flex;
                    flex-flow: column wrap;
                    gap: 2rem;
                    justify-content: center;
                    margin: 0 auto;
                    max-width: 1920px;
                    width: 90%;
                }
            
                .contact_logo_img, .contact_menu {
                    display: flex;
                    flex-direction: column;
                }
            
                .menu {
                    text-align: center;
                }
            
                .contact_form {
                    width: 100%;
                }
            
                .contact_form_area {
                    width: 100%;
                }
            
                .contact_form__input {
                    background-color: #FFFFFF;
                    border: none;
                    border-bottom: 1px solid rgb(192, 191, 191);
                    font-family: Raleway, sans-serif;
                    font-size: 1rem;
                    outline: none;
                    padding: 0.5rem;
                    width: 97%;
                }
                
                .contact_form__input:focus, .menssage:focus {
                    border-color: #2A7AE4;
                }
                
                .menssage {
                    background-color: #FFFFFF;
                    border: none;
                    border-bottom: 1px solid rgb(192, 191, 191);
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    font-family: Raleway, sans-serif;
                    font-size: 1rem;
                    outline: none;
                    padding: 0.5rem;
                    resize: none;
                    width: 97%;
                }
            
                .contact_form__button {
                    background-color: #2A7AE4;
                    color:#FFFFFF;
                    cursor: pointer;
                    margin-bottom: 1rem;
                    margin-right: auto;
                    padding: 1rem 3rem;
                }
            
            }
            
            
            
            
            @media (max-width: 450px) {
            
                .contact {
                    margin-top: 2.5rem;
                    padding: 2rem 0;
                }
            
                .contact_content {
                    align-items: center;
                    display: flex;
                    flex-flow: column wrap;
                    gap: 2rem;
                    justify-content: center;
                    margin: 0 auto;
                    max-width: 1920px;
                    width: 90%;
                }
            
                .contact_logo {
                    align-items: center;
                    justify-content: center;
                    width: 35%;
                }
            
                .contact_logo_img {
                    margin-right: 0;
                }
            
                .contact_logo_img, .contact_menu {
                    display: flex;
                    flex-direction: column;
                }
            
                .menu {
                    text-align: center;
                }
            
                .contact_form {
                    width: 100%;
                }
            
                .contact_form_area {
                    width: 100%;
                }
            
                .contact_form__input {
                    background-color: #FFFFFF;
                    border: none;
                    border-bottom: 1px solid rgb(192, 191, 191);
                    font-family: Raleway, sans-serif;
                    font-size: 1rem;
                    outline: none;
                    padding: 0.5rem;
                    width: 97%;
                }
                
                .contact_form__input:focus, .menssage:focus {
                    border-color: #2A7AE4;
                }
                
                .menssage {
                    background-color: #FFFFFF;
                    border: none;
                    border-bottom: 1px solid rgb(192, 191, 191);
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    font-family: Raleway, sans-serif;
                    font-size: 1rem;
                    outline: none;
                    padding: 0.5rem;
                    resize:none;
                    width: 97%;
                }
            
                .contact_form__button {
                    background-color: #2A7AE4;
                    cursor:pointer;
                    color:#FFFFFF;
                    padding: 1rem 3rem;
                    margin-bottom: 1rem;
                    margin-right: auto;
                }
            
            }
    </style>




    <section class="contact">
        <div class="contact_content">
            <!-- logo -->
            <div class="contact_logo">
                <img class="contact_logo_img" alt="AluraGeek" title="AluraGeek">
            </div>

            <!-- menu -->
            <div class="contact_menu">
                <ul class="menu">
                    <li class="menu_item"><a class="menu_link" href=${urlMenuHtml} target="_blank" rel="noopener noreferrer" alt="Quiénes Somos" title="Quiénes Somos">Quiénes Somos</a></li>
                    <li class="menu_item"><a class="menu_link" href=${urlMenuHtml} target="_blank" rel="noopener noreferrer" alt="Política De Privacidad" title="Política De Privacidad">Política De Privacidad</a></li>
                    <li class="menu_item"><a class="menu_link" href=${urlMenuHtml} target="_blank" rel="noopener noreferrer" alt="Programa De Fidelidad" title="Programa De Fidelidad">Programa De Fidelidad</a></li>
                    <li class="menu_item"><a class="menu_link" href=${urlMenuHtml} target="_blank" rel="noopener noreferrer" alt="Nuestras Tiendas" title="Nuestras Tiendas">Nuestras Tiendas</a></li>
                    <li class="menu_item"><a class="menu_link" href=${urlMenuHtml} target="_blank" rel="noopener noreferrer" alt="Quiero Ser Franquiciado" title="Quiero Ser Franquiciado">Quiero Ser Franquiciado</a></li>
                    <li class="menu_item"><a class="menu_link" href=${urlMenuHtml} target="_blank" rel="noopener noreferrer" alt="Anuncie Aquí" title="Anuncie Aquí">Anuncie Aquí</a></li>
                </ul>
            </div>

            <!-- form -->
            <div class="contact_form">
                <div class="contact_form__title">
                    <h6 class="title">Hable con nosotros</h6>
                </div>

                <form class="contact_form">
                    <div class="contact_form_area input-container">
                        <label class="contact_form__label input-label" for="name">Nombre</label>
                        <input name="name" type="text" class="contact_form__input input-padron" id="name" required minlength="4" maxlength="40" data-tipo="name" placeholder="María Paula Lemos">
                        <span class="mensaje-error">Este campo no es válido</span>
                    </div>
    
                    <div class="contact_form__menssage input-container">
                        <textarea name="message" id="message" class="menssage input-padron" required maxlength="120" data-tipo="message" placeholder="Escribe tu mensaje"></textarea>
                        <span class="mensaje-error">Este campo no es válido</span>
                    </div>
    
                    <input type="submit" value="Enviar Mensaje" class="contact_form__button send_message__button enviar" alt="Enviar Mensaje" title="Enviar Mensaje">
                </form>
            </div>
        </div>
    </section>
`;

class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {


        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const reset = document.querySelector('link[href*="reset"]');
        const logo = document.querySelector('link[href*="logo"]');
        const inputs = document.querySelector('link[href*="inputs"]');
        const buttons = document.querySelector('link[href*="buttons"]');

        const responsive = document.querySelector('link[href*="responsive"]');

        const shadowRoot = this.attachShadow({ mode: 'open' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        if (reset) {
            shadowRoot.appendChild(reset.cloneNode());
        }

        if (logo) {
            shadowRoot.appendChild(logo.cloneNode());
        }

        if (inputs) {
            shadowRoot.appendChild(inputs.cloneNode());
        }

        if (buttons) {
            shadowRoot.appendChild(buttons.cloneNode());
        }

        if (responsive) {
            shadowRoot.appendChild(responsive.cloneNode());
        }


        shadowRoot.appendChild(contactTemplate.content);
        // console.log(this.shadowRoot.querySelector('.input'));
        // console.log(this);

    }
}

customElements.define('contact-component', Contact);