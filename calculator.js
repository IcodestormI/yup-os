let screan = document.querySelector('.calc');
function squarewty(id){
    
    screan.innerHTML+=Number((document.getElementById(id).innerHTML));
}
function del(){
    screan.innerHTML='';
}
function opr(id){
    screan.innerHTML+=(document.getElementById(id).innerHTML);
}
function equal(){
    screan.innerHTML=eval(screan.innerHTML);
}
function delet(){
    screan.innerHTML=screan.innerHTML.slice(0,-1);
}
    
    
