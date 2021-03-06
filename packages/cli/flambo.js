const path    = require('path')
const program = require('commander')

const pkg     = require('./package.json')

const home = process.env.HOME ||
    process.env.USERPROFILE ||
    (process.env.HOMEPATH ? ((process.env.HOMEDRIVE || 'C:/') + process.env.HOMEPATH) : null)

const filename = path.join(home, '.flambo', 'config')

//console.log(home)
//console.log(filename)

program
    .version(pkg.version)
    .command('login',       'login')
    .command('users',       'list users')
    .command('groups',      'list groups')
    .command('sources',     'list sources')
    .command('collections', 'list collections')
    .parse(process.argv)
