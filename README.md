# start-files

[![npm](https://img.shields.io/npm/v/start-files.svg?style=flat-square)](https://www.npmjs.com/package/start-files)
[![travis](http://img.shields.io/travis/start-runner/files.svg?style=flat-square)](https://travis-ci.org/start-runner/files)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/files.svg?style=flat-square)](https://codecov.io/github/start-runner/files)
[![deps](https://img.shields.io/gemnasium/start-runner/files.svg?style=flat-square)](https://gemnasium.com/start-runner/files)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Files task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-files
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import eslint from 'start-eslint';

export function lint() {
    return start(reporter())(
        files('lib/**/*.js'),
        eslint()
    );
}
```

Task provides an array of found files, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`files(glob, options)`

* `glob` – [globby patterns](https://github.com/sindresorhus/globby#patterns)
* `options` – [node-glob options](https://github.com/isaacs/node-glob#options), `{ realpath: true, ignore: 'node_modules/**' }` by default
