import { crearCard } from "../controllers/products.controller.js";

const cardListDiversos = document.querySelector("[data-diversos]");

const listDiversos = () => fetch("http://localhost:3000/productsdiversos").then ((respuesta) => respuesta.json());

listDiversos()
    .then((data) => {
        data.forEach((product) => {
            const newProduct = crearCard(product.img, product.title, product.price, product.idproduct, product.article);
            cardListDiversos.appendChild(newProduct);
        });
    })
    .catch((error) => alert("Ocurrió un error."));

    
export const productsDiversos = {
    listDiversos,
};