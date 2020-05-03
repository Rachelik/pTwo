module.exports = (db) => {
/**
* =========================================
* Controller logic
* =========================================
*/

  let home = (req, res) => {
    res.redirect('/category')
  };

  let category = (req, res) => {
    db.notbook.allCats((err, result) => {
      if (result === null) {
        res.render('categories', { result : null });
      } else {
        res.render('categories', { result });
      };
    });
  };

  let newCategory = (req, res) => {
    res.render('new-category');
  }

  let updateCategory = (req, res) => {
    console.log("controllers " +req.body.category);
    let values = [req.body.category];
    db.notbook.upCat(values, (err, result) => {
      res.redirect('/category');
    });
  };

  let showCategory = (req, res) => {
    let params = req.params.id;
    db.notbook.getCatTitle(params, (err, catRes) => {
      db.notbook.showCat(params, (error, result) => {
        res.render('titles', { catRes, result })
      });
    });
  };

  let newTitle = (req, res) => {
    let params = req.params.id;
    db.notbook.getCatTitle(params, (err, catRes) => {
      console.log(catRes);
      res.render('new-title', { catRes });
    });
  };

  let updateTitle = (req, res) => {
    console.log("updateTitle req.body");
    console.log(req.body);
    let values = [req.body.category_id, req.body.title]

    db.notbook.upTitle(values, (err, result) => {
      console.log("upTitle result")
      // console.log(result);
      res.redirect('/category/'+req.body.category_id);
    });
  }
/**
* =========================================
* Export controller functions as a module
* =========================================
*/

  return {
    home,
    category,
    newCategory,
    updateCategory,
    showCategory,
    newTitle,
    updateTitle,
  };
};
