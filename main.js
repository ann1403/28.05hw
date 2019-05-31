let input = document.querySelector('.but');
let red1r1 = document.querySelector('.red1r1');
let red2r1 = document.querySelector('.red2r1');
let red1r2 = document.querySelector('.red1r2');
let red2r2 = document.querySelector('.red2r2');
let green1r1 = document.querySelector('.green1r1');
let green2r1 = document.querySelector('.green2r1');
let green1r2 = document.querySelector('.green1r2');
let green2r2 = document.querySelector('.green2r2');
input.addEventListener('click', function() {
    red1r1.style.backgroundColor = (red1r1.style.backgroundColor == 'red') ? 'darksalmon' : 'red';
    red2r1.style.backgroundColor = (red2r1.style.backgroundColor == 'red') ? 'darksalmon' : 'red';
    red1r2.style.backgroundColor = (red1r2.style.backgroundColor == 'darksalmon') ? 'red' : 'darksalmon';
    red2r2.style.backgroundColor = (red2r2.style.backgroundColor == 'darksalmon') ? 'red' : 'darksalmon';
    green1r2.style.backgroundColor = (green1r2.style.backgroundColor == 'green') ? 'lightgreen' : 'green';
    green2r2.style.backgroundColor = (green2r2.style.backgroundColor == 'green') ? 'lightgreen' : 'green';
    green1r1.style.backgroundColor = (green1r1.style.backgroundColor == 'lightgreen') ? 'green' : 'lightgreen';
    green2r1.style.backgroundColor = (green2r1.style.backgroundColor == 'lightgreen') ? 'green' : 'lightgreen';
});