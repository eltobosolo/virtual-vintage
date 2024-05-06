const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const Flagsmith = require('flagsmith-nodejs')

const flagsmith = new Flagsmith({
    environmentKey: 'jhZAAroZixcZKDPDxh46Ek'
});

var third_osc_enabled = await flagsmith.hasFeature('third_oscillator');

const PORT = process.env.PORT || 5001

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'), third_osc_enabled)
    .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
