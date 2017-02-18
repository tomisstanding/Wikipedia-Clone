const db = require('../config/db');

let Wiki = {};

Wiki.findAll = () => {
  return db.manyOrNone(`Select * FROM wiki`);
}

Wiki.save = (wiki, ourMarkdown) => {
  return db.none(`
  INSERT INTO wiki
  (title, category, content)
  VALUES
  ($1, $2, $3)`,
  [wiki.title, wiki.category, ourMarkdown]
  );
};

Wiki.findById = (id) => {
  return db.one(`
    SELECT * FROM wiki
    WHERE id = $1`,
    [id]
  );
};

Wiki.update = (wiki, id) => {
  return db.none(`
    UPDATE wiki
    SET
      title = $1,
      category = $2,
      content = $3
    WHERE id = $4`,
    [wiki.title, wiki.category, wiki.content, id]
  );
};

Wiki.destroy = (id) => {
  return db.query(`DELETE FROM wiki WHERE id = $1`, [id]);
}

module.exports = Wiki;
