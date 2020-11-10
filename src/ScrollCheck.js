function scrollcheck(){

var scrolllocation = Number(document.getElementsByClassName("front-Main")[0].scrollTop);
var categoryColor = document.getElementsByClassName("menu-List-Myinfo")[0];
console.log(scrolllocation)
scrolllocation < 1200 && scrolllocation >= 0 ? document.getElementsByClassName("menu-List-Myinfo")[0].style.color =
"#FFFFFF" :
  document.getElementsByClassName("menu-List-Myinfo")[0].style.color = "#727272";

  scrolllocation < 2400 && scrolllocation >= 1200? document.getElementsByClassName("menu-List-Calendar")[0].style.color =
"#FFFFFF" :
  document.getElementsByClassName("menu-List-Calendar")[0].style.color = "#727272";

  scrolllocation < 3580 && scrolllocation>= 2400? document.getElementsByClassName("menu-List-Board")[0].style.color =
"#FFFFFF" :
  document.getElementsByClassName("menu-List-Board")[0].style.color = "#727272";

  scrolllocation < 4800 && scrolllocation >= 3580 ? document.getElementsByClassName("menu-List-Ftp")[0].style.color =
"#FFFFFF" :
  document.getElementsByClassName("menu-List-Ftp")[0].style.color = "#727272";
}
export default scrollcheck;