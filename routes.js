module.exports = (app, allModels) => {
/*
* =======================================
*   ALL ROUTES FOR TWEED CONTROLLER
* =======================================
*/

  // require the controller
  const notbookCtrl = require('./controllers/notbook')(allModels);


  app.get('/categories', notbookCtrl.categories);
  app.get('/categories/new', notbookCtrl.newCategory);
  app.post('/categories', notbookCtrl.updateCategory);
  // app.get('/categories/:id', notbookCtrl.showCategory);

  app.get('/', notbookCtrl.home);
};
