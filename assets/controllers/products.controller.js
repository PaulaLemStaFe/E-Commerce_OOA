import { productsStarWars } from "../services/starwarsservice.js";
import { productsConsolas } from "../services/consolasservice.js";
import { productsDiversos } from "../services/diversosservie.js";

export const crearCard = (img, title, price, idproduct, article) => {
    const newCard = document.createElement('div');
    newCard.setAttribute("class", "product_item");

    var urlDetails = '';

    if (document.title == "AluraGeek") {
        urlDetails = "./assets/pages/productos/productdetails.html?idproduct=${idproduct}";
    } else if (document.title == "AluraGeek - All Products" | document.title == "AluraGeek - Detalles") {
        urlDetails = "productdetails.html?idproduct=${idproduct";
    }
    
    const cardContent = 
    `<div class="item_img">
        <img class="img" src="${img}" alt="${title}" title="${title}">
    </div>
    <h5 class="item_title">${title}</h5>
    <div class="item_price">
        <span class="price">
            <span class="sign">$</span>
            <span class="currency">${price}</span>
        </span>
    </div>
    <div class="item_footer">
        <p class="item_id">${article}</p>
        <div class="footer_icons">
            <i class="bi bi-trash-fill" alt="Eliminar" title="Eliminar"></i>
            <i class="bi bi-pencil-fill" alt="Editar" title="Editar"></i>
        </div>
    </div>
    <a class="item_link" href="${urlDetails}" rel="noopener noreferrer" alt="Ver Producto" title="Ver Producto">Ver Producto</a>
     `;
     newCard.innerHTML = cardContent;
     return newCard;
};