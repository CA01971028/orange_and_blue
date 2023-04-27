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
                            var index = pl_1.indexOf(level);
                            pl_1.splice(index,1);
                        
                        switch(self.className){
                            case "cell 0-0":
                                if(level === "◎" && score[0,0] !=="◎" ){
                                    self.textContent = level;
                                }else if(level === "〇" && score[0,0] !== "〇" || "◎"){
                                    self.textContent = level;
                                }else if(level == "△" && score[0,0] == 0){
                                    self.textContent = level;
                                }
                                score[0,0] = level;
                            break;
                            case "cell 0-1":
                                score[0,1] = level;
                            break;
                            case "cell 0-2":
                                score[0,2] = level;
                            break;
                            case "cell 1-0":
                                score[1,0] = level;
                            break;
                            case "cell 1-1":
                                score[1,1] = level;
                            break;
                            case "cell 1-2":
                                score[1,2] = level;
                            break;
                            case "cell 2-0":
                                score[2,0] = level;
                            break;
                            case "cell 2-1":
                                score[2,1] = level;
                            break;
                            case "cell 2-2":
                                score[2,2] = level;
                            break;
                        }
                        count++
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