function firstMethod(number1,number2,...others){ // ... comes here with Rest meaning 
    console.log(number1,number2 , others);// output ->  1 2 [ 3, 4, 5, 6, 7 ]
}

firstMethod(1,2,3,4,5,6,7);

function secondMethod(number1,number2,...others){ // ... comes here with Rest meaning 
    console.log(number1,number2 , ...others);// output ->  1 2 3 4 5 6 7 becouse we used spread operator
}

secondMethod(1,2,3,4,5,6,7);
