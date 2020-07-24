const findLongestWord = function (string) {
  const turnToArray = string.split(" ");
  let longestWord = turnToArray[0];
  for (let i = 0; i < turnToArray.length; i++) {
    if (turnToArray[i].length > longestWord.length) {
      longestWord = turnToArray[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
