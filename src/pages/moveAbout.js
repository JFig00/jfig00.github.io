

let move=document.querySelector('.aboutMe');
let x=1;
let y=1;

function init(){
    move.style.position='absolute';
    setInterval(frame, 5);
}

function collision(){
    let h=move.offsetHeight;
    let w=move.offsetWidth;
    let l=move.offsetLeft;
    let t=move.offsetTop;
    let winHeight=window.innerHeight;
    let winWidth=window.innerWidth;

    if (l<=0 || l+w>=winWidth){
        x=~x+1;
    }
    if (t<=0 || t+h>=winHeight){
        y=~y+1;
    }
}

function frame(){
    collision();
    move.style.top=move.offsetTop+y;
    move.style.left=move.offsetLeft+x;
}

init();