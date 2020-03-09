#!/usr/bin/env node
const prog = require('caporal');

prog
    .version('1.0.0')
    .description('CLI Challenge')
    .command('obfuscate')
    .argument('<text>','input text',prog.STRING)
    .action((args, options, logger) => {
        const obfuscate = (x) => {
            const bytes = [];
            for (let i = 0; i < x.length; i++) {
                bytes.push(`&#${x.charCodeAt(i)};`);
            }
            return bytes.join('');
        }
        logger.info(obfuscate(args.text));
    })

prog.parse(process.argv)
