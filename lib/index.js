export default (glob) => (/* input */) => {
    return function files(log) {
        const globby = require('globby');

        return globby(glob, { realpath: true }).then(result => {
            log(result);

            return result;
        });
    };
};
