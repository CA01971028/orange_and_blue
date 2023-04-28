window.addEventListener('DOMContentLoaded', () => {// ページ読込後に実行
    let board = document.getElementById("board");
    let xy = 3;
    //ラウンド数
    let count = 1;
    //プレイヤー設定
    let player = 1;
    //プレイヤーの持ち駒
    let pl_1 = ["△","△","〇","〇","◎","◎"];
    let pl_2 = ["△","△","〇","〇","◎","◎"];
    let p_1 = "";
    let p_2 = "";
    //スコアボードの定義
    let score = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    //選択された駒の定義
    let level;

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
 
                    if(e.key==="s"){
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
                        if(count % 2 == 0){
                            self.style.color ='red';
                        }else{
                            self.style.color = 'blue';
                        }
                            // var index = pl_1.indexOf(level);
                            // pl_1.splice(index,1);
                        
                    //駒が置けるか置けないかの判定
                     const judge = (le_val,sc_val=[],sel_val,index_1,index_2) =>{
                        if(le_val === "◎" && sc_val[index_1][index_2] !=="◎" ){
                            sel_val.textContent = le_val;
                            count++
                        }else if(le_val === "〇" && (sc_val[index_1][index_2] !== "〇" && sc_val[index_1][index_2] !== "◎")){
                            sel_val.textContent = le_val;
                            count++
                        }else if(le_val === "△" && sc_val[index_1][index_2] == 0){
                            sel_val.textContent =le_val;
                            count++
                        }
                        score[index_1][index_2] = level;
                     }

                        switch(self.className){
                            case "cell 0-0":
                            //持ち駒が置けるか置けないか
                            var index1 = 0;
                            var index2 = 0;
                            judge(level,score,self,index1,index2)
                            break;
                            case "cell 0-1":
                                var index1 = 1;
                                var index2 = 0;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 0-2":
                                var index1 = 2;
                                var index2 = 0;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 1-0":
                                var index1 = 0;
                                var index2 = 1;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 1-1":
                                var index1 = 1;
                                var index2 = 1;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 1-2":
                                var index1 = 2;
                                var index2 = 1;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 2-0":
                                var index1 = 0;
                                var index2 = 2;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 2-1":
                                var index1 = 1;
                                var index2 = 2;
                                judge(level,score,self,index1,index2)
                            break;
                            case "cell 2-2":
                                var index1 = 2;
                                var index2 = 2;
                                judge(level,score,self,index1,index2)
                            break;
                        }
                      
                        // alert(level)
                        
                        console.log(score)
                    },option);
        }
        board.appendChild(tr);
    }

    //持ち駒の表示
    pl_1.forEach(function(value) {
        p_1 += value;
    })
    pl_2.forEach(function(value) {
        p_2 += value;
    })
    player_1.textContent = p_1;
    player_2.textContent = p_2;
});