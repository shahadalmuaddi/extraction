let prices = [10,20,30,45,57]

let priceAfterTax = prices.map(function (value) {
    return (value * 0.15) + value
});
console.log(priceAfterTax);
