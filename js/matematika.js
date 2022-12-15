
function add(a, b){
    return a + b;
}
function sub(a,  b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mult(a, b) {
    return a * b;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let ats = document.getElementById('ats');
for ( let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        ats.innerHTML += 'Skaicių '  + arr1[i] + ', ' + arr2[j] + ' suma ' + '= ' + add(arr1[i] , arr2[j]) + '<br>';
        ats.innerHTML += 'Skaicių '  + arr1[i] + ', ' + arr2[j] + ' atimtis ' + '= ' + sub(arr1[i] , arr2[j]) + '<br>';
        ats.innerHTML += 'Skaicių '  + arr1[i] + ', ' + arr2[j] + ' dalyba ' + '= ' + div(arr1[i] , arr2[j]) + '<br>';
        ats.innerHTML += 'Skaicių '  + arr1[i] + ', ' + arr2[j] + ' daugyba ' + '= ' + mult(arr1[i] , arr2[j]) + '<br>';
    }

}
