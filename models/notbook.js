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

  // let showCat = (call) => {
  //   let showCatQ = 'SELECT * FROM pages, categories WHERE category_id = categories.id'
  // }




  // let checkUserQ = (newUserName, call) => {
  //   let query = 'SELECT * FROM users WHERE name='+"'"+newUserName+"'";
  //   dbPoolInstance.query(query, (error, queryResult) => {
  //     if ( error ) {
  //       call(error, null);
  //     } else {
  //       if( queryResult.rows.length > 0 ){
  //           call(null, queryResult.rows);
  //       }else{
  //           call(null, null);
  //       };
  //     };
  //   });
  // };








    return {
      allCats,
      upCat,
    };
};
