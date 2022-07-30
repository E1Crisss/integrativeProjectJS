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

const $nombre = document.getElementById("nombre"),
  $apellido = document.getElementById("apellido"),
  $email = document.getElementById("email"),
  $password = document.getElementById("password"),
  $form = document.getElementById("form");

const $signupError = document.querySelector(".signupError");

const validaEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};


const validarUser = () => {
  const nombreValor = $nombre.value.trim();
  const apellidoValor = $apellido.value.trim();
  const emailValor = $email.value.trim();
  const passValor = $password.value.trim();

  if (!nombreValor || nombreValor.length <= 2) {
    validaFalla($nombre, "Ingresa un Nombre valido, sin espacios");
  } else {
    validaOk($nombre);
    console.log("entro bien");
  }

  if (!apellidoValor || apellidoValor.length <= 2) {
    validaFalla($apellido, "Ingresa un Apellido valido sin espacio");
  } else {
    validaOk($apellido);
    console.log("entro bien");
  }

  if (!emailValor) {
    validaFalla($email, "Campo incompleto");
  } else if (!validaEmail(emailValor)) {
    validaFalla($email, "El email es invalido");
  } else {
    validaOk($email);
  }

  const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
  if (!passValor) {
    validaFalla(pass);
  } else if (passValor.length < 8) {
    validaFalla($password, "Debe tener 8 caracteres cómo mínimo.");
  } else if (!passValor.match(er)) {
    validaFalla($password, "Debe tener al menos una may., una min. y un núm.");
  } else {
    validaOk($password);
  }
};

const validaFalla = (input, mensaje) => {
  $signupError.style.display = "block";
  input.style.border = "1px solid red";
  $signupError.innerHTML = mensaje;
  formControl.focus;
};

const validaOk = (input) => {
  $signupError.innerHTML = "";
  $signupError.style.display = "none";
  input.style.border = "1px solid var(--main-bg-color)";
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarUser();
});
