
// let blank2 = document.getElementById ("blank2")
// blank2.innerHTML = "a"

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

let secretWord = "elephant";
let numCorrect = 0;
let numWrong = 0;




abtn.addEventListener("click", function () {
  document.getElementById("blank6").innerHTML = "a";
  numCorrect += 1;
  abtn.remove()
  console.log (numCorrect, numWrong)
});

bbtn.addEventListener("click", function () {
  bbtn.remove()
   numWrong += 1;
  console.log (numCorrect, numWrong)
});

if (numCorrect == 1) {
  alert ('Good day');
}