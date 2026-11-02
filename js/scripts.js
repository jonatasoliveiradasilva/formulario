const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    if (email.value === "" || senha.value === "") {
        alert("Por favor preencha todos os campos");
        return;
    }

    if (senha.value.length < 11) {
        alert("A senha deve ter pelo menos 10 caracteres");
        return;
    }

    alert("Login realizado com sucesso!");
});
