
// let blank2 = document.getElementById ("blank2")
// blank2.innerHTML = "a"
// let secretWord = "elephant";

//const myButtonsContainer = document.getElementById("buttons");

//-------Variables
let blank1 = document.getElementById("blank1")
let blank2 = document.getElementById("blank2")
let blank3 = document.getElementById("blank3")
let blank4 = document.getElementById("blank4")
let blank5 = document.getElementById("blank5")
let blank6 = document.getElementById("blank6")
let blank7 = document.getElementById("blank7")
let blank8 = document.getElementById("blank8")

let abtn = document.getElementById("abtn")
let bbtn = document.getElementById("bbtn")
let cbtn = document.getElementById("cbtn")
let dbtn = document.getElementById("dbtn")
let ebtn = document.getElementById("ebtn")
let fbtn = document.getElementById("fbtn")
let gbtn = document.getElementById("gbtn")
let hbtn = document.getElementById("hbtn")
let ibtn = document.getElementById("ibtn")
let jbtn = document.getElementById("jbtn")
let kbtn = document.getElementById("kbtn")
let lbtn = document.getElementById("lbtn")
let mbtn = document.getElementById("mbtn")
let nbtn = document.getElementById("nbtn")
let obtn = document.getElementById("obtn")
let pbtn = document.getElementById("pbtn")
let qbtn = document.getElementById("qbtn")
let rbtn = document.getElementById("rbtn")
let sbtn = document.getElementById("sbtn")
let tbtn = document.getElementById("tbtn")
let ubtn = document.getElementById("ubtn")
let vbtn = document.getElementById("vbtn")
let wbtn = document.getElementById("wbtn")
let xbtn = document.getElementById("xbtn")
let ybtn = document.getElementById("ybtn")
let zbtn = document.getElementById("zbtn")

let body = document.querySelector('body')
let numCorrect = 0;
let numWrong = 0;



// ----- Functions
function winner () {
  if (numCorrect == 7) {
    body.innerHTML="";
    body.style.backgroundImage = "url('win.jpg')"
  }
}

function lost () {
  if (numWrong == 6) {
    body.innerHTML=""
    body.style.backgroundImage = "url('lost.jpg')"
  }
}

function livesmeter () {
  if (numWrong == 1) {
    lives.innerHTML="Lives - ♥♥♥♥♥";
  } 
  else if (numWrong == 2) {
    lives.innerHTML="Lives - ♥♥♥♥";
  } 
  else if (numWrong == 3) {
    lives.innerHTML="Lives - ♥♥♥";
  } 
  else if (numWrong == 4) {
    lives.innerHTML="Lives - ♥♥";
  } 
  else if (numWrong == 5) {
    lives.innerHTML="Lives - ♥";
  } 
}

// ----- Keys Win

abtn.addEventListener("click", function () {
  blank6.innerHTML = "a"
  numCorrect += 1
  winner()
});

ebtn.addEventListener("click", function () {
  blank1.innerHTML = "e"
  blank3.innerHTML = "e"
  numCorrect += 1;
  ebtn.remove()
  winner()
});

lbtn.addEventListener("click", function () {
  blank2.innerHTML = "l"
  lbtn.remove()
  numCorrect += 1;
  winner()
});

pbtn.addEventListener("click", function () {
  blank4.innerHTML = "p"
  pbtn.remove()
  numCorrect += 1;
  winner()
});

hbtn.addEventListener("click", function () {
  blank5.innerHTML = "h"
  hbtn.remove()
  numCorrect += 1;
  winner()
});

nbtn.addEventListener("click", function () {
  blank7.innerHTML = "n"
  nbtn.remove()
  numCorrect += 1;
  winner()
});

tbtn.addEventListener("click", function () {
  blank8.innerHTML = "t"
  tbtn.remove()
  numCorrect += 1;
  winner()
});

//-----------------------
//-----------------------

bbtn.addEventListener("click", function () {
  bbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

cbtn.addEventListener("click", function () {
  cbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

dbtn.addEventListener("click", function () {
  dbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

fbtn.addEventListener("click", function () {
  fbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

gbtn.addEventListener("click", function () {
  gbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

ibtn.addEventListener("click", function () {
  ibtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

jbtn.addEventListener("click", function () {
  jbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

kbtn.addEventListener("click", function () {
  kbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

mbtn.addEventListener("click", function () {
  mbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

obtn.addEventListener("click", function () {
  obtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

qbtn.addEventListener("click", function () {
  qbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

rbtn.addEventListener("click", function () {
  rbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

sbtn.addEventListener("click", function () {
  sbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

ubtn.addEventListener("click", function () {
  ubtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

vbtn.addEventListener("click", function () {
  vbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

wbtn.addEventListener("click", function () {
  wbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

xbtn.addEventListener("click", function () {
  xbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

ybtn.addEventListener("click", function () {
  ybtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

zbtn.addEventListener("click", function () {
  zbtn.remove()
  numWrong += 1;
  livesmeter ()
  lost ()
});

