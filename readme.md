# blogger-save-theme

[![Build Status](https://travis-ci.org/jlobos/blogger-save-theme.svg?branch=master)](https://travis-ci.org/jlobos/blogger-save-theme)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Save theme of [Google Blogger](https://www.blogger.com) from Node.js

## Install

```bash
npm install --save blogger-save-theme
```

## Usage

```js
const blogger = require('blogger-save-theme')

const theme = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html>
  <head>
    <title><data:blog.pageTitle/></title>
    <b:skin></b:skin>
  </head>

  <body>
    <b:section id='header' />
  </body>
</html>`

blogger({
  blogID: '4207593430912310415',
  theme,
  xGWTPermutation: 'code',
  xsrf: 'code',
  cookie: {
    HSID: 'value from Blogger cookie',
    SID: 'value from Blogger cookie',
    SSID: 'value from Blogger cookie'
  }
}).then(res => {
  const { error, result } = res
})
```

## API

### blogger([options])

#### options

Type: `Object`

##### blogID

Type: `string`

Id of the blogger. Get from url of you blog config (`https://www.blogger.com/blogger.g#welcome`)

##### theme

Type: `string`

The `xml` theme.

##### xGWTPermutation

Type: `string`

Value of security, get from `https://www.blogger.com/blogger.g?blogID=BLOGGER-ID#templatehtml` edit you theme code and in Chrome press F12 select Network tab and push "Save theme" button, the first request show `x-gwt-permutation` value in "Request Headers"

##### xsrf

Type: `string`

Value of security, get from `https://www.blogger.com/blogger.g?blogID=BLOGGER-ID#templatehtml` edit you theme code and in Chrome press F12 select Network tab and push "Save theme" button, the first request show `xsrf` value in "Request Payload"

##### cookie

Type: `Object`

`HSID`, `SID`, `SSID` values from Blogger cookies

## Related

- [gulp-blogger-save-theme](https://github.com/jlobos/gulp-blogger-save-theme) - gulp plugin
- [blogger-html-preview](https://github.com/jlobos/blogger-html-preview) - Get output code preview of Google Blogger
- [gulp-blogger-html-preview](https://github.com/jlobos/gulp-blogger-html-preview) - gulp plugin

## License

MIT © [Jesus Lobos](https://jlobos.com/)
