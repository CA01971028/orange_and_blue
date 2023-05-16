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
    alert("・自分のコマを盤面の空いている場所に置くことができる。\n・自分のコマより小さいコマに被せて隠すことができる。\n・自分のコマに、さらに自分のコマを被せることもできる。\n・持ち駒のほか、既に盤面に置いた「見えている自分のコマ」を動かすこともできる。")
})

function changeBackgroundColor() {
    var colors = ["#FF5733", "#C70039", "#900C3F", "#581845"];
    var currentColor = 0;
    setInterval(function() {
      currentColor = (currentColor + 1) % colors.length;
      document.body.style.backgroundColor = colors[currentColor];
    }, 1000);
  }
  
