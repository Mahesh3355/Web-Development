let R = document.querySelector(".R");
let P = document.querySelector(".P");
let S = document.querySelector(".S");
let player = document.querySelector("#Player");
let computer = document.querySelector("#Computer");
let msgContainer=document.querySelector("section");
let msg=document.querySelector("#msg");
let computerChoice = Math.floor(Math.random() * 3);
let btn=document.querySelectorAll(".bnt");
let newbtn=document.querySelector("#New-Game");
let c=0;
R.addEventListener("click", () => {
    player.innerHTML = "<img src='../img/rock.png' alt='Rock'>";
    if (computerChoice == 0) {
        computer.innerHTML = "<img src='../img/rock.png' alt='Rock'>"
        msg.innerText="Draw";
    }
    else if (computerChoice == 1) {
        computer.innerHTML = "<img src='../img/paper.png' alt='Paper'>";
        msg.innerText="You Lost the game,try Agian!!";;
    }
    else {
        computer.innerHTML = "<img src='../img/scissors.png' alt='Scissors'>";
        msg.innerText="Congraulations,You Won the game!!";
    }
    msgContainer.classList.remove("hide");
    disale();
});
P.addEventListener("click", () => {
    player.innerHTML = "<img src='../img/paper.png' alt='Paper'>";
    if (computerChoice == 0) {
        computer.innerHTML = "<img src='../img/rock.png' alt='Rock'>"
        msg.innerText="Congraulations,You Won the game!!";
    }
    else if (computerChoice == 1) {
        computer.innerHTML = "<img src='../img/paper.png' alt='Paper'>";
        msg.innerText="Draw";
    }
    else {
        computer.innerHTML = "<img src='../img/scissors.png' alt='Scissors'>";
        msg.innerText="You Lost the game,try Agian!!";;
    }
    msgContainer.classList.remove("hide");
    disale();
});
S.addEventListener("click", () => {
    player.innerHTML = "<img src='../img/scissors.png' alt='Scissors'>";
    if (computerChoice == 0) {
        computer.innerHTML = "<img src='../img/rock.png' alt='Rock'>"
        msg.innerText="You Lost the game,try Agian!!";;
    }
    else if (computerChoice == 1) {
        computer.innerHTML = "<img src='../img/paper.png' alt='Paper'>";
        msg.innerText="Congraulations,You Won the game!!";
    }
    else {
        computer.innerHTML = "<img src='../img/scissors.png' alt='Scissors'>";
        msg.innerText="Draw";
    }
    msgContainer.classList.remove("hide");
    disale();
});

const disale=()=> { for(bt of btn)
        bt.disabled=true;
    }
const able=()=> { for(bt of btn)
        bt.disabled=false;
    }
newbtn.addEventListener("click",()=>{
    computer.innerHTML="";
    player.innerHTML="";
    msg.innerText="";
    msgContainer.classList.add("hide");
    computerChoice = Math.floor(Math.random() * 3);
    able();
})

