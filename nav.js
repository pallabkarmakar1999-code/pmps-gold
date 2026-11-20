// PMPS GOLD Common Navigation Loader

fetch("./nav.html")
.then(response => {
    if (!response.ok) {
        throw new Error("Navigation file not found");
    }
    return response.text();
})
.then(html => {

    document.getElementById("siteNav").innerHTML = html;

})
.catch(error => {
    console.error("Navigation Error:", error);
});


// Navigation Actions

document.addEventListener("click", function(event) {

    const button = event.target.closest("[data-nav-action]");

    if (!button) return;

    const action = button.dataset.navAction;

    if (action === "home") {
        window.location.href = "./index.html";
    }

    if (action === "back") {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "./index.html";
        }
    }

    if (action === "cart") {
        window.location.href = "./cart.html";
    }

    if (action === "menu") {
        document.getElementById("pmpsLinks")
            ?.classList.toggle("show");
    }

});