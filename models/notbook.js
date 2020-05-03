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

  let getCatTitle = (params, call) => {
    let getCatTitleQ = "SELECT * FROM categories WHERE id ="+params;
    dbPoolInstance.query(getCatTitleQ, (err, queryRes) => {
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

  let showCat = (params, call) => {
    let showCatQ = 'SELECT * FROM pages WHERE category_id='+params;
    dbPoolInstance.query(showCatQ, (err, queryRes) => {
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

  let upTitle = (values, call) => {
    let upTitleQ = "INSERT INTO pages (category_id, title) values ($1, $2)";
    dbPoolInstance.query(upTitleQ, values, (err, queryRes) => {
      if (err) {
        call(err, null);
      } else {
        if ( queryRes.rows.length > 0 ) {
          call(null, queryRes.rows);
        } else {
          call(null, null);
        };
      };
    })
  }




    return {
      allCats,
      upCat,
      getCatTitle,
      showCat,
      upTitle,
    };
};
