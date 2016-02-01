[![npm](https://img.shields.io/npm/v/start-files.svg?style=flat-square)](https://www.npmjs.com/package/start-files)
[![travis](http://img.shields.io/travis/start-runner/files.svg?style=flat-square)](https://travis-ci.org/start-runner/files)
[![deps](https://img.shields.io/gemnasium/start-runner/files.svg?style=flat-square)](https://gemnasium.com/start-runner/files)

Files task for [Start](https://github.com/start-runner/start) which provides an array of found files.

## Install

```
npm i -S start-files
```

## Usage

```js
// tasks/index.js
import start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import eslint from 'start-eslint';

export function lint() {
    return start(logger)(
        files('lib/**/*.js'),
        eslint()
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "lint": "npm run task lint"
}
```

## Arguments

`files(glob)`

* `glob` – [globby patterns](https://github.com/sindresorhus/globby#patterns)
