let textat = document.getElementById('text')
let content;
function black(){
    textat.style.color='black';
    space.style.color='black';
}
function red(){
    textat.style.color='red';
    content.style.color='red';
}
function green(){
    textat.style.color='green';
    content.style.color='green';
}
function blue(){
    textat.style.color='blue';
    content.style.color='blue';
}
//function2
document.getElementById("sub").onclick = function lol(){
    let bar = document.querySelector('.sidebar')
    let text = document.getElementById('text').value
    let coll = document.createElement('h3')
    let res = document.createTextNode(text)
    content = document.createElement('header')
    coll.appendChild(res)
    content.style.background = 'rgb(255, 255, 136)';
    content.style.height = '100px'
    content.style.width = '93%'
    content.style.color = 'black'
    content.style.fontFamily='sans-serif'
    content.style.padding='2px'
    content.style.margin = '5px'
    content.style.marginLeft='10px'
    content.style.overflow='auto'
    content.appendChild(coll)
    bar.appendChild(content)
    return content;
}