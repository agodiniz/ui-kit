const button = document.querySelector('button');
const appearance = button.getAttribute('appearance')

//Change button appearance
function changeButton() {
    button.setAttribute('appearance', 'primary')
    button.innerText = "Label"
}

changeButton();

console.log(appearance)