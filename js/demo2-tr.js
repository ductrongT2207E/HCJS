var obj = {
    name: "Nam",
    age: 18,
    tel: "0987654321",//neu viet dau + o dau thi mat dau cong
    girlFriends: ['Nguyen Van Anh', 'Le Phuong Linh'],
    eat: function (){
        console.log(this.name+" dang an mi tom...");//this la doi tuong
        //ngam dinh ben trong chinh no (chinh la obj)
    }
};
// console.log(obj.tel);
// console.log(obj.girlFriends);
// obj.eat();
// obj.name = "Huy";
// obj.eat();

var a = document.getElementById("abc");
console.log(a.innerText);
var x = 15;
function changeText(){
    // a.innerText = "Xin chao cac ban";
    // a.innerHTML = x + "<p> Xin chao cac me</p>";
    a.style.fontSize = x + "px";
    a.style.color = "pink";
    x++;
    a.classList.add("classnaodo"); //them class css
    a.style.transform = "rotate("+x+"deg)";
}
// a.innerText+="hello guys";
setInterval(changeText,30);