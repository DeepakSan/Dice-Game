function random(min=1,max=6){
    return Math.floor(Math.random()*(max)+min);
}

function changedice(imgclass){
    const random1=random();
    document.querySelector("."+imgclass).setAttribute("src","images/dice"+random1+".png");
    return random1;

}

function changetitle(winnum){
    if(winnum==1){
        document.querySelector('h1').innerHTML='🚩Player 1 Wins!';
    }
    else if(winnum==2){
        document.querySelector('h1').innerHTML='Player 2 Wins!🚩';
    }
    else{
        document.querySelector('h1').innerHTML='🚩Draw!🚩';
    }
}
