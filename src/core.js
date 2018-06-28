
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

        // cpdir.sync(templateDir, targetDir);

        cpdir(templateDir, targetDir, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.info('Installing dependencies...');
                console.info('This may take some time...');

                getAsync(`cd ${targetDir} && yarn`).then(data => {
                    getAsync(`cd ${targetDir} && yarn run dev`).then(data => {
                        console.log('All Done! Go build something amazing!');
                    })
                }).catch(err => {
                    console.log(err);
                });
            }
        });

        // console.info('Installing dependencies...');
        // console.info('This may take some time...');

        // getAsync('npm install').then(data => {
        //     getAsync('./node_modules/.bin/tailwind init tailwind.js').then(data => {
        //         console.info('All done! Go build something amazing!');
        //     }).catch(err => {
        //         console.log(err);
        //     });
        //     console.log('NPM INSTALL WORKED!');
        // }).catch(err => {
        //     console.log('Oops... something went wrong with Yarn.');
        // });
    }
};