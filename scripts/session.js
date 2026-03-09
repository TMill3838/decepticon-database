
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("RiseUpLoggedIn");
    const authLinks = document.getElementById("auth-links");

    if (isLoggedIn === "true") {
        // User is logged in: Show Logout button
        if (authLinks) {
            authLinks.innerHTML = `
                <li class="nav-item"><span class="nav-link text-info">Rise Up, ${localStorage.getItem("currentDecepticonUser")}!</span></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="logout()">Logout</a></li>
            `;
        }
    } else {
        // User is NOT logged in: Ensure they only see Login
        if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        }
    }
});