var button = document.querySelector(".hamburger");
var navigatie = document.querySelector(".iconenbar");

button.addEventListener("click", uitschuiven);

function uitschuiven(){
    navigatie.classList.toggle('active');
}

console.log('hello world');
