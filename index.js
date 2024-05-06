const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const Flagsmith = require('flagsmith-nodejs')

const flagsmith = new Flagsmith({
    environmentKey: 'jhZAAroZixcZKDPDxh46Ek'
});

const flags = flagsmith.getEnvironmentFlags();

const PORT = process.env.PORT || 5001

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'), { flags: flags } )
    .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
