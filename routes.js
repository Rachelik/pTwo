module.exports = (app, allModels) => {
/*
* =======================================
*   ALL ROUTES FOR TWEED CONTROLLER
* =======================================
*/

  // require the controller
  const notbookCtrl = require('./controllers/notbook')(allModels);

  app.get('/category/new', notbookCtrl.newCategory);
  app.get('/category', notbookCtrl.category);
  app.post('/category', notbookCtrl.updateCategory);
  app.get('/category/:id', notbookCtrl.showCategory);

  app.get('/category/:id/title/new', notbookCtrl.newTitle);
  app.post('/category/:id/title', notbookCtrl.updateTitle);
  app.get('/category/:id/title/:tid', notbookCtrl.showTitle);

  app.get('/category/:id/title/:tid/item/new', notbookCtrl.newItem);
  app.post('/category/:id/title/:tid/item', notbookCtrl.updateItem);

  // app.get('/category/:id/title/:tid/items/new', notbookCtrl.newItem);

  app.get('/main', notbookCtrl.main)

  app.get('/', notbookCtrl.home);






};
