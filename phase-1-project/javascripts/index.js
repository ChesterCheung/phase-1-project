// Node Getters //
const mainDiv = document.getElementById('main')
const homeLink = document.getElementById('home-link')
const viewExpense = document.getElementById("view-expense")



// Event Listeners //
const attachHomePageLinkEvent = () =>{
    homeLink.addEventListener("click", loadHome);
}
const attachLoadHomeExpense = () => {
    viewExpense.addEventListener("click", loadHomeExpense)
}





// Event Handlers //
const loadHome = () => {
    resetHome()
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    h1.className = 'center-align';
    p.className = 'center-align';
    h1.innerText = 'Track your monthly expenses!';
    p.innerText = 'Add an expense to get started';

mainDiv.appendChild(h1);
mainDiv.appendChild(p);
}  

const loadHomeExpense = () => {
    resetHome()
    const h1 = document.createElement('h1')
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const th3 = document.createElement("th")
    const th4 = document.createElement("th")

    
    th1.innerText = "Expense/Name"
    th2.innerText = "Amount"
    th3.innerText = "Date Due"
    th4.innerText = "Category"
    h1.innerText = "Monthly Expenses"
    h1.className = "center-align"
    h1.id = "monthly-expense" 

    table.appendChild(thead)
    thead.appendChild(tr)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    
   
    mainDiv.appendChild(h1)
    mainDiv.appendChild(table)
}

// Miscellaneous //
const resetHome = () => mainDiv.innerHTML = " ";

// Startup //
document.addEventListener('DOMContentLoaded', function(){
// loadHome()
attachHomePageLinkEvent()
attachLoadHomeExpense()
})