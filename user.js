const $signup_btn = document.querySelector(".box1"),
  $login_btn = document.querySelector(".box2"),
  $signup_form = document.querySelector(".signup"),
  $login_form = document.querySelector(".login"),
  $signup_btnS = document.querySelector(".signup_btnS"),
  $login_btnS = document.querySelector(".login_btnS");

const signupVer = () => {
  $signup_form.style.display = "block";
  $login_form.style.display = "none";
  $signup_btn.style.background = "var(--main-bg-color)";
  $login_btn.style.background = "var(--second-bg-color)";
};
const loginVer = () => {
  $signup_form.style.display = "none";
  $login_form.style.display = "block";
  $signup_btn.style.background = "var(--second-bg-color)";
  $login_btn.style.background = "var(--main-bg-color)";
};

$login_btn.addEventListener("click", signupVer);
$signup_btn.addEventListener("click", loginVer);
/*
const signupAlert = () => {
  alert("¡Te has registrado con exito!");
};
const loginAlert = () => {
  alert("Has iniciado sesion");
}; */

// $signup_btnS.addEventListener("click", signupAlert);
// $login_btnS.addEventListener("click", loginAlert);

let $nombre = document.forms["signupForm"]["nombre"],
  $apellido = document.forms["signupForm"]["apellido"],
  $email = document.forms["signupForm"]["email"],
  $password = document.forms["signupForm"]["password"];

const $signupError = document.querySelector(".signupError");

function validarsignup() {
  if($nombre.value.length <= 2) {
    $signupError.style.display = "block";
    $nombre.style.border = "1px solid red";
    $signupError.innerText = "Ingresa tu nombre";
    $nombre.focus;
    return false;
  }
  if($apellido.value.length <= 2) {
    $signupError.style.display = "block";
    $apellido.style.border = "1px solid red";
    $signupError.innerText = "Ingresa tu apellido";
    $apellido.focus;
    return false;
    }
  if($email.value.length <= 8 ) {
    $signupError.style.display = "block";
    $email.style.border = "1px solid red";
    $signupError.innerText = "Ingresa tu email";
    $email.focus;
    return false;
    }
  if($password.value.length <= 3) {
    $signupError.style.display = "block";
    $password.style.border = "1px solid red";
    $signupError.innerText = "Ingresa tu password";
    $password.focus;
    return false;
    }
}
