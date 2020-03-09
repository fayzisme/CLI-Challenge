#!/usr/bin/env node
const prog = require('caporal');
const ip = require("ip");

prog
    .command('ip')
    .action((args, options, logger) => {
        logger.info(ip.address());
    })

prog.parse(process.argv)