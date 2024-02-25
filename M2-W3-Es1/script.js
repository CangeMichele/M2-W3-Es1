/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {

    if (typeof n1 !== "number" || typeof n2 !== "number" || !Number.isInteger(n1) || !Number.isInteger(n2)) {
        return console.log("Esercizio 1: errore input");

    } else {
        if (n1 === n2) {
            result = ""
            result = (n1 + n2) * 3
        } else {
            result = ""
            result = n1 + n2
        }

        return console.log("Esercizio 1: " + result);
    }
}

inputNum1 = 10
inputNum2 = 34

crazySum(inputNum1, inputNum2)



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (typeof n !== "number" || !Number.isInteger(n)) {
        return console.log("Esercizio 2: errore input");

    } else if ((20 < n && n <= 100) || n === 400) {
        result = true
    } else {
        result = false
    }

    return console.log("Esercizio 2: " + result);
}

input = 400

boundary(input)



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    if (typeof str !== "string") {
        return console.log("Esercizio 3: errore input");
    } else {
        result = ""
        for (i = 0; i < str.length; i++) {
            result = str[i] + result
        }

        return console.log("Esercizio 3: " + result);
    }
}

input = "ciao a tutti"

reverseString(input)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function upperFirst(str) {
    if (typeof str !== "string") {
        return console.log("Esercizio 4: errore input");

    } else {
        result = ""
        result = str[0].toUpperCase()
        for (i = 1; i < str.length; i++) {
            if (str[i - 1] === " ") {
                result = result + str[i].toUpperCase()
            } else {
                result = result + str[i]
            }
        }

        return console.log("Esercizio 4: " + result);
    }
}

input = "ciao a tutti"

upperFirst(input)



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    if (typeof n !== "number" && !Number.isInteger(n)) {
        return console.log("Esercizio 5: errore input");
    } else {
        result = new Array
        for (i = 0; i < n; i++) {
            result[i] = Math.floor(Math.random() * 11)
        }

        return console.log("Esercizio 5:" + result)
    }
}

input = 10

giveMeRandom(input)

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function areaRettangolo(l1, l2) {
    if (typeof l1 !== "number" || typeof l2 !== "number") {
        return console.log("Esercizio extra 1: errore input");
    } else {
        result = ""
        result = l1 + l2
        return console.log("Esercizio extra 1: " + result);
    }
}

input1 = 10
input2 = 20

areaRettangolo(input1, input2);



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    if (typeof n !== "number") {
        return console.log("Esercizio extra2: errore input");
    } else {
        diff = ""
        diff = n - 19
        if (diff < 0) {
            diff = diff * (-1)
        }

        if (diff > 19) {
            diff = diff * 3
        }

        return console.log("Esercizio extra 2: " + diff);
    }
}

input = 40

crazyDiff(input);



/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(str) {
    if (typeof str !== "string") {
        return console.log("Esercizio extra 3: errore input");
    } else {
        strTest = str.substring(0, 5)
        strTest = strTest.toLowerCase()

        if (strTest === "code ") {
            return console.log("Esercizio extra 3: " + str);
        } else {
            return console.log("Esercizio extra 3: code " + str);
        }
    }
}
stringa = "ciao a tutti"
codify(stringa);


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {

    let check = false
    if (n < 0 || !Number.isInteger(n)) {
        return console.log("Esercizio Extra 4: errore input")
    } else {
        if (n % 3 === 0) {
            check = true
        }

        if (n % 7 === 0) {
            check = true
        }
    }

    return console.log("Esercizio extra 4: " + check)
}

input = 21

check3and7(input);



/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    if (typeof str !== "string") {
        return console.log("Esercizio extra 5: errore input");

    } else {
        cut = str.substr(1, str.length - 2)
        return console.log("Esercizio extra 5: "+ cut);
    }
}

stringa = "ciao a tutti"
cutString(stringa);