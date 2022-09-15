function checkPrime(x){
    if (x<2){
        return false;
    } else if (x===2 || x===3){
        return true;
    } else {
        for(var i=2;i<=x/2;i++){
            if (x%i === 0){
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
var n = 3;
function countdown(){
    var xyz = document.getElementById("head");
    xyz.innerText +=" "+n;
    n = nextPrime(n);
    }
