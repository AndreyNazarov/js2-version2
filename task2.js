const calculateEngravingPrice = function (message, pricePerWord) {
  let turnToArray = message.split(" ");
  console.log(turnToArray);
  let total = pricePerWord * turnToArray.length;
  console.log(total);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
 // 80

  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  ); // 160


  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40) // 240


  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20) // 120
