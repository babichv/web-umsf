let priceApple = 12.50;
let discount = +prompt('Введіть відсоток скидки:', '5');
let discountAmount = priceApple - (Math.floor((priceApple / 100 * discount) * 100) / 100);
let finalPrice = !isNaN(discount)? console.log( `Яблоки українські. \n ціна: ${ discountAmount}.`): console.log('Будь ласка – введіть знижку у числовому форматі!');