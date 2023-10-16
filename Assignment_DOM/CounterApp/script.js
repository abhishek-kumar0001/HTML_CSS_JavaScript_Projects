
let buttons = document.querySelectorAll('button');
let value = document.querySelector('.value');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',function(e){
        // console.log(e.target.innerHTML);
        if(e.target.id === "btn-reset"){
            reset();
        }
        else if(e.target.id === "btn-increase"){
            increase();
        }
        else{
            decrease();
        }
    })
    
})

function increase(){
    value.innerHTML = Number(value.innerHTML) + 1;
    // console.log(value.innerHTML);
}

function decrease(){
    value.innerHTML = Number(value.innerHTML) - 1;
    // console.log(value.innerHTML);
}

function reset(){
    value.innerHTML = 0;
    // console.log(value.innerHTML);
}