const headerTemplate = document.createElement('template');

var urlIndexHtml = '';
var urlImageHtml = '';
var urlSearchHtml = '';
var urlLoginHtml = '';

if (document.title == "AluraGeek") {
    urlIndexHtml = "./index.html";
    urlImageHtml = "./assets/imagenes/header/Logo.png";
    urlSearchHtml = "./assets/pages/enconstruccion/enconstruccion.html";
    urlLoginHtml = "./assets/pages/login/login.html";
} else if (document.title == "AluraGeek - All Products" | document.title == "AluraGeek - Login" | document.title == "AluraGeek - En Construcción" | document.title == "AluraGeek - Editar Producto" | document.title == "AluraGeek - Agregar Producto") {
    urlIndexHtml = "../../../index.html";
    urlImageHtml = "../../imagenes/header/Logo.png";
    urlSearchHtml = "../enconstruccion/enconstruccion.html";
    urlLoginHtml = "../login/login.html";
} else if (document.title == "AluraGeek - Detalles") {
    urlIndexHtml = "../../../../index.html";
    urlImageHtml = "../../../imagenes/header/Logo.png";
    urlSearchHtml = "../../enconstruccion/enconstruccion.html";
    urlLoginHtml = "../../login/login.html";
}

headerTemplate.innerHTML = `
<style>
    .navbar {
        align-items: center;
        background-color: #FFFFFF;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .navegacion {
        align-items: center;
        display: flex;
        gap: 2.25rem;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1920px;
        padding: 1.5rem 0;
        width: 90%;
    }

    .logo_image {
        content: url(${urlImageHtml});
    }

    /* search */
    .buscador {
        align-items: center;
        background-color: rgb(236, 236, 236);
        border: solid 1px rgb(236, 236, 236);
        border-radius: 1rem;
        display: flex;
        padding-right: 1rem;
    }

    .input__buscador {
        background-color: rgb(236, 236, 236);
        border: none;
        border-radius: 1rem;
        font-family: Raleway, sans-serif;
        font-size: 1rem;
        height: 2.5rem;
        outline: none;
        padding-left: 1rem;
        width: 24rem;
    }

    .bi {
        background-color: rgb(236, 236, 236);
        color:#464646;
        cursor: pointer;
    }

    .login_button {
        background-color: #d1deee;
        border: solid #2A7AE4 1px;
        border-radius: 5%;
        color:#2A7AE4;
        cursor: pointer;
        padding: 1rem 2.5rem;
        text-align: center;
        transition: all 1s;
    }

    .login_button:hover {
        background-color: #FFFFFF;
        box-shadow: 0 0 10px #2A7AE4;
    }

    .login_link {
        text-decoration: none;
    }



    @media (min-width:451px) and (max-width:768px) {

        .logo_image {
            width: 90%;
        }

        .navegacion {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1920px;
            padding: 1rem 0;
            width: 90%;
        }

        .buscador {
            align-items: center;
            background-color: #FFFFFF;
            border: solid 1px #FFFFFF;
            border-radius: 1rem;
            display: flex;
            order: 3;
            padding: 0;
        }

        .input_icon {
            font-size: 2rem;
        }

        .bi, .bi-search {
            background-color: #FFFFFF;
            color:#464646;
            cursor: pointer;
        }

        .bi-search::before {
            color: #464646;
            font-size: 2rem;
            font-weight: 900;
            margin: 0;
            padding: 0;
        }
        
        .input__buscador {
            background-color: rgb(236, 236, 236);
            border: none;
            border-radius: 1rem;
            display: none;
            font-family: Raleway, sans-serif;
            font-size: 1rem;
            outline: none;
            padding-left: 1rem;
        }

        .login_button{
            border: solid #2A7AE4 1px;
            color:#2A7AE4;
            cursor: pointer;
            margin: 0;
            padding: 1rem 2rem;
            text-align: center;
            width: 10%;
        }
    }

    @media (max-width: 450px) {

        .logo_image {
            width: 75%;
        }

        .navegacion {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1920px;
            padding: 1rem 0;
            width: 90%;
        }

        .buscador {
            align-items: center;
            background-color: #FFFFFF;
            border: solid 1px #FFFFFF;
            border-radius: 1rem;
            display: flex;
            order: 3;
            padding: 0;
        }

        .input_icon {
            font-size: 2rem;
        }

        .bi, .bi-search {
            background-color: #FFFFFF;
            color:#464646;
            cursor: pointer;
        }

        .bi-search::before {
            color: #464646;
            font-size: 2rem;
            font-weight: 900;
            margin: 0;
            padding: 0;
        }
        
        .input__buscador {
            background-color: rgb(236, 236, 236);
            border: none;
            border-radius: 1rem;
            display: none;
            font-family: Raleway, sans-serif;
            font-size: 1rem;
            height: 2.5rem;
            outline: none;
            padding-left: 1rem;
            width: 24rem;
        }

        .login_button{
            border: solid #2A7AE4 1px;
            color:#2A7AE4;
            cursor: pointer;
            margin: 0;
            padding: 1rem 3rem;
            text-align: center;
            width: 10%;
        }
        
    }
    </style>




    <header class="navbar">
    <div class="navegacion">
        <!-- logo -->
        <div class="logo_img">
            <a href=${urlIndexHtml}><img class="logo_image" alt="AluraGeek" title="AluraGeek"></a>
        </div>

        <!-- search -->
        <div class="buscador">
            <input class="input__buscador" type="text" placeholder="¿Que deseas buscar?">
            <a class="input_icon" href="${urlSearchHtml}" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </i>
            </a>
        </div>

        <!-- login -->
        <a class="login_button login_link" href=${urlLoginHtml} rel="noopener noreferrer" alt="Login" title="Login">Login</a>
    </div>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const logo = document.querySelector('link[href*="logo"]');

        const responsive = document.querySelector('link[href*="responsive"]');

        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        if (logo) {
            shadowRoot.appendChild(logo.cloneNode());
        }

        if (responsive) {
            shadowRoot.appendChild(responsive.cloneNode());
        }

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);