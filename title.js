var button = document.getElementById("cl");
var te1 = document.querySelector('.ten1')
var te2 =document.querySelector('.ten2')
var te3 = document.querySelector('.ten3')
var bg = document.querySelector('.bg');
// ボタンのクリックイベントハンドラーを定義します
button.addEventListener("click", function() {
  bg.classList.toggle('active');
  button.classList.toggle('active');
  te1.classList.toggle('active');
  te2.classList.toggle('active');
  te3.classList.toggle('active');
});