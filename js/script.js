


    // 1.
const r = 15;
let ilgisC = Math.round(2 * Math.PI * r);   //2Pr
let plotasS = Math.round(Math.PI * (r ** 2)) //P*r2
const ats = [ilgisC, plotasS];
document.getElementById("demo").innerHTML = ats;


    // 2.
let pirmasIn = {pirmasSk:10, antrasSk:15};
let antrasIn = { pirmasSk:12, antrasSk:10};
if (pirmasIn.pirmasSk === antrasIn.pirmasSk) {
    console.log('sankirta yra '+ pirmasIn.pirmasSk + ' ' + antrasIn.pirmasSk);
} else if (pirmasIn.pirmasSk === antrasIn.antrasSk) {
    console.log('sankirta yra '+ pirmasIn.pirmasSk + ' ' + antrasIn.antrasSk);
} else if (pirmasIn.antrasSk === antrasIn.pirmasSk) {
    console.log('sankirta yra '+ pirmasIn.antrasSk + ' ' + antrasIn.pirmasSk);
}
else if (pirmasIn.antrasSk === antrasIn.antrasSk) {
    console.log('sankirta yra '+ pirmasIn.antrasSk + ' ' + antrasIn.antrasSk);
}


    // 3.
const vardas = 'Tutis';
const pavarde = 'Birutis';
const kursas = 1;
const kurMokosi = 'Orlaviu Marketingas';
let pazymiuMasyvas = [7, 4, 5, 6];
window.alert(vardas);

    //4.
const studencioks = (vardas + ' ' + pavarde + ' '+ 'mokosi'+ ' ' + kurMokosi + ', ' + kursas + ' ' + 'kurse' + ' ' +
'jo pažymiai:' + ' ' + pazymiuMasyvas);

document.write('<h>'+ studencioks + '</>')

    //5.
let strigo = (typeof vardas, typeof pavarde, typeof kursas, typeof kurMokosi, typeof pazymiuMasyvas);





// document.getElementById("tipas").innerHTML = strigo;
// <button type="button" onClick="document.write('+ strigo +')">Try it</button>



    /*praejusi pamoka
const x = 5;
const y = 6;
const z = x + y;
console.log(z);

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    ayeColor: "blue"
};
pirmoji uzduotis
let a = 1;
const b = " Kintamoji a reiksme";
console.log(b + ' ' + a);
a = 2;
console.log (`Kintamoji a reiksme ${a}`)

//antroji uzduotis

const manoVardas = "Zilvis Pilvis";
const tekstas = 'Mano vardas'
console.log(`${tekstas} ${manoVardas}`);
console.log(tekstas + ` ` + manoVardas)
//trecioji uzduotis

const metai = 1989;
const menuo = 6;
const diena = 19;
let mew = metai%10 + menuo%7 + diena%10;
console.log(mew);

// ===JavaScript===
1. Duotas kintamasis r=15. Sukurti algoritmus kurie skaiciuotu apskritimo ilgi ir plota
2 duoti du sveikuju skaiciu intervalai [a;b] ir [c;d], kur a<=c. Sudarykite programa, kuri nustatytu,
ar egzistuoja siu intervalu sankirta ir, jeigu sankirta egzistuoja, tai raskite jos rezius [x;Y]
3. susikurkite siuos atskirus kintamuosius apie studenta: -vardas -pavarde - kursas - kur mokosi - pazymiu masyvas
4. isveskite visus duomenis sakinio pavidalus, pvz.: "Tomas Tomauskas KTU, 4 kurse, jo pazymiai [7,4,5]."
5. Isveskite visu kintamuju apibudinimus su tipais (naudoti typeof), pvz.:
"parametro 'vardas' tipas yra 'string'...
*/

