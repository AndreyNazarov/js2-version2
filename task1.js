const logItems = function(array) {
  for (let i = 0; i < array.length; i++){
    let item = array[i];
    console.log(`${i +1} - ${item}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);