#!/usr/bin/env node
const prog = require('caporal');

prog
    .version('1.0.0')
    .description('CLI Challenge')
    .command('random')
    .option('--length <amount>', 'Length offer')
    .option('--number <numb>', 'Number offer')
    .option('--uppercase <text>')
    .option('--lowercase <text>')
    .action((args, options, logger) => {
        const randomString = (length = 32) => {
            if(length == 'false' || length == true){
                length = 32;
            }

            const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';
            for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }

        if(options.length !== undefined){
            if(options.number == 'false'){
                if(options.lowercase == true){
                    logger.info(randomString(options.length).toLowerCase())
                }
                else if(options.uppercase == true){
                    logger.info(randomString(options.length).toUpperCase())
                }
            }
            else{
                logger.info(randomString(options.length));
            }
        }
        else if(options.number !== undefined){
            logger.info(randomString(options.number));
        }
        else if(options.uppercase == true){
            logger.info(randomString().toUpperCase())
        }
        else if(options.lowercase == true){
            logger.info(randomString().toLowerCase())
        }
        else{
            logger.info(randomString())
        };
    })

prog.parse(process.argv)



  