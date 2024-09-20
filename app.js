let gameSqu =[];
let userSqu=[];
let btn=["red","yellow","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    
    if(started==false){
        started=true;
        levelUp();
    }
});

function gameFlash(randBtn){
    randBtn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },250);
}

function userFlash(randBtn){
    randBtn.classList.add("userflash");
    setTimeout(function(){
        randBtn.classList.remove("userflash");
    },250);
}



function levelUp(){
    userSqu=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomNum=Math.floor(Math.random()*4);
    let randomCol=btn[randomNum];
    let randBtn=document.querySelector(`.${randomCol}`);
    gameSqu.push(randomCol);
    console.log(gameSqu);
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSqu[idx]==gameSqu[idx]){
        if(userSqu.length==gameSqu.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level-1}</b><br>Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    console.log(btn);
    userCol=btn.getAttribute("id");
    userSqu.push(userCol);
    checkAns(userSqu.length-1);

}

let allBtns= document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSqu=[];
    userSqu=[];
    level=0;
}





