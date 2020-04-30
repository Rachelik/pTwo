var React = require("react");

class Layout extends React.Component {
  render() {
    let allCats = this.props.result;
    console.log('Layout.jsx allCats result');
    console.log(allCats);
    let list;

    if (allCats === null) {
      list = "No categories added yet. Please add a category using the '+ New Category' button";
    } else {
      list = allCats.map((cat) => {
        return (
          <li key={cat.id} className="d-flex justify-content-between align-items-center">
            <a href="" className="list-group-item list-group-item-action">{cat.category}</a>
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
                  <li className="nav-item">
                    <a className="nav-link active" href="">Category</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Bookmarks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Highlights</a>
                  </li>
                </ul>

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


                <div className="add-new">
                  <button type="button" className="btn btn-outline-info new-cat-btn">+ New Category</button>
                </div>

                <div className="cat-form-section">
                </div>

                <div className="categories">
                  <ul className="all-list list-group">{list}</ul>
                </div>

            </div>
            <div className="footer">
              <p>Created by: rachel-i 2020</p>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
            <script src="/layout.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;