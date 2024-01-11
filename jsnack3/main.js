// Blocco 2 - snack 2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const user_numberHTML = document.getElementById("user_number")
const button1 = document.getElementById("button_1")
const guestListHtml = document.getElementById("guest_list")
user_numberHTML.max = 100

let names = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Ava",
    "William",
    "Sophia",
    "Elijah",
    "Isabella",
    "James",
    "Mia",
    "Benjamin",
    "Amelia",
    "Lucas",
    "Harper",
    "Mason",
    "Evelyn",
    "Logan",
    "Abigail"
];

let surnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson"
];

console.log(1)
let randomFullNames = []

button1.addEventListener("click", () => {
    console.log("ciao")
    console.log(user_numberHTML.value)
    for (let i = 1; i <= user_numberHTML.value; i++) {
        let randomname = names[Math.floor(Math.random() * 20)]
        let randomsurname = surnames[Math.floor(Math.random() * 20)]
        randomFullNames.push(String(randomname + " " + randomsurname))

        if (i == user_numberHTML.value) {
            console.log(randomFullNames)
            randomFullNames.forEach((name) => {
                const li = document.createElement("li")
                li.innerText = name
                guestListHtml.appendChild(li)
            })
        }
    }

})






