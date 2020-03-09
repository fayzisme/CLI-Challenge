const program = require('caporal');
const request = require('request');
const cheerio = require('cheerio');

program
.command('headlines')
.action((args, options, logger) => {
    let url = 'https://www.kompas.com/';
    request(url, (err, res, html)=>{
      if(!err){
        let $ = cheerio.load(html);
        for(let i =0 ; i<$('.headline__big__link').length;i++){
          logger.info('=============');
          logger.info(`Title : ${$('.headline__big__title')[i].children[0].data}`);
          logger.info(`Url: ${$('.headline__big__link')[i].attribs.href}`);
        }
        logger.info('=============');
      }
    })
  });

program.parse(process.argv);