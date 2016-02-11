const defaultOptions = {
    realpath: true,
    ignore: [ 'node_modules/**', 'bower_components/**' ]
};

export default (glob, userOptions) => (/* input */) => {
    return function files(log) {
        const globby = require('globby');

        const options = {
            ...defaultOptions,
            ...userOptions
        };

        return globby(glob, options).then(result => {
            log(result);

            return result;
        });
    };
};
