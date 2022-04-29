import { productsStarWars } from "../services/starwarsservice.js";
import { productsConsolas } from "../services/consolasservice.js";
import { productsDiversos } from "../services/diversosservie.js";

export const crearCard = (img, title, price, idproduct) => {
    const newCard = document.createElement('div');
    newCard.setAttribute("class", "product_item");
    
    const cardContent = 
    `<img class="item_img" src="${img}"
        alt="${title}" tile="${title}">
     <h5 class="item_title">${title}</h5>
     <div class="item_price">
        <span class="price">
            <span class="sign">$</span>
            <span class="currency">${price}</span>
        </span>
     </div>
     <a class="item_link" href="./assets/pages/productos/productdetails.html?idproduct=${idproduct}" target="_blank" rel="noopener noreferrer" alt="Ver Producto" title="Ver Producto">Ver Producto</a>
     `;
     newCard.innerHTML = cardContent;
     return newCard;
};