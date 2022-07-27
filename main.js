const fruits = [
  {
    id: 0,
    name: "naranja",
    type: "citricos",
    img: "./img/products/naranja.webp",
    price: "120",
  },
  {
    id: 1,
    name: "pomelo",
    type: "citricos",
    img: "./img/products/pomelo.webp",
    price: "140",
  },
  {
    id: 2,
    name: "mandarina",
    type: "citricos",
    img: "./img/products/mandarina.webp",
    price: "150",
  },
  {
    id: 3,
    name: "kiwi",
    type: "exoticas",
    img: "./img/products/kiwi.webp",
    price: "130",
  },
  {
    id: 4,
    name: "banana",
    type: "exoticas",
    img: "./img/products/banana.webp",
    price: "110",
  },
  {
    id: 5,
    name: "mango",
    type: "exoticas",
    img: "./img/products/mango.webp",
    price: "190",
  },
  {
    id: 6,
    name: "anana",
    type: "exoticas",
    img: "./img/products/anana.webp",
    price: "200",
  },
  {
    id: 7,
    name: "manzana",
    type: "dulces",
    img: "./img/products/manzana.webp",
    price: "210",
  },
  {
    id: 8,
    name: "pera",
    type: "dulces",
    img: "./img/products/pera.webp",
    price: "205",
  },
  {
    id: 9,
    name: "uva",
    type: "dulces",
    img: "./img/products/uva.webp",
    price: "160",
  },
  {
    id: 10,
    name: "almendra",
    type: "secos",
    img: "./img/products/almendra.webp",
    price: "150",
  },
  {
    id: 11,
    name: "nuez",
    type: "secos",
    img: "./img/products/nueces.webp",
    price: "130",
  },
  {
    id: 12,
    name: "avellana",
    type: "secos",
    img: "./img/products/avellanas.webp",
    price: "140",
  },
  {
    id: 13,
    name: "pistacho",
    type: "secos",
    img: "./img/products/pistacho.webp",
    price: "150",
  },
  {
    id: 14,
    name: "arandanos",
    type: "bayas",
    img: "./img/products/arandanos.webp",
    price: "160",
  },
  {
    id: 15,
    name: "fresa",
    type: "bayas",
    img: "./img/products/fresa.webp",
    price: "130",
  },
];

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  $products = document.getElementById("products"),
  $mostrarFiltro = document.getElementById('mostrarFiltro'),
  $btnSP = document.getElementById("btnSP"),
  $btnR = document.getElementById("btnReset");

const mostrarProductos = () => {
  fruits.forEach((fruta) => {
    $template.querySelector("img").setAttribute("src", fruta.img);
    $template.querySelector("img").setAttribute("alt", fruta.name);
    $template.querySelector("img").setAttribute("width", "140px");
    $template.querySelector("h3").textContent = fruta.name.toUpperCase();

    $template.querySelector("p").textContent = fruta.type;
    $template.querySelector("span").textContent = fruta.price;
    let $clone = $template.cloneNode(true);
    $fragment.appendChild($clone);
  });
  $products.appendChild($fragment);
};

const listSelect = () => {
  let $selecProduct = document.getElementById("selecProduct");
  let searchType =
    $selecProduct.options[$selecProduct.selectedIndex].text.toLowerCase();
    
    while ($products.firstChild) {
      $products.removeChild($products.firstChild);
    }
    
    while ($mostrarFiltro.firstChild) {
      $mostrarFiltro.removeChild($mostrarFiltro.firstChild);
    }
    
    const mostrarFruits = fruits.filter((fruta) => fruta.type === searchType);
    
    if (mostrarFruits) {
      mostrarFruits.forEach((item) => {
      $template.querySelector("img").setAttribute("src", item.img);
      $template.querySelector("img").setAttribute("alt", item.name);
      $template.querySelector("img").setAttribute("width", "140px");
      $template.querySelector("h3").textContent = item.name.toUpperCase();
      let $clone = $template.cloneNode(true);
      $fragment.appendChild($clone);
    });
    let $mFiltro = document.createElement('p');
    $mFiltro.innerHTML = `por: ${searchType}`;
    $mostrarFiltro.appendChild($mFiltro);
    $products.appendChild($fragment);
  }
}




const reset = () => {
  while ($products.firstChild) {
    $products.removeChild($products.firstChild);
  }

  while ($mostrarFiltro.firstChild) {
    $mostrarFiltro.removeChild($mostrarFiltro.firstChild);
  }
  mostrarProductos();
  document.getElementById("selecProduct").selectedIndex = 0;
  document.getElementById("selecValue").selectedIndex = 0;
};

// Button for Submit - Reset
$btnSP.addEventListener("click", (e) => {
  e.preventDefault();
  listSelect();
  

});

$btnR.addEventListener("click", (e) => {
  reset();
});
// Button for Submit - Reset

document.addEventListener("DOMContentLoaded", (e) => {
  mostrarProductos();
});
