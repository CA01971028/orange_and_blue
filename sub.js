// 画像を表示する関数
function createImage() {
    // img要素を作成する
    var img = document.createElement('imge');
  
    // 画像ファイルを指定する
    img.src = 'orange.png';
  
    // スタイルを設定する
    img.style.position = 'absolute';
    img.style.transformOrigin = 'top left';
  
    // コンテナ要素に追加する
    var container = document.getElementById('la');
    container.appendChild(img);
  
    return img;
  }
  
  // 画像を動かす関数
  function moveImage(img, x, y, angle) {
    // 移動距離を計算する
    var dx = Math.cos(angle) * x;
    var dy = Math.sin(angle) * y;
  
    // 画像の位置を設定する
    img.style.left = x + 'px';
    img.style.top = y + 'px';
  
    // 回転角度を設定する
    img.style.transform = 'rotate(' + angle + 'rad)';
  
    // 画像を移動する
    x += dx;
    y += dy;
  
    // 画面外に出た場合は反対側から出現する
    var container = document.getElementById('la');
    if (x > container.offsetWidth) {
      x -= container.offsetWidth;
    }
    if (y > container.offsetHeight) {
      y -= container.offsetHeight;
    }
  
    // 一定時間後に再び動かす
    setTimeout(function() {
      moveImage(img, x, y, angle);
    }, 100);
  }
  
  // 画像を作成する
  var img1 = createImage();
  var img2 = createImage();
  var img3 = createImage();
  
  // 画像を初期位置に配置する
  img1.style.left = '0px';
  img1.style.top = '0px';
  img2.style.left = '100px';
  img2.style.top = '100px';
  img3.style.left = '200px';
  img3.style.top = '200px';
  
  // 画像を動かす
  moveImage(img1, 0, 0, Math.PI / 4);
  moveImage(img2, 100, 100, Math.PI / 3);
  moveImage(img3, 200, 200, Math.PI / 6);
  