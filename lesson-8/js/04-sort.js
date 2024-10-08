/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3, 10, 20];
// const sortedNumbers = numbers.toSorted();
// якщо ви не передаєте фукнцію порівняння в якості колбеку, то за замовчуванням сортування буде відбуватись за лексикографічним словником(Unicode)

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X'];
// const sortedLetters = letters.toSorted();

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
// const sortedNumbers = numbers.toSorted((currentEl, nextEl) => nextEl - currentEl); // сортування за спаданням

// const sortedNumbers = numbers.toSorted((currentEl, nextEl) => currentEl - nextEl); // сортування за зростанням

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X', 'Y', 'A'];
// const sortedLetters = letters.toSorted((currentEl, nextEl) => nextEl.localeCompare(currentEl)); // зворотній алфавітний порядок
// const sortedLetters = letters.toSorted((currentEl, nextEl) => currentEl.localeCompare(nextEl)); // алфавітний порядок

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('a'.localeCompare('a'));
// console.log('A'.localeCompare('a'));

/*
 * Сортування масиву об'єктів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

//? За ігровим часом
// const sortedByWorstPlayers = players.toSorted((a, b) => a.timePlayed - b.timePlayed);

// console.table(sortedByWorstPlayers);

//? За першою літерою імені
// const sortedByName = players.toSorted((a, b) => a.name[0].localeCompare(b.name[0]));

// console.table(sortedByName);
