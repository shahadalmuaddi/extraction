let numbers = [1 , 3 ,4 ,5 ];
let resault = numbers.filter(function(value){
return value >= 3;
});
let mixedArray = [1,"Welcome",2,3,"To",4,5,"JavaScript Course"];
let result2 = mixedArray.filter(function(value){
    return (typeof value)=='string';
});
console.log(resault);
console.log(result2);
