module.exports = (app, allModels) => {
/*
* =======================================
*   ALL ROUTES FOR TWEED CONTROLLER
* =======================================
*/

  // require the controller
  const notbookCtrl = require('./controllers/notbook')(allModels);


  app.get('/category', notbookCtrl.category);
  app.get('/cats', notbookCtrl.cats)
  // app.get('/categories/new', notbookCtrl.newCategory);
  // app.post('/categories', notbookCtrl.updateCategory);
  // app.get('/categories/:id', notbookCtrl.showCategory);

  // app.get('/page', notbookCtrl.page);



  app.get('/home', notbookCtrl.home);
  app.get('/welcome', notbookCtrl.welcome)

  app.get('/', notbookCtrl.home);
};
