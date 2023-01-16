//* Değişkenler tanımlanıyor.

let stars = document.querySelector('#starts');
let moon = document.querySelector('#moon');
let mountainsBehind = document.querySelector('#mountains_behind');
let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
let mountainsFront = document.querySelector('#mountains_front')
let header = document.querySelector('header')
// console.log(stars, moon, mountainsBehind, text, btn, mountainsFront)

window.addEventListener('scroll', function () {
  let value = window.scrollY; //? Scrollun aşağı ve yukarı hareketini yakalıyoruz.
  // console.log(value)
  stars.style.left = value * .25 + 'px'; //! left özelliğine value değerini verdikten sonra X ekseninde scroll açılacak. Bunun engellemek için style.css içerisinde body{} ediketine overflow-x:hidden özelliği verilmesi gerekiyor.
  moon.style.top = value * 1.05 + 'px';
  mountainsBehind.style.top = value * 0.5 + 'px';
  mountainsFront.style.top = value * 0 + 'px';
  text.style.marginRight = value * 2.5 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
  //! .srollY ile gelen value dolayısla sayfanın sonsuza kadar gitmesine ve PNG resimlerin alt tarafa taşmasına neden olan sorunu gidermek için section etiketine overflow:hidden verildi.
})
