const body = document.querySelector("body");
const texts = body.querySelectorAll("*");
texts.forEach(element =>
    element.textContent = element.textContent.toUpperCase())