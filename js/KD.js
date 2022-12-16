// // 1.
// const r = 15;
// let ilgisC = Math.round(2 * Math.PI * r);   //2Pr
// let plotasS = Math.round(Math.PI * (r ** 2)) //P*r2
// const ats = [ilgisC, plotasS];
// document.getElementById("demo").innerHTML = ats;
//
//
// // 2.
// let pirmasIn = {pirmasSk:10, antrasSk:15};
// let antrasIn = { pirmasSk:12, antrasSk:10};
// if (pirmasIn.pirmasSk === antrasIn.pirmasSk) {
//     console.log('sankirta yra '+ pirmasIn.pirmasSk + ' ' + antrasIn.pirmasSk);
// } else if (pirmasIn.pirmasSk === antrasIn.antrasSk) {
//     console.log('sankirta yra '+ pirmasIn.pirmasSk + ' ' + antrasIn.antrasSk);
// } else if (pirmasIn.antrasSk === antrasIn.pirmasSk) {
//     console.log('sankirta yra '+ pirmasIn.antrasSk + ' ' + antrasIn.pirmasSk);
// }
// else if (pirmasIn.antrasSk === antrasIn.antrasSk) {
//     console.log('sankirta yra '+ pirmasIn.antrasSk + ' ' + antrasIn.antrasSk);
// }
//
//
// // 3.
// const vardas = 'Tutis';
// const pavarde = 'Birutis';
// const kursas = 1;
// const kurMokosi = 'Orlaviu Marketingas';
// let pazymiuMasyvas = [7, 4, 5, 6];
// window.alert(vardas);
//
// //4.
// const studencioks = (vardas + ' ' + pavarde + ' '+ 'mokosi'+ ' ' + kurMokosi + ', ' + kursas + ' ' + 'kurse' + ' ' +
//     'jo pažymiai:' + ' ' + pazymiuMasyvas);
//
// document.write('<h>'+ studencioks + '</>')
//
// //5.
// let strigo = (typeof vardas, typeof pavarde, typeof kursas, typeof kurMokosi, typeof pazymiuMasyvas);
//
//
//
// ['Tutis', 'Birutis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6] ];

/* ----------------------------------------------JS FUNKCIJOS -----------------------------------------*/
// 4 studento objektas
let me = ['Zilvis', 'Pilvis', 1, 'Code academy', [7, 4, 5, 6]];

//  uzduotis isvestas studentu masyvas:

//5 studentu masyvas
let studentai = [{
    vardas: 'Zilvis',
    pavarde: 'Pilvis',
    kursas: 1,
    kurMokosi: 'Orlaviu Marketingas',
    pazymiuMasyvas: [7, 4, 5, 6]
},
    {
        vardas: 'Zilvi',
        pavarde: 'Pilvi',
        kursas: 2,
        kurMokosi: 'Orlaviu Marketinga',
        pazymiuMasyvas: [7, 4, 5, 5]
    },
    {
        vardas: 'Zilv',
        pavarde: 'Pilv',
        kursas: 3,
        kurMokosi: 'Orlaviu Marketing',
        pazymiuMasyvas: [7, 4, 5, 4]
    },
    {
        vardas: 'Zil',
        pavarde: 'Pil',
        kursas: 4,
        kurMokosi: 'Orlaviu Marketin',
        pazymiuMasyvas: [7, 4, 5, 3]
    },
    {
        vardas: 'Zi',
        pavarde: 'Pi',
        kursas: 5,
        kurMokosi: 'Orlaviu Marketi',
        pazymiuMasyvas: [7, 4, 5, 2]
    },
    {
        vardas: 'Z',
        pavarde: 'P',
        kursas: 8,
        kurMokosi: 'Orlaviu Marketi',
        pazymiuMasyvas: [4, 4, 4, 1]
    }
]

// 6. Išveskite penkto objekto duomenis (vienas bendras console.log()).

document.write(studentai[5]);

// 7. Išveskite tokį patį informacinį sakinį iš objekto duomenų

const studencioks = (studentai[3].vardas + ' ' + studentai[2].pavarde + ' mokosi ' + studentai[1].kurMokosi + ', ' + studentai[5].kursas +' kurse ' + 'jo pažymiai: ' + studentai[4].pazymiuMasyvas);
console.log(studencioks)

