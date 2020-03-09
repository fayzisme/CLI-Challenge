#!/usr/bin/env node
const prog = require('caporal');

prog
    .version('1.0.0')
    .description('CLI Challenge')
    .command('lowercase')
    .argument('<text>','input text', prog.STRING)
    .action((args, options, logger) => {
        logger.info(args.text.toLowerCase(" "))
    })
    .command('uppercase')
    .argument('<text>','input text', prog.STRING)
    .action((args, options, logger) => {
        logger.info(args.text.toUpperCase(" "))
    })
    .command('capitalize')
    .argument('<text>','input text', prog.STRING)
    .action((args, options, logger) => {
        logger.info(args.text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" "));
    })

    prog.parse(process.argv)