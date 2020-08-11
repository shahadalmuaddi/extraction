function mayBeExecuted(a, b){
    if(b == 5){
        throw new Error("b must not be 5");
    }
    return a + b;
}
let a=1;
let b=5;

try{
    let r = mayBeExecuted(a, b);
    console.log(r);
}catch(e) {
    console.log(e.message);
    b = b-1;
    let r = mayBeExecuted(a, b);
    console.log(r);
}
