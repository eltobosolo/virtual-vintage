const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const flagsmith = require('flagsmith-nodejs');
const nodecache = require('node-cache');

flagsmith.init({
  environmentID: process.env.FLAGSMITH_ENVIRONMENT_ID || 'jhZAAroZixcZKDPDxh46Ek',
  cache: new nodecache({stdTTL : 10, checkperiod: 10}),
});

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
