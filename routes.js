module.exports = (app, allModels) => {
/*
* =======================================
*   ALL ROUTES FOR TWEED CONTROLLER
* =======================================
*/

  // require the controller
  const notbookCtrl = require('./controllers/notbook')(allModels);

  app.get('/home', notbookCtrl.home);
  app.get('/welcome', notbookCtrl.welcome)
  app.get('/category', notbookCtrl.category);
  app.get('/category/new', notbookCtrl.cats)
  // app.get('/category/new', notbookCtrl.newCategory);
  app.post('/category', notbookCtrl.updateCategory);
  // app.get('/category/:id', notbookCtrl.showCategory);

  // app.get('/page', notbookCtrl.page);

  app.get('/', notbookCtrl.home);
};
