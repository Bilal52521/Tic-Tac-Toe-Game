let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-game");

let tureX = true;

let winingPatterns =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((item)=>{
    item.addEventListener("click" , ()=>{
        if(tureX){
            item.innerText = "X";
            tureX = false;
        }else{
            item.innerText = "O";
            tureX = true;
        }
        item.disabled = true;

        checkedwinner();
    });
});






const gameReset = () =>{
    tureX = true;
    enabledBox();
    msgContainer.classList.add("hide");
};


const disabledBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enabledBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const winnershow = (winner) =>{
    msg.innerText = `Congratulation, Winnner is " ${winner} "`;
    msgContainer.classList.remove("hide");
    disabledBox();
}


const checkedwinner = ()=>{
    for(Pattern of winingPatterns){
        let value1 = boxes[Pattern[0]].innerText;
        let value2 = boxes[Pattern[1]].innerText;
        let value3 = boxes[Pattern[2]].innerText;

        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 === value2 && value2 === value3){
                winnershow(value1);
                // console.log("winner is", value1)
            }
        }
    }
};



resetBTN.addEventListener("click", ()=>{
    gameReset();
});

newGame.addEventListener("click", gameReset);
// resetBTN.addEventListener("click", gameReset);