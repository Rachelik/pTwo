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
    let values = [req.body.category];
    db.notbook.upCat(values, (err, result) => {
      res.redirect('/category');
    });
  };

  let showCategory = (req, res) => {
    let params = req.params.id;
    db.notbook.getCatTitle(params, (err, catRes) => {
      //catRes will get me id and category name from Categories
      db.notbook.showCat(params, (error, result) => {
        //result will get me title and category_id from category id
        res.render('titles', { catRes, result })
      });
    });
  };

  let newTitle = (req, res) => {
    let params = req.params.id;
    db.notbook.getCatTitle(params, (err, catRes) => {
      res.render('new-title', { catRes });
    });
  };

  let updateTitle = (req, res) => {
    let values = [req.body.category_id, req.body.title]
    db.notbook.upTitle(values, (err, result) => {
      res.redirect('/category/'+req.body.category_id);
    });
  };
//category/:id/title/:tid  ---> items
  let showTitle = (req, res) => {
    //category id params
    let params = req.params.id;
    console.log(params)
    //title id params
    let tparams = req.params.tid;
    db.notbook.getCatTitle(params, (err, catRes) => {
      //catRes will get me category_id and category
      db.notbook.showCat(params, (err, titleRes) => {
        //result will get me all titles under category
        db.notbook.getTitleItem(tparams, (err, itemRes) =>{
          res.render('items', { catRes, titleRes, itemRes });
        });
      });
    });
  };

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
    showTitle,
  };
};
