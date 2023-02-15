let player;
let computer;
function randNumber(){
    let number= Math.floor(Math.random()*3)+1;
    if(number===1){
        return 'r';
    }
    else if(number==2)
    {
        return 's';
    }
    else{
        return 'p';
    }
}
let flag=0;
function result(player,computer)
{
    if(player===computer)
    {
       flag=0;
    }
    else if((player==='r'&&computer==='s')||(player==='p'&&computer==='r')||(player==='s'&&computer==='p'))
    {
        flag=1;
    }
    else {
        flag=-1;
    }

    if(flag===0)
    {
        document.querySelector('.result').innerHTML=`DRAW`;
    }
    else if(flag===1)
    {
        document.querySelector('.result').innerHTML=`YOU WON`;
    }
    else{
        document.querySelector('.result').innerHTML=`YOU LOSE`;
    }
}



let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    player=e.target.value;
    computer=randNumber();
    document.querySelector('.playerDisplay').innerHTML=e.target.innerHTML;
    if(computer==='r')
    {
        document.querySelector('.computerDisplay').innerHTML=`Rock`;
    }
    else if(computer==='p')
    {
        document.querySelector('.computerDisplay').innerHTML=`Paper`;
    }
    else{
        document.querySelector('.computerDisplay').innerHTML=`Scissor`;
    }
    result(player,computer);
  })
})