#!/usr/bin/env node
const prog = require('caporal');
const publicIp = require('public-ip');

prog
    .command('ip-external')
    .action((args, options, logger) => {
        (async () => {
            try {
                logger.info(await publicIp.v4());
            }
            catch (err) {
                logger.info(err)
            };
        })();
    })

prog.parse(process.argv)
