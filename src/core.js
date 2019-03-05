const cpdir = require('copy-dir');
const chalk = require('chalk');
const { spawn } = require('child_process');

module.exports = {
  init(directory) {
    let targetDir;

    if (typeof directory !== 'undefined') {
      targetDir = `${process.cwd()}/${directory}`;
    } else {
      targetDir = process.cwd();
    }

    this.build(targetDir);
  },

  build(targetDir) {
    const templateDir = `${__dirname}/templates/default`;

    cpdir(templateDir, targetDir, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.info(chalk.yellow('Installing dependencies...'));
        console.info(chalk.yellow('This may take some time...'));

        spawn(`cd ${targetDir} && yarn`, [], {
          shell: true,
          stdio: 'inherit',
        });
      }
    });
  },
};
