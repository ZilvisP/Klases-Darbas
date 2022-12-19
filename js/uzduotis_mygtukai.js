//1
//
// let mygtukas = document.getElementById("button");
// mygtukas.addEventListener('click', manoFun);
// function manoFun(e) {
//     let manoInputas = document.getElementById("input")
//     manoInputas.value = "Labas, pasauli!";
//     return;
// }

//2
// let mygtukas = document.getElementById("button");
// mygtukas.addEventListener('click', showForm);
// function showForm(e) {
//     let formosRodymas = document.getElementById("forma")
//     formosRodymas.style.display = "block";
//     return;
// }
//

// 3
let mygtukas = document.getElementById("button");
mygtukas.addEventListener('click', addRaw);
function addRaw() {
    let lentele = document.getElementById("infolentele");
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;

let traw = document.createElement("tr");
let tcol1 = document.createElement("td");
let tcol2 = document.createElement("td");
let tcol3 = document.createElement("td");

    tcol1.innerHTML = input1;
    tcol2.innerHTML = input2;
    tcol3.innerHTML = input3;


    traw.appendChild(tcol1);
    traw.appendChild(tcol2);
    traw.appendChild(tcol3);
    lentele.appendChild(traw);
}



