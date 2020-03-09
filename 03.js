#!/usr/bin/env node
const prog = require('caporal');

prog
    .version('1.0.0')
    .description('CLI Challenge')
    .command('palindrome')
    .argument('<text>','input text',prog.STRING)
    .action((args, options, logger) => {
        const s = args.text.toLowerCase().replace(/[\W_]/g, '')
        logger.info(`String : "${args.text}"`);
        logger.info(s === [...s].reverse().join('') ? "Is palindrome? Yes" : "Is palindrome? No");
    })

    prog.parse(process.argv)