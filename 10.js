const program = require('caporal');
const screenshot = require('node-server-screenshot');
const fs = require('fs')

const formating = (toFormat, fromWeb) => {
    let url = fromWeb; //ambil url web
    let format=''; //nama dan format image

      //looping untuk mengganti nama yang sudah ada
      for(let i=1 ;i<=Infinity ;i++){
      format = `screenshot-${i}.${toFormat}`;
      try {
        if (fs.existsSync(format)) {
          format = `screenshot-${i+1}.${toFormat}`;
        }
        else{
          break;
        }
      } catch(err) {
        console.error(err)
      }
    }
    
    screenshot.fromURL(url, format, function(err) {
        if(err){
            return console.log(err);
          }
          console.log('Image Screenshot Succesfully');
    });
}

program
 .command('screenshot')
 .argument('<web>','input text',program.STRING)
 .option('--format <amount>')
 .option('--output <mount>')
 .action((args, options) => {
     if(options.output !== undefined){
        formating(options.output, args.web)
     }
     else {
        formating(options.format, args.web)
     }

});

program.parse(process.argv);


