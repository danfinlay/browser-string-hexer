# Browser String Hexer

Take a string, get it as hex-encoded UTF-8 back!

Equivalent to the node operation of `Buffer.from(YOUR_INPUT, 'utf8').toString('hex')`, but in the browser, in one function.

You could just copy-paste it, it's very simple, but I realized that I hadn't shared this in a reusable form, and had taken for granted that I had `Buffer` in a browserify context in the past.

Useful for performing [personal_sign](https://metamask.github.io/api-playground/api-documentation/#personal_sign) invocations in MetaMask.

## Installation

`npm install browser-string-hexer` or `yarn add browser-string-hexer`.

## Usage

```javascript
import hexer from 'browser-string-hexer';

const hex = hexer("hello");
// hex === '0x68656c6c6f'
```

