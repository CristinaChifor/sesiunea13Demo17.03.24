console.log(`Hello`);

// Functii
/**
 * Funcțiile reprezintă blocuri de cod reutilizabile, definite pentru a efectua anumite acțiuni. Funcțiile sunt un aspect fundamental în JavaScript și sunt folosite pentru structurarea, eficientizarea și organizarea codului.
Funcțiile pot fi executa operații în baza unor parametri (date de intrare) și pot returna (întoarce) o valoare în urma execuției (date de ieșire).
 */

// Functii simple
/** sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde () urmate de paranteze acolade 
 * { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției.
 */

function printDigits() {
    for (let i = 0; i <= 9; i++) {
        console.log(`digit: `, i);
    }
}

printDigits(); // apelam functia
printDigits();

// Functii cu parametri
/**Sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde intre care definim parametrii funcției (param1, param2) 
 * urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției.
 parametri = date de intrare intr-o functie
*/

function arrayHasElement(arrayToCheck, element) {
    let found = false;
    for (const elem of arrayToCheck) {
        if (elem === element) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log(`Array ${arrayToCheck} has element ${element}`);
    } else {
        console.log(`Array ${arrayToCheck} does not have element ${element}`);
    }
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 10, 21];
const valueToCheck1 = 10;
const valueToCheck2 = 30;

// refolosim functia cu alte argumente
arrayHasElement(array1, valueToCheck1);
arrayHasElement(array2, valueToCheck1);
arrayHasElement(array1, valueToCheck2);
arrayHasElement(['ala', 'bala', 'portocala'], 'ala');

// Functii cu return
/** Sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde intre care definim
 *  parametrii funcției (opțional) (param1, param2) urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod 
 * ce dorim sa fie executate în momentul apelarii funcției printre care trebuie sa existe și o linie de cod ce returnează o valoare folosind cuvantul cheie return urmat de valoare.
 */

function removeEvenNumbers(arrayToModify) {
    const newArray = [];

    for (const num of arrayToModify) {
        //console.log(`num: `, num, 'result: ', num % 2);
        if (num % 2 > 0) {
            newArray.push(num);
        }
    }
    return newArray;
}

const array1Modified = removeEvenNumbers(array1);
console.log(`Modified array1 is: ${array1Modified}`);

const array2Modified = removeEvenNumbers(array2);
console.log(`Modified array2 is: ${array2Modified}`);

const shoppingBasket = [];
const stockProducts = [
    {
        name: 'Hat',
        price: 22.99,
        stock: 12
    },
    {
       name: 'tshirt',
       price: 30.99,
       stock: 40
    }

]
function moveFromStockToBasket(productName) {
    for (const product of stockProducts) {
        if(product.name === productName) {
            shoppingBasket.push({name: product.name, quantity: 1});
            product.stock -= 1;      
        }
    }
}

console.log(`Current stock: `, stockProducts);
console.log(`Shopping basket: `, shoppingBasket);

moveFromStockToBasket('Hat');
console.log(`Current stock: `, stockProducts);
console.log(`Shopping basket: `, shoppingBasket);

// Functii anonime
/**Sunt funcții ce le definim fără a fi nevoie sa le denumim dar le putem salva în variabile.
 *  Folosirea lor va fi posibila prin folosirea variabilei în care este salvată funcția. Aceste funcții, optional, pot avea parametrii si valori de return.
 */
const printHello = function() {
    console.log(`hello`);
};

printHello();

function mapArray(arrayToMap, mappingFunction){
    const newArray = [];
    for(const element of arrayToMap) {
        let mappingFunctionResult = mappingFunction(element)
        newArray.push(mappingFunctionResult);

    }
    return newArray;
}

const arrayToMap = [1, 2, 3];
const doubledArray = mapArray(arrayToMap, function(el) {
    return el * 2;
});

console.log(`arrayToMap: ${arrayToMap}`);
console.log(`doubledArray: ${doubledArray}`);

const doubled2 = arrayToMap.map(function(el) {
    return el * 2;
});

console.log(`doubled2: ${doubled2}`);