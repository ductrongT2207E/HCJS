function update(city){
    var bg = document.getElementById("bg-fade");
    bg.style.display = "block";
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText);
        //convert to object of js
        var data = JSON.parse(this.responseText);
        //console.log(data.main.temp);
        console.log(data.main.temp); //26

        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;

        // console.log(data.name); //Hanoi
        var n = data.name+", "+ data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = n;

        //console.log(data.main.pressure); //1013
        var p = data.main.pressure;
        var x3 = document.getElementById("pressure");
        x3.innerText = p;
        bg.style.display = "none";

    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true);
    xhttp.send();
}