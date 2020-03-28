const test = require('ava');
const fn = require('.');

test('should be a function', (t) => {
  t.is(typeof fn, 'function');
});

test('should return Hello World', (t) => {
  t.is(fn(), 'Hello World!');
});
