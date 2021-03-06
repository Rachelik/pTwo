var React = require("react");

class Items extends React.Component {
  render() {
    //Title
    let pages = this.props.titleRes[0];
    let title = pages.title;
    let titleId = pages.id;

    //Category
    let categories = this.props.catRes[0];
    let category = categories.category;

    let items = this.props.itemRes;

    let newItemLink = "/category/"+categories.id+"/title/"+pages.id+"/item/new"
    let titlesLink = "/category/"+categories.id

    let titlePutLink = "/category/"+categories.id+"/title/"+pages.id+"?_method=put"

    let titleDeleteLink = "/category/"+categories.id+"/title/"+pages.id+"?_method=delete"

    // let itemDeleteLink = "/category/"+categories.id+"/title/"+pages.id+"/item/"+item.id+"?_method=delete"

    let itemList;
    if (items === null) {
      itemList = "No items added yet. Please add a category using the '+ New item' button";
    } else {

      itemList = items.map((item) => {

        let buttonIcon;
        if(item.highlight === true) {
          buttonIcon = "🔴";
        } else if (item.highlight === false || item.highlight === "null") {
          buttonIcon = "📌";
        }
        // <a href={"/category/"+categories.id+"/title/"+pages.id+"/item/"+item.id} className="list-group-item list-group-item-action">{item.note}</a>
        // <input type="submit" className="btn btn-outline-info" value="Edit Item" />
      return (
        <li key={item.id} className="d-flex justify-content-between align-items-center">
              <form action={"/category/"+categories.id+"/title/"+pages.id+"/item/"+item.id+"?_method=put"} method="POST" className="col col-md-11 col-sm-10 col-xs-6">
                  <input name="note" className="form-control" defaultValue={item.note} required/>
                  <input name="title_id" className="form-control hidden" type="hidden" defaultValue={titleId} readOnly/>
              </form>

              <div className="delete-note">
                <form action={"/category/"+categories.id+"/title/"+pages.id+"/item/"+item.id+"?_method=delete"} method="POST">
                  <input type="submit" className="btn btn-outline-danger" value="X" />
                </form>
              </div>
              <div className="">
                <input name="item_id" className="item_id" type="hidden" value={item.id} readOnly />
                <input name="highlight" className="highlight-input" type="hidden" defaultValue={item.highlight} />
                <button className="highlight-btn" value={item.id}>{buttonIcon}</button>
              </div>
        </li>
        );
      });

    };
    return (
      <html>
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Short+Stack&display=swap" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="/style.css" />
            <title>NOTbook</title>
          </head>
          <body>
            <div className="container">

                <div className="page-header">
                  <h3>NOTbook</h3>
                </div>

                <ul className="nav nav-tabs">
                  <li><a href="/main" className="nav-items nav-link">Main</a></li>
                  <li><a href="/category" className="nav-items nav-link">Category</a></li>
                  <li><a href="/highlight" className="nav-items nav-link">Highlights</a></li>
                </ul>
                <br/>

                <h5>{category}</h5>
                <br/>
                <div className="content">
                  <div className="delete-this">
                    <form action={titleDeleteLink} method="POST">
                      <input type="submit" className="btn btn-outline-danger" value="Delete page" />
                    </form>
                  </div>
                  <br/>
                  <form action={titlePutLink} method="POST">
                    <h6 className="title-edit">
                      <input name="title" className="form-control" defaultValue={title} required/>
                    </h6>
                      <input type="submit" className="btn btn-outline-info" value="Edit Title" hidden/>
                      <input name="category_id" className="form-control hidden" defaultValue={categories.id} readOnly/>
                  </form>
                  <br/>


                  <a href={newItemLink} className="btn btn-outline-info">+ Item</a>
                  <br/>
                  <br/>
                  <div className="back-link">
                    <a href={titlesLink}>Back to Titles page</a>
                  </div>

                  <div className="items">
                    <ul className="all-items-list list-group">
                      {itemList}
                    </ul>
                  </div>
                </div>
            </div>
            <div className="footer">
              <p>Created by: rachel-i 2020</p>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
            <script>
              let categoryId = `{categories.id}`;
              let titleId = `{pages.id}`;
            </script>
            <script src="/items.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Items;