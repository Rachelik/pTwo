// const sha256 = require('js-sha256');
// const SALT = 'ice-cream';

module.exports = (db) => {
/**
* =========================================
* Controller logic
* =========================================
*/
  let home = (req, res) => {
    res.render('template', { link : "home"});
  };

  let welcome = (req, res) => {
    res.render('welcome');
  }

  let category = (req, res) => {
    res.render('template', { link : "category"});
  }

  let cats = (req, res) => {
    db.notbook.allCats((err, result) => {
      if (result === null) {
        res.render('all-cats', { result : null });
      } else {
        res.render('all-cats', { result });
      };
    });
  }

  let newCategory = (req, res) => {
    res.render('new-cat');
  };

  let updateCategory = (req, res) => {
    console.log("controllers " +req.body.category);
    let values = [req.body.category];
    db.notbook.upCat(values, (err, result) => {
      res.redirect('/categories');
    });
  };

  // let showCategory = (req, res) => {
  //   let params = req.params.id;
  //   db.notbook.showCat(params, (err, result) => {
  //     res.render('page')
  //   })
  // }

  // let page = (req, res) => {
  //   res.render('page');
  // }




/**
* =========================================
* Export controller functions as a module
* =========================================
*/

  return {
    home,
    welcome,
    category,
    cats,
    newCategory,
    updateCategory,
    // page,
  };
};
