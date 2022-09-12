function update(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.data.name);
        var t = data.data.name;
        var x1 = document.getElementById("menu");
        x1.innerText = t;
    }
    var link = "https://foodgroup.herokuapp.com/api/menu";
    xhttp.open("get",link,true);
    xhttp.send();
}