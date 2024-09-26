let allimg=document.querySelectorAll('.imagecontainer img');
console.log(allimg);

let userChoice=0;
let compChoice=0;

function compChoicefunc(){
    let options=['rock','paper','scissor'];

    let num=Math.floor(Math.random()*3);
    console.log(num);
     compChoice=options[num];
     console.log(compChoice);
    return compChoice;
    

}

function gamefunc(userChoice){
     compChoice=compChoicefunc();
     alert(`user selected ${userChoice} and comp selected ${compChoice}`);

     


}

allimg.forEach((item)=>{
    item.addEventListener('click',function (){
        userChoice=item.id;
        console.log(userChoice);
        gamefunc(userChoice);
    })
    
})