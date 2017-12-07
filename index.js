(function() {
  let fs = require('fs');
  let repl = require('repl');

  let { log, error, warn, info } = console; 
  let files;

  fs.readdir('./tasks', (err, fileList) => {
    files = fileList;
    if(err) error('Error while trying to read tasks dir ', err);
    info('Select task to launch: ( .opentask |task_number| )');
    for(let i = 0; i < fileList.length; i++) {
      log(`${fileList[i].slice(0, -3)}`);
    }
  })

  let replServer = repl.start({ prompt: '--: ' });

  replServer.defineCommand('opentask', {
    help: 'task number as param',
    action(number) {
      try {
        let taskModule = require(`./tasks/${files[number-1]}`);
        typeof taskModule === 'function' ? 
        (() => {
          console.time('taskTime')
          for(let count = 0; count < 1000000; count ++) {
            let b = taskModule();
            if(count === 0) console.log(`answer: ${b}`);
          }
          console.timeEnd('taskTime');
        })()
            : log(taskModule); 
      } catch (err) {
        error(err);
      }
    }
  })
})();
