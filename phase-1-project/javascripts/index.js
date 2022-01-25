// Globals //
const baseUrl = "http://localhost:3000"
let expenses = []


// Node Assignments //
const mainDiv = document.getElementById('main')
const homeLink = document.getElementById('home-link')
const viewExpense = document.getElementById("view-expense")
const addExpenseTab = document.getElementById("add-expense")
const expenseValue = () => document.getElementById("name-expense")
const amountValue = () => document.getElementById("expense")
const dateValue = () => document.getElementById("date")
const categoryValue = () => document.getElementById("category")


// Event Listeners //
const attachHomePageLinkEvent = () =>{
    homeLink.addEventListener("click", loadHome);
}
const attachLoadHomeExpense = () => {
    viewExpense.addEventListener("click", loadHomeExpense)
}
const attachAddExpense = () => {
    addExpenseTab.addEventListener("click", addExpense)
}

// Events //
const loadExpenses = async () => {
 const resp = await fetch(baseUrl + "/expenses")
 const data = await resp.json()
 expenses = data
}

const submitFormEvent = e => {
    e.preventDefault();

    // console.log("expense", expenseValue().value)
    // console.log("amount", amountValue().value)
    // console.log("date", dateValue().value)
    // console.log("cat", categoryValue().value)
        fetch(baseUrl + "/expenses", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify({
            Expense: expenseValue().value,
            Amount: amountValue().value,
            Date: dateValue().value,
            Category: categoryValue().value
        })
    })
    .then(resp => resp.json())
    .then(expense => {
        loadHomeExpense()
    })
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

const loadHomeExpense =  async () => {
    await loadExpenses()
    mainDiv.innerHTML = '';
    const h1 = document.createElement('h1')
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const th3 = document.createElement("th")
    const th4 = document.createElement("th")
    const tbody = document.createElement("tbody")
    
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
    expenses.forEach(expense => tbody.appendChild(expenseTemplate(expense)))
    table.appendChild(tbody)
   
    mainDiv.appendChild(h1)
    mainDiv.appendChild(table)
}

const expenseTemplate = (expenses) => {
const tr = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const td4 = document.createElement("td");
td1.innerText = expenses.Expense;
td2.innerText = expenses.Amount;
td3.innerText = expenses.Date;
td4.innerText = expenses.Category;
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
return tr
}

const addExpense = () => {
    resetHome()
    const h1 = document.createElement('h1')
    const div1 = document.createElement('div')
    const form = document.createElement('form')
    const div12 = document.createElement('div')
    const div13 = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')
    h1.innerText = "Lets add some bills!"
    h1.className = "center-align"
    h1.id = "monthly-expense"
    div1.className = "row"
    form.className = "col s6"
    div12.className = "input-field"
    div13.setAttribute("id", "nameinput")
    div13.className = "input-field col s12"
    input.placeholder = "Name your expense here!"
    input.id = "name-expense"
    input.type = "text"
    input.className = "validate"
    label.setAttribute("for", "first-name")
    label.setAttribute("class", "active")
    label.innerText = "Expense Name"
    div13.appendChild(input)
    div13.appendChild(label)
    div12.appendChild(div13)
    form.appendChild(div12)
    div1.appendChild(form)
    h1.appendChild(div1)

    const div21 = document.createElement('div')
    const div22 = document.createElement('div')
    const input2 = document.createElement('input')
    const label2 = document.createElement('label')
    div21.className = "input-field"
    div22.className = "input-field col s12"
    input2.placeholder = "How much is it monthly?"
    input2.id = "expense"
    input2.type = "text"
    input2.className = "validate"
    label2.for = "amount"
    label2.innerText = "Expense Amount"
    label2.className = "active"
    div21.appendChild(div22)
    div22.appendChild(input2)
    div22.appendChild(label2)
    form.appendChild(div21)

    const div31 = document.createElement('div')
    const div32 = document.createElement('div')
    const input3 = document.createElement('input')
    const label3 = document.createElement('label')
    div31.className = "input-field"
    div32.className = "input-field col s12"
    input3.placeholder = "When's it due?"
    input3.id = "date"
    input3.type = "text"
    input3.className = "validate"
    label3.for = "date"
    label3.innerText = "Date Due"
    label3.className = "active"
    div31.appendChild(div32)
    div32.appendChild(input3)
    div32.appendChild(label3)
    form.appendChild(div31)

    const div41 = document.createElement('div')
    const div42 = document.createElement('div')
    const input4 = document.createElement('input')
    const label4 = document.createElement('label')
    div41.className = "input-field"
    div42.className = "input-field col s12"
    input4.placeholder = "What kind of bill is this?"
    input4.id = "category"
    input4.type = "text"
    input4.className = "validate"
    label4.for = "date"
    label4.innerText = "Category"
    label4.className = "active"
    div41.appendChild(div42)
    div42.appendChild(input4)
    div42.appendChild(label4)
    form.appendChild(div41)

    const submitButton = document.createElement("input")
    submitButton.className = "waves-effect waves-light btn"
    submitButton.value = "Add Expense"
    submitButton.type = "Submit"

    form.appendChild(submitButton)
    form.addEventListener("submit", submitFormEvent)


    mainDiv.appendChild(h1)
}

// Miscellaneous //
const resetHome = () => mainDiv.innerHTML = " ";


// Startup //
document.addEventListener('DOMContentLoaded', function(){
loadHome()
attachHomePageLinkEvent()
attachLoadHomeExpense()
attachAddExpense()
})