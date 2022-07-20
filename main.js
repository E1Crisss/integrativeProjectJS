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
    {id:11 , name: "nuez", type:"secos", img:"./img/products/nueces.webp", price: "120"},
    {id:12 , name: "avellana", type:"secos", img:"./img/products/avellanas.webp", price: "120"},
    {id:13 , name: "pistacho", type:"secos", img:"./img/products/pistacho.webp", price: "120"},
    {id:14 , name: "arandanos", type:"bayas", img:"./img/products/arandanos.webp", price: "120"},
    {id:15 , name: "fresa", type:"bayas", img:"./img/products/fresa.webp", price: "120"},
];


const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  $products = document.getElementById('products'),
  $btnSP = document.getElementById('btnSP');



const mostrarProductos = () => {
  fruits.forEach(fruta => {
    $template.querySelector("img").setAttribute("src", fruta.img);
    $template.querySelector("img").setAttribute("alt", fruta.name);
    $template.querySelector("img").setAttribute("width", "140px");
    $template.querySelector("figcaption").textContent = fruta.name.toUpperCase();
    let $clone = $template.cloneNode(true);
    $fragment.appendChild($clone);
  })
  $products.appendChild($fragment);
};
  


const listSelect = () =>{
  let $selecProduct = document.getElementById('selecProduct');
  let searchType = $selecProduct.options[$selecProduct.selectedIndex].text.toLowerCase();

  while ($products.firstChild) {
    $products.removeChild($products.firstChild);
  }
  
  const mostrarFruits = fruits.filter(fruta => fruta.type === searchType);
  console.log("🚀 ~ file: main.js ~ line 52 ~ listSelect ~ mostrarFruits", mostrarFruits)
  
    if(mostrarFruits){
      mostrarFruits.forEach(item =>{
        $template.querySelector("img").setAttribute("src", item.img);
        $template.querySelector("img").setAttribute("alt", item.name);
        $template.querySelector("img").setAttribute("width", "140px");
        $template.querySelector("figcaption").textContent = item.name.toUpperCase();
        let $clone = $template.cloneNode(true);
        $fragment.appendChild($clone);

      })
      $products.appendChild($fragment);

      }
    } 
$btnSP.addEventListener('click', (e)=> {
  e.preventDefault();
  listSelect();
})

document.addEventListener('DOMContentLoaded', (e) => {
  mostrarProductos();
})