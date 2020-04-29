module.exports = (app, allModels) => {
/*
* =======================================
*   ALL ROUTES FOR TWEED CONTROLLER
* =======================================
*/

  // require the controller
  const notbookCtrl = require('./controllers/notbook')(allModels);


  app.get('/categories', notbookCtrl.categories);


  app.get('/', notbookCtrl.home);
};
