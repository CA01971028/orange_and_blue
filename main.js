window.addEventListener('DOMContentLoaded', () => {// ページ読込後に実行
    let board = document.getElementById("board");
    let xy = 3;
    let count = 0;

    for (let i = 0; i < xy; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < xy; j++) {
            let td = document.createElement("td");
            const option = { once: true }; 
            td.className = `cell ${j}-${i}`;
            tr.appendChild(td);
            
            td.addEventListener('click', (event) => {
                let self = event.target;
                // //クリックした時の〇か×かの判定
                // let pice = count++ % 2 == 0 ? "○" : "×";
                 //keyの取得
                document.addEventListener('keydown', e => {
                    let level;
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
                    self.textContent = level;
                });
                
                if (count == xy * xy) {
                    setTimeout(() => {
                        alert('終了しました。');
                    }, 300);
                }

            },option);
        }
        board.appendChild(tr);
    }

   

});