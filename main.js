const fruits =  [
    {id:0 , name: "naranja", type:"citricos", img:"./img/products/naranja.webp", price: "120"},
    {id:1 , name: "pomelo", type:"citricos", img:"./img/products/pomelo.webp", price: "120"},
    {id:2 , name: "mandarina", type:"citricos", img:"./img/products/mandarina.webp", price: "120"},
    {id:3 , name: "kiwi", type:"exoticas", img:"./img/products/kiwi.webp", price: "120"},
    {id:4 , name: "banana", type:"exoticas", img:"./img/products/banana.webp", price: "120"},
    {id:5 , name: "mango", type:"exoticas", img:"./img/products/mango.webp", price: "120"},
    {id:6 , name: "anana", type:"exoticas", img:"./img/products/anana.webp", price: "120"},
    {id:7 , name: "manzana", type:"dulces", img:"./img/products/manzana.webp", price: "120"},
    {id:8 , name: "pera", type:"dulces", img:"./img/products/pera.webp", price: "120"},
    {id:9 , name: "uva", type:"dulces", img:"./img/products/uva.webp", price: "120"},
    {id:10 , name: "almendra", type:"secos", img:"./img/products/almendra.webp", price: "120"},
    {id:11 , name: "nuez", type:"secos", img:"./img/products/nuez.webp", price: "120"},
    {id:12 , name: "avellana", type:"secos", img:"./img/products/avellana.webp", price: "120"},
    {id:13 , name: "pistacho", type:"secos", img:"./img/products/pistacho.webp", price: "120"},
    {id:14 , name: "arandanos", type:"bayas", img:"./img/products/arandanos.webp", price: "120"},
    {id:15 , name: "fresa", type:"bayas", img:"./img/products/fresa.webp", price: "120"},
];
console.log("🚀 ~ file: main.js ~ line 14 ~ fruits", fruits)
console.log("🚀 ~ file: main.js ~ line 5 ~ img", fruits[1].img)

const $btn = document.getElementById('btn'),
$rend = document.getElementById('products');

const img1 = document.createElement('img');

img1.setAttribute('src', "./img/products/fresa.webp")
$rend.appendChild(img1)

/* $btn.addEventListener('click',(e) =>{
    e.preventDefault();
}) */