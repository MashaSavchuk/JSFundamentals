/*
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

// масиви - це складні дані (структури даних), на відміну від примітивів вони зберігаються не за значенням, а за посиланням на комірку памʼяті

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b, значення змінної a.
? Виведіть до консолі обидві ці змінні.
? Змініть значення змінної a і ще раз виведіть у консоль.
*/

let a = 10;
let b = a;

console.log('a:', a);
console.log('b:', b);

a = 15;

console.log('a:', a);
console.log('b:', b);
/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть змінній arr2, значення змінної arr1.
? Виведіть до консолі обидва цих масива.
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль.
*/

console.log('=========');

const arr1 = [1, 2, 3];
// const arr2 = arr1; // це не копія масиву!!!! фактично ви зберігаєте в константу arr2 посилання на тей самий масив, який зберігається в константі arr1

const arr2 = Array.from(arr1); // це один з варіантів правильного копіювання значеннь масиву (ще варіанти slice, spread ([...arr]), for зі створенням нового масиву вручну, будь-який метод для масивів, який повертає новий масив (наприклад, метод map))

console.log('arr1:', arr1);
console.log('arr2:', arr2);

arr1[0] = 111;
arr2[1] = 222;

console.log('arr1:', arr1);
console.log('arr2:', arr2);
