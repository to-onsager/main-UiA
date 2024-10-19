/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)

    IKKE endre på kode som er gitt, med mindre oppgaven spesefikt sier at du skal det
*/

/*
    Oppgave: Eksempel
    Skriv koden for å skrive ut alle navnene i listen, et navn per linje
*/
console.log("Oppgave: Eksempel");
const people = ["Tony","Christian","Håkon"]

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}

/*
    Oppgave: A
    Lag variabler for:
    * Timer i døgnet
    * Minutter i en time
    * Sekunder i et minutt
    * forholdet mellom vann og saft når man blander saft.
    * dager til din bursdag
    * mmilimeter regn som faller 
*/
console.log("Oppgave: A");

const TIMER_PER_DOGN = 24;
const MINUTTER_PER_TIME = 60;
const SEKUNDER_PER_MIN = 60;

let vannMenge = 1;
let saftMenge = 1/4;
let dagerTilBursdag = 10;
let millimeterRegn = 1;


/*
    Oppgave: B
    Bruk variablene dine fra oppgave A og kalkuler:
    * Hvor Mange sekunder er det i 2.5 timer?
    * Hvor mange minutter er det i 123 dager?
    Husk å sette svarene til sine egne variabler
    Eks:
    // Hvor mange dl er 4.5 cups?  
    const dlInCups = 2.36588;
    const antallDL = dlInCups * 4.5;
*/
console.log("Oppgave: B");

const sekunderTilTimer = SEKUNDER_PER_MIN * MINUTTER_PER_TIME * 2.5
const minutterTilDager = MINUTTER_PER_TIME * TIMER_PER_DOGN * 123


/*
    Oppgave: C
    Bruk en løkke (for) til å skrive ut tallene fra 1 til 10 
*/
console.log("Oppgave: C");

for (let index = 1; index < 10; index++){
    console.log(index);

    }
    
/*
    Oppgave: D
    Bruk en løkke (for) til å skrive ut tallene fra 10 til 1
*/
console.log("Oppgave: D");

for (let index = 10; index > 1; index++){
    console.log(index);
    
    }

/*
    Oppgave: E
    Denne er litt vanskligere, men du klarer den ;)
    Bruk en løkke (for) til å skrive ut partallene mellom 1 og 100
*/
console.log("Oppgave: E");
for (let index = 2; index < 100; index+=2){
    console.log(index);
    
    }

/*
    Oppgave: F
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: F");

const DICTIONARY = {
    hello: "Hei på deg", 
    howAreYou: "hvordan står det til?", 
    goodQuestionsLately: "har du fått noen gode spørsmål i det siste"
    }

console.log(`${DICTIONARY.hello} Christian, ${DICTIONARY.howAreYou}`); //-> Hei på deg Christian, hvordan står det til?
console.log(`${DICTIONARY.goodQuestionsLately}?`); //-> Fått noen gode spørsmål i det siste?

/*
    Oppgave: G
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: G");
/*

const DICTIONARY_ML = {
    no:{
        hello:"Hei på deg",
        howAreYou:"hvordan står det til?"
    },
    en:{

    }
}

console.log(`${DICTIONARY.en.hello} Christian ${DICTIONARY.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY.en.goodQuestionsLatly}`) //-> Gotten anny good questions latly?
*/

const DICTIONARY_ML = {
    no:{
        hallo:"Hei på deg",
        hvordanGårDet:"hvordan står det til?",
        godeSpørsmål:"har du fått noen gode spørsmål i det siste?"
    },
    en:{
        hello:"Hello",
        howAreYou:"how are you?",
        goodQuestionsLately:"Gotten any good questions lately?"

    }
}
console.log(`${DICTIONARY_ML.no.hallo} Christian, ${DICTIONARY_ML.no.hvordanGårDet}`); //-> Hei Christian, hvordan går det?
console.log(`${DICTIONARY_ML.no.godeSpørsmål}`); //-> Fått noen gode spørsmål i det siste?
console.log(`${DICTIONARY_ML.en.hello} Christian, ${DICTIONARY_ML.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.en.goodQuestionsLately}`); //-> Gotten any good questions lately?