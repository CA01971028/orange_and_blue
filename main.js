window.addEventListener('DOMContentLoaded', () => {// ページ読込後に実行
    let board = document.getElementById("board");
    let xy = 3;
    //ラウンド数
    let count = 0;
    //プレイヤー設定
    let player = 1;
    //プレイヤーの持ち駒
    let pl_1 = ["△","△","〇","〇","◎","◎"];
    let pl_2 = ["△","△","〇","〇","◎","◎"];
    let p_1 = "";
    let p_2 = "";
    //スコアボードの定義
    let score = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    //勝ち負けの判定
    let hoge =[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    //選択された駒の定義
    let level;

    //置き換えられる前の駒
    let af_00;
    let af_01;
    let af_02;
    let af_10;
    let af_11;
    let af_12;
    let af_20;
    let af_21;
    let af_22;
    let origin_val;

    //判定
    let ju =false;

//メインプログラム
    for (let i = 0; i < xy; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < xy; j++) {
            let td = document.createElement("td");
            // const option = { once: true }; 
            td.className = `cell ${j}-${i}`;
            tr.appendChild(td);
            
                 //keyの取得
                document.addEventListener('keydown', e => {
 
                    if(e.key==="s" ){
                        select.textContent = e.key;
                        level = "△"
                    }else if(e.key ==="m"){
                        select.textContent = e.key;
                        level = "〇"
                    }else if(e.key ==="l"){
                        select.textContent = e.key;
                        level = "◎"
                    }else{
                        select.textContent = "NONE"
                    }
                });
                
                    td.addEventListener('click', (event) => {
                        let self = event.target;
                        //赤と青の色の変化
                        if(count % 2 == 0){
                            self.style.color ='red';
                        }else{
                            self.style.color = 'blue';
                        }
                        
                     
                     //駒が置けるか置けないかの判定
                     const judge = (le_val,sc_val=[],sel_val,index_1,index_2) =>{
                        if(le_val === "◎" && sc_val[index_1][index_2] !=="◎"){
                            //◎が指定された場合駒が置けるかどうか
                            if(count % 2 == 0 && pl_1.includes("◎")){
                                hoge[index_1][index_2] = "r";
                                //駒を消した時の処理
                                if(score[index_1][index_2] != ""){
                                    origin_val = score[index_1][index_2];
                                }
                                sel_val.textContent = le_val;
                                ju = true;
                                score[index_1][index_2] = level;
                                count++
                            }else if(count % 2 == 1 && pl_2.includes("◎")){
                                hoge[index_1][index_2] = "b";
                                //駒を消した時の処理
                                if(score[index_1][index_2] != ""){
                                    origin_val = score[index_1][index_2];
                                }
                                sel_val.textContent = le_val;
                                ju = true;
                                score[index_1][index_2] = level;
                                count++
                            }else{
                                alert("駒がありません")
                            }
                            
                        }else if(le_val === "〇" && (sc_val[index_1][index_2] !== "〇" && sc_val[index_1][index_2] !== "◎")){
                            //〇が指定された場合駒が置けるかどうか
                            if(count % 2 == 0 && pl_1.includes("〇")){
                                hoge[index_1][index_2] = "r";
                                if(score[index_1][index_2] != ""){
                                    origin_val = score[index_1][index_2];
                                }
                                sel_val.textContent = le_val;
                                ju = true;
                                score[index_1][index_2] = level;
                                count++
                            }else if(count % 2 == 1 && pl_2.includes("〇")){
                                hoge[index_1][index_2] = "b";
                                if(score[index_1][index_2] != ""){
                                    origin_val = score[index_1][index_2];
                                }
                                sel_val.textContent = le_val;
                                ju = true;
                                score[index_1][index_2] = level;
                                count++
                            }else{
                                alert("駒がありません")
                            }
                        }else if(le_val === "△" && sc_val[index_1][index_2] == 0 && sc_val[index_1][index_2] != "△"){
                            //△が指定された場合、駒が置けるかどうか
                            if(count % 2 == 0 && pl_1.includes("△")){
                                hoge[index_1][index_2] = "r";
                                if(score[index_1][index_2] != ""){
                                    origin_val = score[index_1][index_2];
                                }
                                sel_val.textContent = le_val;
                                ju = true;
                                score[index_1][index_2] = level;
                                count++
                            }else if(count % 2 == 1 && pl_2.includes("△")){
                                hoge[index_1][index_2] = "b";
                                if(score[index_1][index_2] != ""){
                                    origin_val = score[index_1][index_2];
                                }
                                sel_val.textContent = le_val;
                                ju = true;
                                score[index_1][index_2] = level;
                                count++
                            }else{
                                alert("駒がありません")
                            }
                        }
                        
                     }
                     const right_click=(index__1,index__2)=>{
                            if(count % 2 == 0 ){
                                var va1 = score[index__1][index__2];
                                pl_1.push(va1);
                            }else if(count % 2 == 1){
                                var va2 = score[index__1][index__2];
                                pl_2.push(va2);
                            }
                        }
                     //右クリックの動作の導入
                     td.addEventListener('contextmenu',function(){
                        switch(self.className){
                            case "cell 0-0":
                            var index__1 = 0;
                            var index__2 = 0;
                            right_click(index__1,index__2)
                            self.textContent= af_00;
                            console.log(score)
                            break;
                            case "cell 0-1":
                            var index__1 = 1;
                            var index__2 = 0;
                            right_click(index__1,index__2);
                            self.textContent= af_10;
                            break;
                            case "cell 0-2":
                            var index__1 = 2;
                            var index__2 = 0;
                            right_click(index__1,index__2);
                            self.textContent= af_20;
                            break;
                            case "cell 1-0":
                            var index__1 = 0;
                            var index__2 = 1;
                            right_click(index__1,index__2);
                            self.textContent= af_01;
                            break;
                            case "cell 1-1":
                            var index__1 = 1;
                            var index__2 = 1;
                            right_click(index__1,index__2);
                            self.textContent= af_11;
                            break;
                            case "cell 1-2":
                            var index__1 = 2;
                            var index__2 = 1;
                            right_click(index__1,index__2);
                            self.textContent= af_21;
                            break;
                            case "cell 2-0":
                            var index__1 = 0;
                            var index__2 = 2;
                            right_click(index__1,index__2);
                            self.textContent= af_02;
                            break;
                            case "cell 2-1":
                            var index__1 = 1;
                            var index__2 = 2;
                            right_click(index__1,index__2);
                            self.textContent= af_12;
                            break;
                            case "cell 2-2":
                            var index__1 = 2;
                            var index__2 = 2;
                            right_click(index__1,index__2);
                            self.textContent= af_22;
                            break;
                        }
                        // for(let i = 0;i < 3;i++){
                        //     for(let f = 0;f < 3;f++){
                        //         self.textContent = score[i][f]
                        //     }
                        // }
                     })

                        switch(self.className){
                            case "cell 0-0":
                            //持ち駒が置けるか置けないか
                            var index1 = 0;
                            var index2 = 0;
                            judge(level,score,self,index1,index2)
                            if(ju){
                                af_00 = origin_val;
                            }
                            ju = false;
                            break;
                            case "cell 0-1":
                                var index1 = 1;
                                var index2 = 0;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_10 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 0-2":
                                var index1 = 2;
                                var index2 = 0;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_20 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 1-0":
                                var index1 = 0;
                                var index2 = 1;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_01 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 1-1":
                                var index1 = 1;
                                var index2 = 1;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_11 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 1-2":
                                var index1 = 2;
                                var index2 = 1;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_21 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 2-0":
                                var index1 = 0;
                                var index2 = 2;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_02 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 2-1":
                                var index1 = 1;
                                var index2 = 2;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_12 = origin_val;
                                }
                                ju = false;
                            break;
                            case "cell 2-2":
                                var index1 = 2;
                                var index2 = 2;
                                judge(level,score,self,index1,index2)
                                if(ju){
                                    af_22 = origin_val;
                                }
                                ju = false;
                            break;
                        }
                        
                           //オレンジか青かのターン
                           let turn_text = document.querySelector("#turn");
                           if(count % 2 == 0){
                               turn.textContent ="オレンジのターン";
                               turn_text.style.color = "red";
                           }else{
                               turn.textContent ="青のターン";
                               turn_text.style.color = "blue";
                           }
                        //手持ちの駒を消す
                        //プレイヤー1（赤の持ち駒）
                        if(count % 2 == 1){
                            var index = pl_1.indexOf(level);
                            if(index != -1){
                                pl_1.splice(index,1);
                                p_1 = "";
                                pl_1.forEach(function(value) {
                                    p_1 += value;
                                })
                                player_1.textContent = p_1;
                            }
                        //プレイヤー２（青の持ち駒）
                        }else{
                            var index = pl_2.indexOf(level);
                            if(index != -1){
                                pl_2.splice(index,1);
                            p_2 = "";
                            pl_2.forEach(function(value) {
                                p_2 += value;
                            })
                            player_2.textContent = p_2;
                            }
                            
                        }
                        if(pl_1.length == 0 && pl_2.length == 0){
                            alert("お互いの駒がなくなりました")
                        }
                        
                        // //勝ち負けの判定(オレンジ)
                        // if(hoge[0][0] == "r" && hoge[0][1] == "r" && hoge[0][2] == "r"){
                        //     alert("オレンジの勝ち")
                        // }else if(hoge[1][0] == "r" && hoge[1][1] == "r" && hoge[1][2] == "r"){
                        //     alert("オレンジの勝ち")
                        // }else if(hoge[2][0] == "r" && hoge[2][1] == "r" && hoge[2][2] == "r"){
                        //     alert("オレンジの勝ち")
                        // }else if(hoge[0][0] == "r" && hoge[1][0] == "r" && hoge[2][0] == "r"){
                        //     alert("オレンジの勝ち")
                        // }else if(hoge[0][1] == "r" && hoge[1][1] == "r" && hoge[2][1] == "r"){
                        //     alert("オレンジの勝ち")
                        // }else if(hoge[0][2] == "r" && hoge[1][2] == "r" && hoge[2][2] == "r"){
                        //     alert("オレンジの勝ち")
                        // }else if(hoge[0][0] == "r" && hoge[1][1] == "r" && hoge[2][2] == "r"){
                        //     alert("オレンジの勝ち")
                        // }
                        // //勝ち負けの判定(青)
                        // if(hoge[0][0] == "b" && hoge[0][1] == "b" && hoge[0][2] == "b"){
                        //     alert("青の勝ち")
                        // }else if(hoge[1][0] == "b" && hoge[1][1] == "b" && hoge[1][2] == "b"){
                        //     alert("青の勝ち")
                        // }else if(hoge[2][0] == "b" && hoge[2][1] == "b" && hoge[2][2] == "b"){
                        //     alert("青の勝ち")
                        // }else if(hoge[0][0] == "b" && hoge[1][0] == "b" && hoge[2][0] == "b"){
                        //     alert("青の勝ち")
                        // }else if(hoge[0][1] == "b" && hoge[1][1] == "b" && hoge[2][1] == "b"){
                        //     alert("青の勝ち")
                        // }else if(hoge[0][2] == "b" && hoge[1][2] == "b" && hoge[2][2] == "b"){
                        //     alert("青の勝ち")
                        // }else if(hoge[0][0] == "b" && hoge[1][1] == "b" && hoge[2][2] == "b"){
                        //     alert("青の勝ち")
                        // }
                        
                        // console.log(hoge)

                                            // alert(level)
                                            
                                            // console.log(score)
                    },option);


        }
        board.appendChild(tr);
    }

    //背景画像の挿入
    var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
};
window.addEventListener('resize', resize);
resize();

var elements = [];
var presets = {};

presets.o = function (x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 12 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            
            ctx.beginPath();
            ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }
    }
};

presets.x = function (x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
        x: x,
        y: y,
        s: 20 * s,
        w: 5 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;
            
            var _this = this;
            var line = function(x, y, tx, ty, c, o) {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                ctx.lineWidth = _this.w;
                ctx.strokeStyle = c;
                ctx.stroke();
            };
            
            ctx.save();
            
            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
            ctx.rotate(this.r * Math.PI / 180);
            
            line(-1, -1, 1, 1, '#fff');
            line(1, -1, -1, 1, '#fff');
            
            ctx.restore();
        }
    }
};

for(var x = 0; x < Canvas.width; x++) {
    for(var y = 0; y < Canvas.height; y++) {
        if(Math.round(Math.random() * 8000) == 1) {
            var s = ((Math.random() * 5) + 1) / 10;
            if(Math.round(Math.random()) == 1)
                elements.push(presets.o(x, y, s, 0, 0));
            else
                elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
        }
    }
}

setInterval(function() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    var time = new Date().getTime();
    for (var e in elements)
    elements[e].draw(ctx, time);
}, 10);
});
