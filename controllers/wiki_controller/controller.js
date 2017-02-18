const Wiki = require('../../models/wiki');

let controller = {};

controller.index = (req, res) => {
  Wiki
  .findAll()
  .then((data) => {
  res.render('wikis/index', {
    wiki: data
  })
  .catch(err => console.log('ERROR', err));
  });
};

controller.new = (req, res) => {
  res.render('wikis/new');
}

controller.update = (req, res) => {
  Wiki
  .update(req.body.wiki, req.params.id)
  .then(() => res.redirect('/wiki'))
  .catch(err => console.log('ERROR', err));
}

controller.create = (req, res) => {
  let ourMarkdown = marked(req.body.content)
  console.log('req.body:',req.body, 'our markdown:', ourMarkdown)
  Wiki
  .save(req.body.wiki, ourMarkdown)
  .then(() => res.redirect('/wiki'))
  .catch(err => console.log('ERROR', err));
}

controller.edit = (req, res) => {
  Wiki
 .findById(req.params.id)
 .then((data) => {
   res.render('wikis/edit', {
     wiki: data
   })
 .catch(err => console.log('ERROR', err));
  });
 };

 controller.destroy = (req, res) => {
  Wiki
  .destroy(req.params.id)
  .then(() => {
    res.redirect('/wiki');
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
 };

module.exports = controller;
