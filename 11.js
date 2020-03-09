const program = require('caporal');
const screenshot = require('node-server-screenshot');
const fs = require('fs')

const formating = (toFormat, fromWeb) => {
    let fileUrl = fs.readFileSync(fromWeb,'utf8').split('\n');
    for(i of fileUrl){
        let format=`${i.replace(/^[https:/]+/i,'').replace(/[./]/g,'-')}.${toFormat}`;
        screenshot.fromURL(`${i}`, format, function(err) {
            if(err){
                return console.log(err);
            }
            console.log('Image Screenshot Succesfully');
        })
    }
}

program
 .command('screenshot-list')
 .argument('<file>','input file')
 .option('--format <amount>')
 .action((args, options) => {
     formating(options.format, args.file)
});

program.parse(process.argv);