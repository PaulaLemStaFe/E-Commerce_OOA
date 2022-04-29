import { crearCard } from "../controllers/products.controller.js";

const cardListStarWars = document.querySelector("[data-starwars]");

const listStarWars = () => fetch("http://localhost:3000/productstarwars").then ((respuesta) => respuesta.json());

listStarWars()
    .then((data) => {
        data.forEach((product) => {
            const newProduct = crearCard(product.img, product.title, product.price, product.idproduct, product.article);
            cardListStarWars.appendChild(newProduct);
        });
    })
    .catch((error) => alert("Ocurrió un error."));

export const productsStarWars = {
    listStarWars,
};