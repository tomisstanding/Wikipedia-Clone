const Wiki = require('../../models/wiki');

let controller = {};

const timestamp = require('time-stamp');

const marked = require('marked');

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
  let originalDate = timestamp();
  let date_authored = originalDate.split(':').join('-');
  let ourMarkdown = marked(req.body.wiki.content)
  Wiki
  .save(req.body.wiki, ourMarkdown, date_authored)
  .then(() => res.redirect('/wiki/show'))
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

 controller.show = (req, res) => {
   Wiki
  .findAll()
  .then((data) => {
  res.render('wikis/show', {
    wiki: data
  })
  .catch(err => console.log('ERROR', err));
  });
};

controller.newest = (req, res) => {
  Wiki
  .thisWeeksNewest()
  .then((data) => {
    res.render('wikis/show', {
      wiki: data
    })
    .catch(err => console.log('ERROR', err));
  });
};

controller.search = (req, res) => {
  Wiki
  .findByCategory(req.params.category)
  .then((data) => {
    res.render('wikis/show', {
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
