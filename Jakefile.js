
var cp = require('child_process');

desc('Default - run tests');
task('default', ['test:run']);

namespace('test', function () {

  function spawn (cmd) {
    var cmdargs = cmd.split(' ');
    var child = cp.spawn(cmdargs.shift(), cmdargs);
    child.stdout.on('data', function (data) {
      console.log('' + data);
    });
    child.stderr.on('data', function (data) {
      console.error('' + data);
    });
    child.on('exit', function (code) {
      if (0 !== code) {
        console.log('child process exited with code ' + code);
      }
      complete();
    });
  }

  desc('run tests');
  task('run', [], function (cmdarg1, cmdarg2, cmdargN) {
    spawn('tap ./test');
  });

});


