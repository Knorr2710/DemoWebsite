function toggleCategoryNeflix() {
    let button = document.querySelector("#netflix");
    button.classList.toggle("active");

    let product = document.querySelectorAll(".product.netflix");
    product.forEach((element) => {
        element.classList.toggle("hidden");
    });
}

function toggleCategorySpotify() {
    let button = document.querySelector("#spotify");
    button.classList.toggle("active");

    let product = document.querySelectorAll(".product.spotify");
    product.forEach((element) => {
        element.classList.toggle("hidden");
    });
}