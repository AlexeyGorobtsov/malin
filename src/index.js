import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
let myButton = document.querySelectorAll('.button');
myButton['0'].animate([
    { opacity: 0, easing: 'ease-out' },
    { opacity: 0.1, easing: 'ease-in' },
    { opacity: 1 },
    ],1000);
myButton['1'].animate([
        { opacity: 0, easing: 'ease-out' },
        { opacity: 0.1, easing: 'ease-in' },
        { opacity: 1 } ],
    2000);
myButton['2'].animate([
        { opacity: 0, easing: 'ease-out' },
        { opacity: 0.1, easing: 'ease-in' },
        { opacity: 1 } ],
    3000);

let nnk = document.querySelectorAll('.nnk')['0'];
let bgf = document.querySelectorAll('.bgf')['0'];
let cityAds = document.querySelectorAll('.city-ads')['0'];
function myAnimate(myLogo, durationOpacity, durationScale) {
    myLogo.animate([
            { opacity: 1, easing: 'ease-out' },
            { opacity: 0.1, easing: 'ease-in' },
            { opacity: 0.2 }
    ],
        {
            duration: durationOpacity,
            iterations: Infinity
        }
    );
}

setTimeout(myAnimate(nnk, 6000, 6000), 6000);
setTimeout(myAnimate(bgf, 7000, 7000), 7000);
setTimeout(myAnimate(cityAds, 9000, 9000), 8000);
