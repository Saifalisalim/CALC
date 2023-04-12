function displayData(n){
    result.value+=n
}

function Allclear(){
    result.value=""
}

function evalExprsn(){
    // n=result.value
    // out=eval(n)  eval is the function used to evaluate 
    // result.value=out
    // in short we can use the following sentance
    result.value=eval(result.value)
}

function backSpace(){
    s=result.value
    result.value=s.slice(0,-1)
}