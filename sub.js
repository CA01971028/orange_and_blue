//要素の取得
let cvs = document.getElementById('img');
// var ctx = cvs.getContext("2d");

let gb = new Image();//ゴブリンの画像

//画像パス
gb.src = "image/orange.png";

// function draw(){
//     ctx.drawImage(gb,4,6,20,30);//画像の初期値

// }
// draw()

//event処理（ルール）
var btn = document.querySelector('#button');
btn.addEventListener('click',function(){
    alert("a")
})
