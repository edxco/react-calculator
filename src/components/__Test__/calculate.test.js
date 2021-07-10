import Calculate from '../../../src/logic/calculate';
import Operate from '../../../src/logic/operate';

jest.mock('../../logic/operate.js');

beforeEach(() => {
  Operate.mockClear();
});

let testObj;
let result;

test('If Operate is been called when passing =', () => {
  testObj = { total: '1', next: '2', operator: '+' };
  Calculate(testObj, '=');
  expect(Operate).toBeCalled();
});

test('total will be the result of multiplication', () => {
  Operate.mockReturnValue('200');
  testObj = { total: '20', next: '10', operator: 'X' };
  expect(Calculate(testObj, '=').total).toBe('200');
});

test('total change from positive to negative value', () => {
  testObj = { total: '1', next: null, operator: null };
  expect(Calculate(testObj, '+/-').total).toBe('-1');
});

test('next will not change to a negative value', () => {
  testObj = { total: '1', next: null, operator: null };
  expect(Calculate(testObj, '+/-').next).not.toBe('-1');
});

test('next change from positive to negative value', () => {
  testObj = { total: null, next: '1', operator: null };
  expect(Calculate(testObj, '+/-').next).toBe('-1');
});

test('total will not change to a negative value', () => {
  testObj = { total: '', next: '1', operator: '+' };
  expect(Calculate(testObj, '+/-').total).not.toBe('-1');
});