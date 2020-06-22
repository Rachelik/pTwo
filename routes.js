module.exports = (app, allModels) => {
/*
* =======================================
*   ALL ROUTES FOR TWEED CONTROLLER
* =======================================
*/

  // require the controller
  const notbookCtrl = require('./controllers/notbook')(allModels);

  app.put('/category/:id/title/:tid/item/:iid/highlights', notbookCtrl.updateHighlights);

  app.get('/category/new', notbookCtrl.newCategory);
  app.get('/category', notbookCtrl.category);
  app.post('/category', notbookCtrl.updateCategory);
  app.get('/category/:id', notbookCtrl.showCategory);
  app.put('/category/:id', notbookCtrl.updateEditCategory);
  app.delete('/category/:id', notbookCtrl.deleteCategory);

  app.get('/category/:id/title/new', notbookCtrl.newTitle);
  app.post('/category/:id/title', notbookCtrl.updateTitle);
  app.get('/category/:id/title/:tid', notbookCtrl.showTitle);
  app.put('/category/:id/title/:tid', notbookCtrl.updateEditTitle);
  app.delete('/category/:id/title/:tid', notbookCtrl.deleteTitle);

  app.get('/category/:id/title/:tid/item/new', notbookCtrl.newItem);
  app.post('/category/:id/title/:tid/item', notbookCtrl.updateItem);

  app.get('/category/:id/title/:tid/item/:iid', notbookCtrl.editItem);
  app.put('/category/:id/title/:tid/item/:iid', notbookCtrl.updateEditItem);
  app.delete('/category/:id/title/:tid/item/:iid', notbookCtrl.deleteItem);

  app.get('/main', notbookCtrl.main)

  app.get('/highlight', notbookCtrl.showHighlights);

  app.get('/', notbookCtrl.home);


};
