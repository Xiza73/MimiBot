const { Router } = require('express')
const router = Router();
const db = require('../database/db.js');

router.get('/', async (req, res) => {
  const keys = await db.list();
  const poems = [];
  for(let i = 0; i < keys.length - 1; i++){
    poems.push(await db.get(keys[i]));
  }
  res.render('index', {
    poems
  });
})

router.post('/add', async (req, res) => {
  const poem = req.body;
  let key = await db.get("key");
  key += 1;
  poem.id = key;
  await db.set("key", key);
  await db.set(`${key}`, poem);
  /*const keys = await db.list();
  for(let i = 0; i < keys.length - 1; i++){
    await db.delete(keys[i]);
  }*/
  res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
  await db.delete(req.params.id);
  res.redirect('/');
})

router.post('/edit/:id', async (req, res) => {
  const poem = req.body;
  poem.id = req.params.id;
  await db.set(`${req.params.id}`, poem);
  res.redirect('/');
})

module.exports = router;