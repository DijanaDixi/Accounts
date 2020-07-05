let accountsTableBody = document.querySelector("#accounts-table-body");
// let accountsViewBtn = document.querySelector("[href=accounts-view");
// let addAccountsViewBtn = document.querySelector("[href=add-account-view");
let accountsView = document.querySelector("#accounts-view");
let addAccountView = document.querySelector("#add-account-view");
let allLinks=document.querySelectorAll(".nav-link")
let views=document.querySelectorAll(".view")

for(let i=0; i<allLinks.length; i++){
    allLinks[i].addEventListener("click", showView)
}

function showView(e){
    e.preventDefault();
    for(let i=0; i<views.length; i++){
        views[i].style.display="none"

    }
    let id=`#${this.getAttribute("href")}`;
    document.querySelector(id).style.display="block"
    
}

// First way

// addAccountsViewBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   addAccountView.style.display = "block";
//   accountsView.style.display = "none";
// });

// accountsViewBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   addAccountView.style.display = "none";
//   accountsView.style.display = "block";
// });


createAccountsTable();

function createAccountsTable() {
  let htmlAccounts = "";
  for (var i = 0; i < db.length; i++) {
    const account = db[i];
    htmlAccounts += `
        <tr>
        <td>${account.id}</td>
        <td>${account.name}</td>
        <td>${account.lastname}</td>
        <td>${account.email}</td>
        <td>${account.phone}</td>
    </tr>
        `;
  }
  accountsTableBody.innerHTML = htmlAccounts;
}
