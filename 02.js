#!/usr/bin/env node
const prog = require('caporal');

prog
    .version('1.0.0')
    .description('CLI Challenge')
    .command('add')
    .argument('[numb...]','input number')
    .action((args, options, logger) => {
        const convNumb = args.numb.map(el => parseFloat(el));
        logger.info(convNumb.reduce((a,b) => a + b));
    })
    .command('substract')
    .argument('[numb...]','input number')
    .action((args, options, logger) => {
        const convNumb = args.numb.map(el => parseFloat(el));
        logger.info(convNumb.reduce((a,b) => a - b) === 0 ? '0' : convNumb.reduce((a,b) => a - b));
    })
    .command('multiply')
    .argument('[numb...]','input number')
    .action((args, options, logger) => {
        const convNumb = args.numb.map(el => parseFloat(el));
        logger.info(convNumb.reduce((a,b) => a * b) === 0 ? '0' : convNumb.reduce((a,b) => a * b));
    })
    .command('divide')
    .argument('[numb...]','input number')
    .action((args, options, logger) => {
        const convNumb = args.numb.map(el => parseFloat(el));
        logger.info(convNumb.reduce((a,b) => a / b));
    })

    prog.parse(process.argv)