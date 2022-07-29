import { fruits } from "./formula.js";

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  $products = document.getElementById("products"),
  $mostrarFiltro = document.getElementById("mostrarFiltro"),
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

  // VALIDANDO EL SELECT
  if (searchType === "tipo de fruta") {
    mostrarProductos();
  } else {
    if (searchType === "mayor precio") {
      mostrarMayor();
    }
    if (searchType === "menor precio") {
      mostrarMenor();
    } else {
      const mostrarFruits = fruits.filter((fruta) => fruta.type === searchType);

      if (mostrarFruits) {
        mostrarFruits.forEach((item) => {
          $template.querySelector("img").setAttribute("src", item.img);
          $template.querySelector("img").setAttribute("alt", item.name);
          $template.querySelector("img").setAttribute("width", "140px");
          $template.querySelector("h3").textContent = item.name.toUpperCase();
          $template.querySelector("p").textContent = item.type;
          $template.querySelector("span").textContent = item.price;
          let $clone = $template.cloneNode(true);
          $fragment.appendChild($clone);
        });
        let $mFiltro = document.createElement("p");
        $mFiltro.innerHTML = `por: ${searchType}`;
        $mostrarFiltro.appendChild($mFiltro);
        $products.appendChild($fragment);
      }
    }
  }
};

const mostrarMayor = () => {
  let newFruits = [...fruits];
  newFruits.sort((a, b) => {
    return b.price - a.price;
  });
  const verMayor = newFruits;
  if (verMayor) {
    verMayor.forEach((item) => {
      $template.querySelector("img").setAttribute("src", item.img);
      $template.querySelector("img").setAttribute("alt", item.name);
      $template.querySelector("img").setAttribute("width", "140px");
      $template.querySelector("h3").textContent = item.name.toUpperCase();

      $template.querySelector("p").textContent = item.type;
      $template.querySelector("span").textContent = item.price;
      let $clone = $template.cloneNode(true);
      $fragment.appendChild($clone);
    });
    $products.appendChild($fragment);
    let $mFiltro = document.createElement("p");
    $mostrarFiltro.appendChild($mFiltro);
    $products.appendChild($fragment);
  }
};

const mostrarMenor = () => {
  let newFruits = [...fruits];
  newFruits.sort((a, b) => {
    return a.price - b.price;
  });
  const verMenor = newFruits;
  if (verMenor) {
    verMenor.forEach((item) => {
      $template.querySelector("img").setAttribute("src", item.img);
      $template.querySelector("img").setAttribute("alt", item.name);
      $template.querySelector("img").setAttribute("width", "140px");
      $template.querySelector("h3").textContent = item.name.toUpperCase();

      $template.querySelector("p").textContent = item.type;
      $template.querySelector("span").textContent = item.price;
      let $clone = $template.cloneNode(true);
      $fragment.appendChild($clone);
    });
    $products.appendChild($fragment);
    let $mFiltro = document.createElement("p");
    $mFiltro.innerHTML = `por: menor precio`;
    $mostrarFiltro.appendChild($mFiltro);
    $products.appendChild($fragment);
  }
};

const reset = () => {
  while ($products.firstChild) {
    $products.removeChild($products.firstChild);
  }

  while ($mostrarFiltro.firstChild) {
    $mostrarFiltro.removeChild($mostrarFiltro.firstChild);
  }
  mostrarProductos();
  document.getElementById("selecProduct").selectedIndex = 0;
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
