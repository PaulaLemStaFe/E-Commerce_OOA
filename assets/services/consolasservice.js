import { crearCard } from "../controllers/products.controller.js";

const cardListConsolas = document.querySelector("[data-consolas]");

const listConsolas = () => fetch("http://localhost:3000/productsconsolas").then ((respuesta) => respuesta.json());

listConsolas()
    .then((data) => {
        data.forEach((product) => {
            const newProduct = crearCard(product.img, product.title, product.price, product.idproduct, product.article);
            cardListConsolas.appendChild(newProduct);
        });
    })
    .catch((error) => alert("Ocurrió un error."));



export const productsConsolas = {
    listConsolas,
};