var React = require("react");

class Newitem extends React.Component {
  render() {
    //Title
    let pages = this.props.titleRes[0];
    let title = pages.title;
    let titleId = pages.id;

    //Category
    let categories = this.props.catRes[0];
    let category = categories.category;
    let item = this.props.itemR[0];

    //link to save new item
    let itemPutLink = "/category/"+categories.id+"/title/"+pages.id+"/item/"+item.id+"?_method=put"

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

              <h5>{category}</h5>
              <h6>{title}</h6>
              <br/>

              <div className="item-form-section">

                <form action={itemPutLink} method="POST">
                  <div className="form-row">
                    <div className="col col-sm-9 col-xs-6">
                      <input name="note" className="form-control" defaultValue={item.note} required/>
                    </div>
                    <input type="submit" className="btn btn-outline-info" value="Edit Item" />
                    <input name="title_id" className="form-control hidden" defaultValue={titleId} readOnly/>
                  </div>
                </form>

              </div>

            </div>
            <div className="footer">
              <p>Created by: rachel-i 2020</p>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Newitem;