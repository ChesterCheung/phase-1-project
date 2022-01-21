// Node Getters //
const mainDiv = document.getElementById('main')
const homeLink = document.getElementById('home-link')
// Event Listeners //
const attachHomePageLinkEvent = () =>{
    homeLink.addEventListener("click", loadHome);
}
// Event Handlers //
const loadHome = () => {
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    h1.className = 'center-align';
    p.className = 'center-align';
    h1.innerText = 'Create a monthly budget!';
    p.innerText = 'Start tracking your monthly expenses';

mainDiv.appendChild(h1);
mainDiv.appendChild(p);
}  


// Startup //
document,addEventListener('DOMContentLoaded', function(){
loadHome()
attachHomePageLinkEvent()
})