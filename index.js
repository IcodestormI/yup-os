let box = document.querySelector('.login-box');
 function slider(id){
    let locks= document.getElementById(id);
    locks.style.marginLeft= '230px';
    setTimeout(function(){locks.style.display='none';box.style.display='block'},1000);
}
function submit(){
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;
    if(username =='fero'&&password=='f12009'){
        document.body.style.backgroundImage='url("wallpapers/image12.jpg")';
        box.style.display='none'
        document.getElementById('home').style.display='block';
        document.querySelector('.sor').style.display='none';
        document.querySelector('.sorr').style.display='none';
        document.querySelector('.nav-bar').style.display='block';
    }
    else{
        document.getElementById('span').style.display='block';
    }
}
function quit(){
    document.querySelector('.container1').style.display='none';
    document.querySelector('.container2').style.display='none';
    document.querySelector('.container3').style.display='none';
    document.querySelector('.container4').style.display='none';
    document.querySelector('.container5').style.display='none';
    document.querySelector('.container6').style.display='none';
    document.querySelector('.container7').style.display='none';
    document.getElementById('quit').style.display='none';
}
function openbrowser(){
    document.querySelector('.container1').style.display='block';
    document.getElementById('quit').style.display='block';
}
function google(){
    document.querySelector('.container2').style.display='block';
    document.getElementById('quit').style.display='block';
}
function opennote(){
    document.querySelector('.container3').style.display='block';
    document.getElementById('quit').style.display='block';
}
function quitgames(){
    document.querySelector('.xo-screan').style.display='none';
    document.querySelector('.flappy-screan').style.display='none';
}
function openxo(){
    document.querySelector('.xo-screan').style.display='block';
    document.querySelector('.container4').style.display='none';
    document.getElementById('quit').style.display='none';
}
function openflappy(){
    document.querySelector('.flappy-screan').style.display='block';
    document.querySelector('.container4').style.display='none';
    document.getElementById('quit').style.display='none';
}
function opengameplayer(){
    document.querySelector('.container4').style.display='block';
    document.getElementById('quit').style.display='block';
}
function openimage(src){
    document.getElementById('imagati').src=src;
}
function opengallery(){
    document.querySelector('.container5').style.display='block';
    document.getElementById('quit').style.display='block';
}
function whishlist1(id){
    document.getElementById('hearting1').style.color='magenta';
}
function whishlist2(id){
    document.getElementById('hearting2').style.color='magenta';
}
function whishlist3(id){
    document.getElementById('hearting3').style.color='magenta';
}
function whishlist4(id){
    document.getElementById('hearting4').style.color='magenta';
}
function whishlist5(id){
    document.getElementById('hearting5').style.color='magenta';
}
function whishlist6(id){
    document.getElementById('hearting6').style.color='magenta';
}
function whishlist7(id){
    document.getElementById('hearting7').style.color='magenta';
}
function whishlist8(id){
    document.getElementById('hearting8').style.color='magenta';
}
function whishlist9(id){
    document.getElementById('hearting9').style.color='magenta';
}
function whishlist10(id){
    document.getElementById('hearting10').style.color='magenta';
}
function unholy(){
    document.querySelector('.audio').src='songs/unholy.mp3';
}
function lalala(){
    document.querySelector('.audio').src='songs/lalala.mp3';
}
function night(){
    document.querySelector('.audio').src='songs/living life in the night.mp3';
}
function ola(){
    document.querySelector('.audio').src='songs/Sofia-Reyes-1-2-3.mp3';
}
function ordinary(){
    document.querySelector('.audio').src='songs/my ordinary life.mp3';
}
function shape(){
    document.querySelector('.audio').src='songs/shape-of-you.mp3';
}
function thunder(){
    document.querySelector('.audio').src='songs/thunder.mp3';
}
function slowly(){
    document.querySelector('.audio').src='songs/let me down slowly.mp3';
}
function money(){
    document.querySelector('.audio').src='songs/money rain.mp3';
}
function tokyo(){
    document.querySelector('.audio').src='songs/tokyo drift.mp3';
}
function openmusic(){
    document.querySelector('.container6').style.display='block';
    document.getElementById('quit').style.display='block';
}
function opencalc(){
    document.querySelector('.container7').style.display='block';
    document.getElementById('quit').style.display='block';
}