document.addEventListener('DOMContentLoaded', function () {

    console.log("Username is Megatron")
    console.log("password is: AllHailMegatron1984");
});

const decepticonLogin = document.getElementById('decepticon-login');

if (decepticonLogin) {
    decepticonLogin.addEventListener('submit', (eve) => {
        eve.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "Megatron" && password === "AllHailMegatron1984") {
            localStorage.setItem("RiseUpLoggedIn", "true");
            localStorage.setItem("currentDecepticonUser", username);

            window.location.href = "../index.html";
        } else {
            document.getElementById('message').innerText = "Access Denied: Soundwave has eyes on you";

        }
    })
}

function logout() {
    localStorage.removeItem("RiseUpLoggedIn");
    localStorage.removeItem("currentDecepticonUser");
    window.location.href = "index.html";
}