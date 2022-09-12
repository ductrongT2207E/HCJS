var x;
x = 10;
x = "hello my friend";
x = 3.14;
var y = 20;
var z = x + y; //23.14
x = "hello";
var k = x + y;
//s + n = s
console.log(k);
var t = true; //false
for(var i=0; i<3; i++){

    console.log("i=" +i);
}
var ar = [];
ar[0] = 1;
ar.push(10);//chèn giá trị vào cuối mảng. tăng thêm chỉ mục (index) cho mảng
ar.push("hello");
ar.push("hello");
//ar.push([]) //rỗng
//duyet mang theo chi muc (index)
for(var i=0; i<ar.length;i++){ //ar.length để đo kích thước của mảng
    console.log(ar[i]);
}
//duyet mang theo kieu xet tung phan tu - foreach
//chay qua tung phan tu den khi het phan tu
ar.map(xyz=>{
    console.log(xyz); //xyz tuong tu voi arr[i]
});
var tk = tinhtong(5,3)
var tk2 = tinhtong("hello",10)
function tinhtong(a,b){
    return a+b;
}
console.log(tk);
console.log(tk2);

function demo(){
    console.log("hello everybody...");
}

// setTimeout(demo,3000);//sau khoang thoi gian 1000ml se chay ham demo
//demo: call back function
console.log("abcxyz");

// setInterval(demo,3000);
console.log("ABCXYZ...");

// var n =10;
// function countdown(){
//     var xyz = document.getElementById("head");
//     console.log(n);
//     n--;
//     if(n<0){
//         clearInterval(si)
//     }
// }
// var si= setInterval(countdown, 1000)

// var n =10;
// function countdown(){
//     var xyz = document.getElementById("head");
//     xyz.innerText = n;
//     n--;
//     if(n<0){
//         clearInterval(si)
//     }
// }
// var si= setInterval(countdown, 1000)

//viet chuong trinh cu 2 giay in ra 1 so chan
//in toi da 10 so
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
        clearInterval(si)
    }
}
var si= setInterval(countdown, 1000)
