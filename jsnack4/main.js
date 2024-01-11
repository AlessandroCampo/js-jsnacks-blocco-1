// Blocoo 2 - snack 3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const arrayOfInteg = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const resultHTML = document.getElementById("result_p")



let arrayOfIntegOdds = []
let allOddsSum = 0



for (let i = 0; i <= arrayOfInteg.length; i++) {
    if (i % 2 !== 0) {
        arrayOfIntegOdds.push(arrayOfInteg[i])
    }

    if (i == (arrayOfInteg.length - 1)) {
        console.log("yo")
        for (let j = 0; j < arrayOfIntegOdds.length; j++) {
            allOddsSum += Number(arrayOfIntegOdds[j])
            if (j == arrayOfIntegOdds.length - 1) {
                console.log(allOddsSum)
            }
        }
    }
}

resultHTML.innerText = `L'array casuale è ${arrayOfInteg} e la somma dei numeri delle posizioni dispari  è ${allOddsSum}`
resultHTML.style.color = "white"
resultHTML.style.fontSize = "35px"
