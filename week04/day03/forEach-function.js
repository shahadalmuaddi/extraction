let numbers = [1,2,3,4,5]
numbers.forEach(function(value, index, arr){
arr[index] = value * 2

});
console.log(numbers);
