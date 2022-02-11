var btn = document.querySelector(".btn");
var div = document.querySelector(".container")
var rangeInput = document.querySelector(".range");
var opValue = document.querySelector(".opValue")



btn.addEventListener("click",clickBTN);
rangeInput.addEventListener("change",changeOpacity)
// div.addEventListener("mouseover",mouseOverDiv)
// div.addEventListener("mouseout",mouseOutDiv)

// BU ALTTAKİ SPAN ELEMENTİNİ OLUŞTURMAYI KALDIRDIM ÇÜNKİ BAŞKA BİR YOLLA RGB DEĞERLERİNİ GÖSTERTMEYİ SEÇTİM yeni bir rgbspan html elementi oluşturdum direk index.html içinde
//var span = document.createElement("span");
var rgbspan = document.querySelector(".rgbspan")

//bu alttaki 2'si clickBTN fonksiyonu çalıştığında değişecek
rangeInput.style.cursor = "not-allowed";
rangeInput.setAttribute("disabled",true)

var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
console.log(r,g,b)

function clickBTN(){
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  window.r = r; // local değeri global yapmak için
  window.g = g; // local değeri global yapmak için
  window.b = b; // local değeri global yapmak için
  div.style.backgroundColor = `rgb(${r},${g},${b})`
  btn.style.backgroundColor = `rgb(${r},${g},${b})`
  div.style.opacity = "1";
  div.style.boxShadow = `0 0 50px rgb(${r},${g},${b}),0 0 80px rgb(${r},${g},${b}),0 0 100px rgb(${r},${g},${b}),0 0 120px rgb(${r},${g},${b}),0 0 150px rgb(${r},${g},${b})`
  btn.style.boxShadow = `0 0 50px rgb(${r},${g},${b}),0 0 80px rgb(${r},${g},${b}),0 0 100px rgb(${r},${g},${b}),0 0 120px rgb(${r},${g},${b}),0 0 150px rgb(${r},${g},${b})`
  btn.style.borderColor = `rgb(${r},${g},${b})`;
  // span.classList.add("span")
  // span.innerHTML = div.style.backgroundColor;
  // span.style.visibility = "hidden"
  //div.appendChild(span)
  rgbspan.innerHTML = div.style.backgroundColor;
  rgbspan.style.backgroundColor = `rgb(${r},${g},${b})`
  rangeInput.style.cursor = "pointer";
  rangeInput.removeAttribute("disabled");
  rangeInput.style.accentColor = `rgb(${r},${g},${b})`
  opValue.innerHTML = "Value with opacity";
  rangeInput.value = "1"

}





// BUNLARA GEREK YOK HOVER EFFECT İSTEMİYORUM
// function mouseOverDiv(){
//
// //span.style.visibility = "visible"
//
// }

// BUNLARA GEREK YOK HOVER EFFECT İSTEMİYORUM
// function mouseOutDiv(){
// rgbspan.innerHTML = "";
//
//
// }




function changeOpacity(){

  var opacityValue = rangeInput.value;
  window.opacityValue = opacityValue
  var rColor = window.r;
  var gColor = window.g;
  var bColor = window.b
  div.style.opacity = opacityValue;
  var opValueInnerHTML = `rgba(${rColor},${gColor},${bColor},${opacityValue})`
  opValue.innerHTML = "Opacity Added-Value is down below" + "<br/>" + `<span id='color'>${opValueInnerHTML}</span>`
  document.querySelector("#color").style.backgroundColor = `rgba(${rColor},${gColor},${bColor},${opacityValue})`

 }
