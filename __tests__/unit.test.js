// unit.test.js
//npm install --save-dev jest

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhonenumber true test cases
test('should return true since valid phone number with area code without parentheses', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('should return true since valid phone number with area code in parentheses', () => {
  expect(isPhoneNumber('(123)-456-7890')).toBe(true);
});
//isPhonenumber false test cases
test('should return false since area code not in parenthesis', () => {
  expect(isPhoneNumber('123 456-7890')).toBe(false);
});
test('should return false since number of digits are in correct', () => {
  expect(isPhoneNumber('(123) 456-70')).toBe(false);
});

//isEmail true test cases
test('should return true since valid email address with numbers in local part', () => {
  expect(isEmail('helloworld123@example.com')).toBe(true);
});

test('should return true since valid email address with underline in local part', () => {
  expect(isEmail('hello_world@example.com')).toBe(true);
});
//isEmail false test cases
test('should return false since the username is missing', () => {
  expect(isEmail("@gamil.com")).toBe(false);
});
test('should return false since @ and the domain are missing', () => {
  expect(isEmail("hellohfbefhb.com")).toBe(false);
});
//isStrongPassword true test cases
test('Valid strong password with valid upper case beginning and numeric end', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
});
test('Valid strong password with valid lower case beginning and non numeric end', () => {
  expect(isStrongPassword('abababb')).toBe(true);
});

//isStrongPassword false test cases
test('should return false sinceit doesnt start with letter', () => {
  expect(isStrongPassword("123456789")).toBe(false);
});
test('should return false since it is too short', () => {
  expect(isStrongPassword("Ab1")).toBe(false);
});
//isDate true test cases
test('Valid date with single-digit month and day', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('Valid date with double-digit month and day', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

//isDate false test cases
test('should return false since it does not have month ', () => {
  expect(isDate("02/2004")).toBe(false);
});
test('should return false since its month numebr it too long ', () => {
  expect(isDate("001/02/2004")).toBe(false);
});
//isHexColor true test cases
test('Valid hex color with 6 characters', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});

test('Valid hex color without hash symbol', () => {
  expect(isHexColor('00e')).toBe(true);
});

//isHexColor false test cases
test('should return false since the hex cant satrt with Z', () => {
  expect(isHexColor("#ZF3")).toBe(false);
});
test('should return false since the hex is too long', () => {
  expect(isHexColor("#00FF3312313123123")).toBe(false);
});

