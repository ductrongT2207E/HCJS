
function checkPrime(x){
    //kiem tra x co phai so nguyen to hay khong
    if (x<2){
        return false;
    } else if(x == 2 || x == 3){
        return true;
    } else {
        for(var i=2;i<=x/2;i++){
            if (x%i==0){
                return false;
            }
        }
        return true;
    }
}

function nextPrime(x){
    for (var i=x+1;true;i++){
        if(checkPrime(i)){
            return i;
        }
    }
}
var n = 0;
var m = 0;
function countdown(){
    var xyz = document.getElementById("head");
    xyz.innerText += " " +n;
    n = nextPrime(n);
    m++;
    if(m>20){
        clearInterval(si);
    }
}
var si= setInterval(countdown, 1000);
