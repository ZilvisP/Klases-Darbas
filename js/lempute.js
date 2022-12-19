var lemposBusena = true;
function toggleLempute() {
    let img = document.getElementById("lempute")
    // img.src = '../img/lempute_off.png'; kadangi idetas iff, tampa nereikalingas

    if (lemposBusena) {
        // img.src = '../img/lempute_off.png'; pasinaikina ir ikeliam keistiAtributus funkcija
        keistiAtributus(img, 'off')
    } else {
        keistiAtributus(img, 'on')
    }
    lemposBusena = !lemposBusena;  //sukelia loopa, sekanciam if, kaip toggle, pakeicia busena ir if bus vel true
}

// nauja funkcija kuri pakeistu ir alt

function keistiAtributus (img, param) {
    img.src = '../img/lempute_' + param + '.png';

    let alt = 'Lempute ' + param;

    img.setAttribute("alt", alt )
}

//
// //tik img keicia be attributu
// var lemposBusena = true;
// function toggleLempute() {
//     let img = document.getElementById("lempute")
// // img.src = '../img/lempute off.png'; kadangi idetas iff, tampa nereikalingas
//
//     if (lemposBusena) {
//         img.src = '../img/lempute off.png';
//     } else {
//         img.src = '../img/lempute on.png';
//     }
//     lemposBusena = !lemposBusena;  //sukelia loopa, sekanciam if, kaip toggle, pakeicia busena ir if bus vel true
// }
//


