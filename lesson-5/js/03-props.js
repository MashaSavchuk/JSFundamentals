/*
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = 'Mango';
const email = 'mango@mail.com';

const credentials = {
  // username: username,
  // email: email,
  username,
  email,
};

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

/* 
  <input type="text" name="color">
*/

const inputName = 'color';
const inputValue = 'rgb(255, 0, 255)';

const colorPickerData = {
  [inputName]: inputValue, // color: 'rgb(255, 0, 255)'
};

console.log(colorPickerData);
