var React = require("react");

class Newtitle extends React.Component {
  render() {
      //category
      let category = this.props.catRes[0];

      //link to save new title
      let titlePostLink = "/category/"+category.id+"/title";
      let categoryLink = "/category/"+category.id;

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

              <h5>{category.category}</h5>
              <br/>
              <div className="back-link">
                <a href={categoryLink}>Back to Title page</a>
              </div>

              <div className="title-form-section">

                <form action={titlePostLink} method="POST">
                  <div className="form-row">
                    <div className="col col-sm-9 col-xs-6">
                      <input name="title" className="form-control" placeholder="Enter new Title here" required/>
                    </div>
                    <input type="submit" className="btn btn-outline-info" value="Add Title" />
                    <input name="category_id" className="form-control hidden" defaultValue={category.id}readOnly/>
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

module.exports = Newtitle;