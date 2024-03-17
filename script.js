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