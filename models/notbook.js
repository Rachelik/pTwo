/**
* =========================================
* Export model functions as a module
* =========================================
*/

module.exports = (dbPoolInstance) => {

  let allCats = (call) => {
    let allCatsQ = "SELECT * FROM categories ORDER BY category ASC;";
    dbPoolInstance.query(allCatsQ, (err, queryRes) => {
      if (err) {
        call(err, null);
      } else {
        if ( queryRes.rows.length > 0 ) {
          call(null, queryRes.rows);
        } else {
          call(null, null);
        };
      };
    });
  };

  let upCat = (values, call) => {
    let upCatQ = 'INSERT INTO categories (category) values ($1) returning *;';
    dbPoolInstance.query(upCatQ, values, (err, queryRes) => {
      console.log(queryRes.rows);
      if (err) {
        call(err, null);
      } else {
        if ( queryRes.rows.length > 0 ) {
          call(null, queryRes.rows);
        } else {
          call(null, null);
        };
      };
    });
  };



  // let showCat = (params, call) => {
  //   let showCatQ = 'SELECT * FROM pages, categories WHERE category_id = categories.id AND category.id = '+params;
  // }












    return {
      allCats,
      // upCat,
    };
};
