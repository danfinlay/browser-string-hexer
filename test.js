import test from 'ava';
import hexer from './index.js';

test('foo', t => {
  const output = hexer('hello');
  t.is(output, '0x68656c6c6f');
});

