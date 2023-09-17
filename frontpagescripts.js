function openmenu(){
    document.getElementById("sidemenu").style.width = "100%";
    document.getElementById("closemenu").style.display = "block";
    document.getElementById("list").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.body.style.overflowX = "hidden";
}
function closemenu(){
    document.getElementById("sidemenu").style.width = "0";
    document.getElementById("closemenu").style.display = "none";
    document.getElementById("list").style.display = "none";
    document.getElementById("container").style.display = "inline-flex";
    document.body.style.overflowX = "scroll";
}