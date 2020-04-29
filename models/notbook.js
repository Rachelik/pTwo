/**
* =========================================
* Export model functions as a module
* =========================================
*/
module.exports = (dbPoolInstance) => {

  let allCats = (call) => {
    let allCatsQ = "SELECT * FROM categories;";
    dbPoolInstance.query(allCatsQ, (err, queryRes) => {
      if(err) {
        call(err, null);
      } else {
        if ( queryRes.rows.length > 0 ) {
          call(null, queryResult.rows);
        } else {
          call(null, null);
        };
      };
    });
  };




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

    };
};
