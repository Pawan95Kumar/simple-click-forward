let a=document.getElementsByClassName("btn")[0];
// console.log(a);
a.addEventListener("click",()=>{
    window.history.forward();
})

let b=document.body;
// console.log(b)
let c=setInterval(()=>{
    const red=Math.floor(Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
    const rgb=`${red},${green},${blue}`;
    // console.log(rgb);
        b.style.backgroundColor=`rgb(${rgb})`

},1000);

let bt=document.getElementsByClassName("btn2")[0];
// console.log(b);
bt.addEventListener("click",()=>{
    clearInterval(c);
});
let bts=document.getElementsByClassName("btn1")[0];

bts.addEventListener("click",()=>{
    location.reload();
})