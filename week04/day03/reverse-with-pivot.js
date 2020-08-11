function reverseWithPivot(array){
    if(!Array.isArray(array) || ((array.length%2)==0)){ // input checking
        return null;
    }
    let pivot = ((array.length-1)/2);
    let first = array.slice(0, pivot).reverse();
    let second = array.slice(pivot+1).reverse();
    console.log(...first,array[pivot],...second);  
}
reverseWithPivot([1,2,3,4,5]);
