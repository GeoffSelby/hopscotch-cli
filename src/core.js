
const cpdir = require('copy-dir');
const { spawn } = require('child_process');

module.exports = {
    build(directory) {
        let templateDir = `${__dirname}/templates/default`;
        let targetDir;

        if (typeof directory !== 'undefined') {
            targetDir = process.cwd() + '/' + directory;
        } else {
            targetDir = process.cwd();
        }

        cpdir(templateDir, targetDir, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.info('Installing dependencies...');
                console.info('This may take some time...');

                spawn(`cd ${targetDir} && yarn && yarn run dev`, [], {
                    shell: true,
                    stdio: 'inherit'
                });
            }
        });
    }
};