
function pcho (){
    let x = Math.floor(Math.random()*4);

    if (x == 1){ 
        return "Rock";
    }
    else if (x == 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function mycho (){
    let cho = prompt ("choose");
    return cho;
}

function bum(mychoice, pcchoice){
    let a = mychoice;
    let b = pcchoice;
    return a + " " + "X" + " " + b;
}

