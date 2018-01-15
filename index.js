const execfunc = require("child_process").exec;

const COMMAND = "bash ./xxxx.sh";
const intervalTime = 10000 //(ms)

setInterval(function() {

    execfunc(COMMAND, function(error, stdout, stderr) {
        // シェル上でコマンドを実行できなかった場合のエラー処理
        if (error !== null) {
          console.log('exec error: ' + error);
          return;
        }

        if (stderr !== null) {
            console.log('stderr: ' + stderr);
            return;
          }
      
        // シェル上で実行したコマンドの標準出力が stdout に格納されている
        console.log('stdout: ' + stdout);
    });

}, intervalTime);