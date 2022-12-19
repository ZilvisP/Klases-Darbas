let vardas = document.getElementsById('fn')
// vardas.value = 'Petras';
// vardas.src = '!!!';
vardas.addEventListener('click', manoveiksmai);     //onchange klauso koks eventas manoveiksmai - ka darys kai tas eventsnutiks

function manoveiksmai(e) {
    console.log(e.target.value);
}
//sukuriam elementa
let meniuItem = document.createElement('li')
meniuItem.innerHTML = '<a href="#">Naujas Meniu</a>'

//idet i sarasa

let meniu = document.querySelector('header > nav > ul');
meniu.appendChild(meniuItem); //idedam i sukurta faila

//naujas da vienas elementas
let meniuItem = document.createElement('li')
meniuItem2.innerHTML = '<a href="#">Naujas Meniu2</a>'
let meniuItem2 = document.querySelector('header > nav > ul');
meniu.appendChild(meniuItem);


function generuotiElementa(elementoTekstas) {
    let meniuItem = document.createElement('li');
    meniuItem.innerHTML = '<a href="#">'+elementoTekstas+'</a>'
return meniuItem;
}



