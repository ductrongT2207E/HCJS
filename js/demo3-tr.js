var x = 0;
var flag = false;
function demoEvent(){
    if(flag == false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changeText,20);
        flag == true;
    }
}
function changeText(){
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+x+"deg)";
    x++;
}

function inputSearch(obj) {
    // var ix = document.getElementById(id);
    console.log("Searching: "+ obj.value);
}

function demoEvent2(){
    // var ips = document.getElementsByTagName("input");//dc 1 array
    // var ips = document.getElementsByClassName("input-text");
    // var ips = document.querySelectorAll("input.input-text");
    var ips = document.querySelectorAll("input.input-text[type=text]");
    for(var i=0; i<ips.length;i++){
        ips[i].style.backgroundColor = "red";
    }
}