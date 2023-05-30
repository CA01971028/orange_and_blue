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

// ボタン要素を取得します
var button = document.getElementById('myButton');

// テキスト要素を取得します
var text = document.getElementById('myText');

// ボタンがクリックされた時の処理を定義します
button.addEventListener('click', function() {
  // テキストの表示状態を切り替えます
  if (text.style.display === 'none') {
    text.style.display = 'block'; // テキストを表示します
  } else {
    text.style.display = 'none'; // テキストを非表示にします
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // 2秒後にロード画面を非表示にする
  setTimeout(function() {
    var loadingScreen = document.getElementById("loading-container");
    loadingScreen.style.display = "none";
  }, 1000);
});