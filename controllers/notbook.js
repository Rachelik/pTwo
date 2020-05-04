module.exports = (db) => {
/**
* =========================================
* Controller logic
* =========================================
*/

  let home = (req, res) => {
    res.redirect('/category');
  };

  let main = (req, res) => {
    res.render('main');
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
    //title id params
    let tparams = req.params.tid;
    db.notbook.getCatTitle(params, (err, catRes) => {
      //catRes will get me category_id and category
      db.notbook.getTitle(tparams, (err, titleRes) => {
        //result will get me all titles under category
        db.notbook.getTitleItem(tparams, (err, itemRes) =>{
          res.render('items', { catRes, titleRes, itemRes });
        });
      });
    });
  };

//new item /category/:id/title/:tid/item/new
let newItem = (req, res) => {
  //category id params
  let params = req.params.id;
  let tparams = req.params.tid;
  db.notbook.getCatTitle(params, (err, catRes) => {
    //catRes will get me category_id and category
    db.notbook.getTitle(tparams, (err, titleRes) => {
      //result will get me all titles under category
      db.notbook.getTitleItem(tparams, (err, itemRes) =>{
        res.render('new-item', { catRes, titleRes, itemRes });
      });
    });
  });
};

// category/:id/title/:tid/item'

let updateItem = (req, res) => {
  let params = req.params.id
  let tparams = req.params.tid
  let values = [req.body.title_id, req.body.note];
  db.notbook.upItem(values, (err, result) => {
    res.redirect('/category/'+params+'/title/'+tparams);
  });
};

// '/category/:id/title/:tid/item/:iid'
let editItem = (req, res) => {
  let params = req.params.id;
  let tparams = req.params.tid;
  let iparams = req.params.iid;
  db.notbook.getCatTitle(params, (err, catRes) => {
    //catRes will get me category_id and category
    db.notbook.getTitle(tparams, (err, titleRes) => {
      //result will get me all titles under category
      db.notbook.getTitleItem(tparams, (err, itemRes) =>{
        //result with all items under a title
        db.notbook.getItem(iparams, (err, itemR) => {
          res.render('edit-item', { catRes, titleRes, itemRes, itemR });
        });
      });
    });
  });
};

// '/category/:id/title/:tid/item/:iid'
let updateEditItem = (req, res) => {
  let params = req.params.id;
  let tparams = req.params.tid;
  let iparams = req.params.iid;
  let values = [req.body.note]
  db.notbook.upEditItem(iparams, values, (err, itemR) => {
    res.redirect('/category/'+params+'/title/'+tparams);
  });
};

let updateHighlights = (req, res) => {
  let params = req.params.id;
  let tparams = req.params.tid;
  let iparams = req.params.iid;
  let values = [req.body.item_id, req.body.highlight]
  console.log("req.body.item_id")
  console.log(req.body.item_id)
  console.log(values);
  db.notbook.upHighlight(values, (err, result) => {
  });
};

let showHighlights = (req, res) => {
  db.notbook.shHighlights((err, result) => {
    res.render('highlights', { result })
  });
};

/**
* =========================================
* Export controller functions as a module
* =========================================
*/

  return {
    home,
    main,
    category,
    newCategory,
    updateCategory,
    showCategory,
    newTitle,
    updateTitle,
    showTitle,
    newItem,
    updateItem,
    editItem,
    updateEditItem,
    updateHighlights,
    showHighlights,
  };
};
