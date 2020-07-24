const checkForSpam = function (message) {
  const formateText = message.toLowerCase();
  console.log(formateText);
  return formateText.includes('sale') || formateText.includes('spam')

  // const prohibitedWords = "sale" || "spam";

  // return message.includes(prohibitedWords);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
