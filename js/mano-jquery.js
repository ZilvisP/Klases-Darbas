
$('.tabai > a').click(function(e){
    pakeistiTaba($(this).attr('href'));
    priskirtiKlase('active', this);
    e.preventDefault()
});

function pakeistiTaba (id) {
    $('.sheets > div').hide();
    $(id).show();
}

function priskirtiKlase(klasesvardas, el){
    $('.tabai > a').removeClass(klasesvardas);
    $(el).addClass(klasesvardas);
}



// Jquery mygtukas dingsta ir atsiranda textas
// $(function () {
//     let elementas = $('demo');
//
//     elementas.hide ();
// //su jquery
//     let m1 = $('body > button:first-of-type');
//     let m2 = $('body > button:last-of-type');
//
//     m1.click(function () {
//         elementas.hide();
//     });
//
//     // m2.click(function () {
//     //     elementas.show();
//     // });
// })
//     // function rodyti() {
//     //     document.getElementById('demo').style.display = 'block';
//     // }
//
// // ---kaip su vanila pakeist jquery
//
// let element = document.querySelector('#demo');
// let divas = document.querySelector('body > button:last-of-type');
// element.addEventListener("click", function() {
//     divas.style.display = "block";
// });