

const inputBtn = document.getElementById('input-btn');
let inputEl = document.getElementById('input-el');
inputBtn.addEventListener('click', saveLead)
let leads = new Set()
let ulEl = document.getElementById('ul-el');
let leadsFromLocalStorage = localStorage.getItem('myLeads')

if (leadsFromLocalStorage){
    leads = leadsFromLocalStorage;
    renderLeads();
}

function saveLead(){
    // leads.add("<li><a href='"+ inputEl.value + "' target=\"_blank\">" + inputEl.value + " " + "</a></li>");
    let listItems = '';
    listItems += `
        <li>
            <a target="_blank" href="${inputEl.value}">${inputEl.value}</a>
        </li>
    `
    leads.add(listItems);
    renderLeads(leads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify([...leads]));
}

function renderLeads(leads){
let toDisplay = (leads) => {
    let res = "";
    for (const val of leads) {
        res += val;
    }
    return res;
};
 ulEl.innerHTML = toDisplay(leads);
}