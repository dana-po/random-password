const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbol = true;

function generatePassword() {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!£$&*~#';

  let allowedChars = '';
  let password = '';

  allowedChars += includeLowerCase ? lowerCaseChars : '';
  allowedChars += includeUpperCase ? upperCaseChars : '';
  allowedChars += includeNumber ? numberChars : '';
  allowedChars += includeSymbol ? symbolChars : '';


  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

 const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.textContent = `${password}`;
 
}