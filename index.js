const textarea=document.querySelector('#textarea');
const remaining=document.querySelector('#text-remaining');

let Math_total=250;

textarea.addEventListener('input',function(){
    const Totalvalue = Math_total - textarea.value.length;
    const color=   Totalvalue < Math_total  * .1 ? 'red':null;
    remaining.style.color = color;
    remaining.textContent=`${Totalvalue} end of charecter`;
    if(Totalvalue ===0){
        remaining.textContent= `${Totalvalue} end of charecter`;
    }
    console.log(Totalvalue);
})
remaining.addEventListener('input',function(){
    
})