const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        .footer {
            background-color: #d5d4d4;
        }
        
        .derechos {
            background-color: #d5d4d4;
            bottom: 0;
            font-size: 1.2em;
            font-weight: 700;
            padding: 10px 10px 10px 10px;
            position: fixed;
            text-align: center;
            width: 100%;
        }
        
        
        
        
        @media screen and (max-width: 960px) {
            .footer{
                width: 100%;
            }
        
            .derechos {
                font-size: 0.85em;
                padding: 5px 0px;
            }
        }
    </style>




    <footer class="footer">
        <div class="derechos">
            <p>Desarrollado Por María Paula Lemos | 2022</p>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
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


        shadowRoot.appendChild(footerTemplate.content);
        // console.log(this.shadowRoot.querySelector('.input'));
        // console.log(this);

    }
}

customElements.define('footer-component', Footer);