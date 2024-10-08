/*
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// ... - spread (роспилити, розбити) || rest (остача, залишок)
// поведінка оператору визначається тим, як він використовується та де він викликається
// spread - розбиває масив або обʼєкт на окремі значення (з правої сторони від дорівнює)
// rest - збирає окремі значення в масив або обʼєкт (з лівої сторони від дорівнює)

// const numbers = [23, 4, 5];

// console.log(...numbers);
// param = arg

/*
? Пошук найменшої або найбільшої температури (числа)
*/
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

// console.log('temps: ', temps);
// console.log('minTemp: ', minTemp);
// console.log('maxTemp: ', maxTemp);

/*
? Створення копії масиву примітивів
*/
// const values = [23, 34, 4, 5];
// const valuesCopy = [...values];

// valuesCopy.push(10);

// console.log('values:', values);
// console.log('valuesCopy:', valuesCopy);

/*
? Створення копії масиву із складними типами даних
*/

// const users = [
//   { firstName: 'Lucy' },
//   { firstName: 'Ollie' },
//   { firstName: 'Lily' },
// ];
// const usersCopy = _.cloneDeep(users);

// usersCopy[0].firstName = 'Andre';

// console.log('users:', users);
// console.log('usersCopy:', usersCopy);

/*
? Поєднуємо декілько масивів в один через spread
*/

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, 100, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

/*
? Створення копії об'єкта
*/
const obj = { x: 1, y: 2 };
const objCopy = { ...obj };

objCopy.x = 10;

// console.log('obj: ', obj);
// console.log('objCopy: ', objCopy);

/*
? Поєднуємо декілько обʼєктів в один через spread
*/
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {
  ...objA,
  ...objB,
};

// console.log('objA: ', objA);
// console.log('objB: ', objB);
// console.log('objC: ', objC);

/*
? Оновлюємо налаштування користувача
*/
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  theme: 'dark',
  showNotifications: false,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log('defaultSettings:', defaultSettings);
// console.log('userSettings:', userSettings);
// console.log('finalSettings:', finalSettings);

//? Напишіть функцію sum, яка складає довільну кількість аргументів
function sum(...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

// ...args = 1, 2, 3, 4, 5 -> [1, 2, 3, 4, 5]

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 40, 60));
console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