//8. Išveskite visus studento pažymius, esančius objekte. Naudojant for ciklą.

    let student = ['Zilvis', 'Pilvis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6]];

    var pazymiai = '';
    for ( let i = 0; i < student[4].length; i++) {
    pazymiai += student[4].[i] + ', ' ;
}
document.write(pazymiai);

// //9. Pakelkite tris pasirinktus pažymius per vieną skaičių.
//     Tačiau atkreipkite dėmesį ar keliamas pažymys gali būti pakeltas (jei dar ne max),
// jei jis jau ir taip yra 10, tuomet palikite tokį koks yra.

let student = ['Zilvis', 'Pilvis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6]];
    let sk = student[4];
    let trys;
    function grazina([a,b,c,d]) {
        return [b, c, d];
}
        for (i = 0; i < sk.length; i++) {
            if (sk[i] < 10) {
            sk[i]+=1 }
        }
trys = grazina(sk)

console.log(trys)

//10. Suskaičiuokite ir išveskite trijų pasirinktų pažymių sumą.

let student = ['Zilvis', 'Pilvis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6]];
let sk = student[4];
let trijuSuma;
function grazina([a,b,c,d]) {
    return [a + b + d];
}
trijuSuma = grazina(sk);
document.write(trijuSuma);

// 11. Suskaičiuokite ir išveskite dviejų pasirinktų pažymių sandaugą.

let student = ['Zilvis', 'Pilvis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6]];
let sk = student[4];
let sandauga
function grazina([a,b,c,d]) {
    return [a * d];
}
sandauga = grazina(sk);
document.write(sandauga);

//12. Patikrinkite ar kursas yra numeral tipo.
let student = ['Zilvis', 'Pilvis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6]];
let op = student[2];
let positive = a => (Number.isInteger(a));
if (positive(op)) {
    console.log('skaicius yra numerinis')
} else {
    console.log ('GG WP NaN')
};
//13. Patikrinkite ar studentas mokosi ketvirtame kurse ir ar ši reikšmė yra kaip numeral (===).
let student = ['Zilvis', 'Pilvis', 1, 'Orlaviu Marketingas', [7, 4, 5, 6]];

let kurs = onCheck(student[2]);
function onCheck(a) {
    let numEral = Number.isInteger(a);
    return numEral;
}
if (kurs && student[2] === 4 ) {
    console.log('Skaicius yra numerinis ir studentas mokosi'+ student[2] + 'kurse')
}

// 14. Patikrinkite visus studentus ar jie mokosi ketvirtame kurse.
//     Jeigu studentas mokosi ketvirtame kurse, išveskite tekstą "studentas <Vardas Pavardė> yra abiturientas",
//     kitu atveju "Studentui <Vardas Pavardė> dar toli iki mokslų baigimo".

let studentai = [{
    vardas: 'Zilvis',
    pavarde: 'Pilvis',
    kursas: 4,
    kurMokosi: 'Orlaviu Marketingas',
    pazymiuMasyvas: [7, 4, 5, 6]
},
    {
        vardas: 'Zilvi',
        pavarde: 'Pilvi',
        kursas: 3,
        kurMokosi: 'Orlaviu Marketinga',
        pazymiuMasyvas: [7, 4, 5, 5]
    },
    {
        vardas: 'Zilv',
        pavarde: 'Pilv',
        kursas: 1,
        kurMokosi: 'Orlaviu Marketing',
        pazymiuMasyvas: [7, 4, 5, 4]
    },

    {
        vardas: 'Z',
        pavarde: 'P',
        kursas: 4,
        kurMokosi: 'Orlaviu Marketi',
        pazymiuMasyvas: [4, 4, 4, 1]
    }
]
var ats = '';
let st = 0;
while (st < studentai.length)  {
   if (studentai[st].kursas === 4) {
        ats += 'Studentas ' + studentas[st].vardas + '  netoli galutinio tikslo ' + '<br>';
        st++;
   }
   else {ats += 'Studentas ' + studentas[st].vardas + '  dar gaus pakentet, metelius - kitus ' + '<br>';
   }
}
document.querySelector('body > p').innerHTML = ats;

// 15. Sukurkite funkciją vardu "suma", kuri priima du skaičius kaip argumentus ir grąžintų jų sumą.
    function suma(a, b) {
        return  (a + b);
}
//16. Naudodami šią funkciją, parašykite kodą, kuris atspausdina visų skaičių nuo 1 iki 100 sumą.

let skSuma = 0;
for (i = 1; i < 101; i++) {
    skSuma = suma(skSuma, i)
}
document.write(skSuma);
//
// 17. Sukurti funkcija/metoda kuris sudetu lyginius arba nelyginius pateikto masyvo elementus.
// sudeti(A, ‘even’);  // even|odd

let A = [1,3,6,5,7,2,2,4,4,8];
let even =[];
let odd =[];
let i = 0;
while (i < A.length) {
    if (A[i]%2 ===0) {
      even.push(A[i]);
    }
    else {
        odd.push(A[i]);
    }
    i++;
}
console.log(even, odd)

(6) [6, 2, 2, 4, 4, 8] (4) [1, 3, 5, 7]

// Sukurti funkcija/metoda kuris sudetu lyginiu arba nelyginių
// indeksų reikšmes .(pvz ats: [0 => 1, 1=> 3,  2=> 6, 3 => 5, 4 => 7, 5=>2, 6 =>2, 7=> 4, 8=>4, 9=>8];
// 1+6+7+2+4 = 20 (Kai lyginiai indexai)


let even = [1,3,6,5,7,2,2,4,4,8];
let sumuojam;
let i = 0;
while (i <even.length) {
    if (i%2===0){
        sumuojam += i;
    }
    else {
        console.log(NaN)
    }
    i++;
}
