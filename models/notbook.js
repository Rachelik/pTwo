/**
* =========================================
* Export model functions as a module
* =========================================
*/

module.exports = (dbPoolInstance) => {

  let allCats = (call) => {
    let allCatsQ = "SELECT * FROM categories ORDER BY category ASC";
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
    let upCatQ = 'INSERT INTO categories (category) values ($1) returning *';
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

//to get id and category from categories table
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

 //to get id and title from pages table
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

  // to get title from pages table when click
   let getTitle = (tparams, call) => {
     let getTitleQ = 'SELECT * FROM pages WHERE id='+tparams;
     dbPoolInstance.query(getTitleQ, (err, queryRes) => {
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

//get item using title
  let getTitleItem = (tparams, call) => {
    let getTitleItemQ = "SELECT * FROM items WHERE title_id ="+tparams;
    dbPoolInstance.query(getTitleItemQ, (err, queryRes) => {
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

  let upItem = (values, call) => {
    let upItemQ = "INSERT INTO items (title_id, note) values ($1, $2)";
    dbPoolInstance.query(upItemQ, values, (err, queryRes) => {
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

  let getItem = (iparams, call) => {
    let getItemQ = "SELECT * FROM items where id ="+iparams;
    dbPoolInstance.query(getItemQ, (err, queryRes) => {
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

  let upEditItem = (iparams, values, call) => {
    let upEditItemQ = 'UPDATE items SET note=$1 where id ='+iparams+'returning *';
    dbPoolInstance.query(upEditItemQ, values, (err, queryRes) => {
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

  let upHighlight = (values, call) => {
    let upHighlightQ = 'UPDATE items SET highlight=$2 where id=$1 RETURNING *';
    dbPoolInstance.query(upHighlightQ, values, (err, queryRes) => {
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

  let shHighlights = (call) => {
    let shHighlightsQ = 'SELECT * FROM items WHERE highlight = true';
    dbPoolInstance.query(shHighlightsQ, (err, queryRes) => {
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

    return {
      allCats,
      upCat,
      getCatTitle,
      showCat,
      getTitle,
      upTitle,
      getTitleItem,
      upItem,
      getItem,
      upEditItem,
      upHighlight,
      shHighlights,
    };
};
