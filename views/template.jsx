var React = require("react");

class Template extends React.Component {
  render() {

    let allCats = this.props.result;
    // console.log('Layout.jsx allCats result');
    let list;

    if (allCats === null) {
      list = "No categories added yet. Please add a category using the '+ New Category' button";
    } else {
      list = allCats.map((cat) => {
        return (
          <li key={cat.id} className="d-flex justify-content-between align-items-center"><a href={"/category/"+cat.id} className="list-group-item list-group-item-action all-list-li">{cat.category}</a>
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
                  <li><a href="/home" className="nav-items nav-link">Home</a></li>
                  <li><a href="/category" className="nav-items nav-link">Category</a></li>
                  <li><a href="/bookmarks" className="nav-items nav-link">Bookmarks</a></li>
                  <li><a href="/highlights" className="nav-items nav-link">Highlights</a></li>
                </ul>


                <div className="contents">

                  <div className="categories-container">
                    <div className="cat-form-section">
                      <form action="/category" method="POST">
                        <div className="form-row">
                          <div className="col col-sm-6 col-xs-4">
                            <input name="category" className="form-control" required/>
                          </div>
                          <input type="submit" className="btn btn-outline-info up-cat-btn" value="Add New Category" />
                        </div>
                      </form>
                      <br />
                    </div>
                    <br/>

                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search by</button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Category</a>
                          <a className="dropdown-item" href="#">Title</a>
                          <a className="dropdown-item" href="#">Item</a>
                        </div>
                      </div>
                    </div>
                    <div className="categories">
                      <ul className="all-list list-group">
                        {list}
                      </ul>
                    </div>
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
              let clickLink = `{this.props.link}`;
            </script>
            <script src="/template.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Template;