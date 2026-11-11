function clickOMatic() {
    alert('Clicked!');
    } /* - basic form

let clickOMatic = function() {
    alert('Clicked!')
}; - w/ function expression, set variable to function

let clickOMatic = () => alert ('Clicked!'); - arrow function, simpler

window.onload = function () {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
    clickOMatic();
    })
}; */

ScrollReveal().reveal('.site', (delay:1000));
