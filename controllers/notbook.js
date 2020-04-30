// const sha256 = require('js-sha256');
// const SALT = 'ice-cream';

module.exports = (db) => {
/**
* =========================================
* Controller logic
* =========================================
*/
  let home = (req, res) => {
    res.redirect('/categories');
  };

  let categories = (req, res) => {
    db.notbook.allCats((err, result) => {
      if (result === null) {
        res.render('layout', { result : null });
      } else {
        res.render('layout', { result });
      };
    });
  };

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
  //   let params =
  //   db.notbook.showCat((err, result) => {
  //     res.render('')
  //   })
  // }

  // let addNewUser = (req, res) => {
  //   let newUserName = req.body.name;
  //   db.tweed.checkUserQ(newUserName, (error, checkUserQResult) => {
  //       if(checkUserQResult === null) {
  //           let reqHPassword = sha256(req.body.password);
  //           let values = [req.body.name, reqHPassword];
  //           db.tweed.addNewUserQ(values, (err, result) => {
  //               res.redirect('/login');
  //           });
  //       } else {
  //           res.render('tweed/register', { register : "failed" });
  //       };
  //   });
  // };



/**
* =========================================
* Export controller functions as a module
* =========================================
*/

  return {
    home,
    categories,
    newCategory,
    updateCategory,
  };
};
