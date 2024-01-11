// Blocoo 2 - snack 3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const arrayOfInteg = [23, 45, 12, 78, 56, 34, 89, 17, 41, 63, 92, 30, 5, 72, 8, 50, 19, 67, 3, 94, 27, 61, 38, 74, 14, 82, 49, 10, 96, 31];


let arrayOfIntegOdds = []



for (let i = 0; i <= arrayOfInteg.length; i++) {
    if (i % 2 !== 0) {
        arrayOfIntegOdds.push(arrayOfInteg[i])
    }

    if (i == (arrayOfInteg.length - 1)) {
        console.log("yo")
        let allOddsSum = 0
        for (let j = 0; j < arrayOfIntegOdds.length; j++) {
            allOddsSum += Number(arrayOfIntegOdds[j])
            if (j == arrayOfIntegOdds.length - 1) {
                console.log(allOddsSum)
            }
        }
    }
}


