module.exports = (db) => {
/**
* =========================================
* Controller logic
* =========================================
*/

  let home = (req, res) => {
    db.notbook.allCats((err, result) => {
      if (result === null) {
        res.render('template', { result : null });
      } else {
        res.render('template', { result });
      };
    });
  };

  let newCategory = (req, res) => {
    db.notbook.allCats((err, result) => {
      if (result === null) {
        res.render('all-cats', { result : null });
      } else {
        res.render('all-cats', { result });
      };
    });
  };

  // let updateCategory = (req, res) => {
  //   console.log("controllers " +req.body.category);
  //   let values = [req.body.category];
  //   db.notbook.upCat(values, (err, result) => {
  //     res.redirect('/category');
  //   });
  // };


  // let showCategory = (req, res) => {
  //   let params = req.params.id;
  //   db.notbook.showCat(params, (err, result) => {
  //     res.render('page', { result })
  //   })
  // }





/**
* =========================================
* Export controller functions as a module
* =========================================
*/

  return {
    home,
    newCategory,
  };
};
