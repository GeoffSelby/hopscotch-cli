
const fs = require('fs');
const cpdir = require('copy-dir');
const Promise = require('bluebird');
const cmd = require('node-cmd');

const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })

module.exports = {
    build(directory) {
        let templateDir = `${__dirname}/templates/default`;
        let targetDir;

        if (typeof directory !== 'undefined') {
            targetDir = process.cwd() + '/' + directory;
        } else {
            targetDir = process.cwd();
        }

        cpdir.sync(templateDir, targetDir);

        console.info('Installing dependencies...');
        console.info('This may take some time...');

        getAsync('yarn').then(data => {
            console.info('All done! Go build something amazing!');
        }).catch(err => {
            console.log('Oops... something went wrong with Yarn.');
        });
    }
};