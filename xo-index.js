let turn = 'x';
let title = document.querySelector('.title') 
let square =[]
function end(num1,num2,num3){
    document.getElementById('box'+num1).style.background='green';
    document.getElementById('box'+num2).style.background='green';
    document.getElementById('box'+num3).style.background='green';
    document.getElementById('rest').style.display='block';
}
function restart(){
    document.getElementById('box1').innerHTML="";
    document.getElementById('box2').innerHTML="";
    document.getElementById('box3').innerHTML="";
    document.getElementById('box4').innerHTML="";
    document.getElementById('box5').innerHTML="";
    document.getElementById('box6').innerHTML="";
    document.getElementById('box7').innerHTML="";
    document.getElementById('box8').innerHTML="";
    document.getElementById('box9').innerHTML="";
    document.getElementById('box1').style.background='#f25';
    document.getElementById('box2').style.background='#f25';
    document.getElementById('box3').style.background='#f25';
    document.getElementById('box4').style.background='#f25';
    document.getElementById('box5').style.background='#f25';
    document.getElementById('box6').style.background='#f25';
    document.getElementById('box7').style.background='#f25';
    document.getElementById('box8').style.background='#f25';
    document.getElementById('box9').style.background='#f25';
    document.getElementById('rest').style.display='none';
    title.innerHTML= 'XO Game';
}
function win(){
    for(let x=1 ;x<10;x++)
    {
        square[x] = document.getElementById('box'+x).innerHTML;
    }
    if(square[1]==square[2]&&square[2]==square[3]&&square[1]!=''){
        title.innerHTML=square[1]+' winner';
        end(1,2,3)
    
    }
    else if(square[4]==square[5]&&square[5]==square[6]&&square[4]!=''){
        title.innerHTML=square[4]+' winner';
        end(4,5,6)
    
    }
    else if(square[7]==square[8]&&square[8]==square[9]&&square[7]!=''){
        title.innerHTML=square[7]+' winner';
        end(7,8,9)
    }
    else if(square[1]==square[4]&&square[4]==square[7]&&square[1]!=''){
        title.innerHTML=square[1]+' winner';
        end(1,4,7)
    }
    else if(square[2]==square[5]&&square[5]==square[8]&&square[2]!=''){
        title.innerHTML=square[2]+' winner';
        end(2,5,8)
    }
    else if(square[3]==square[6]&&square[6]==square[9]&&square[3]!=''){
        title.innerHTML=square[3]+' winner';
        end(3,6,9)
    }
    else if(square[1]==square[5]&&square[5]==square[9]&&square[1]!=''){
        title.innerHTML=square[1]+' winner';
        end(1,5,9)
    }
    else if(square[7]==square[5]&&square[5]==square[3]&&square[7]!=''){
        title.innerHTML=square[7]+' winner';
        end(7,5,3)
    }
    else if(square[1]!=''&&square[2]!=''&&square[3]!=''&&square[4]!=''&&square[5]!=''&&square[6]!=''&&square[7]!=''&&square[8]!=''&&square[9]!=''){
        end(4,5,6)
        title.innerHTML='no winner'
    }
    

}
function game(id){
    let element = document.getElementById(id)
    if(turn ==='x' && element.innerHTML == ''){
        element.innerHTML='x';
        title.innerHTML='o'
        turn ='o'
    }
    else if(turn ==='o' && element.innerHTML == ''){
            element.innerHTML='o';
            title.innerHTML='x' 
            turn ='x'
    }
    win();
}
