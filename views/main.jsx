var React = require("react");

class Main extends React.Component {
  render() {

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
                  <li><a href="/main" className="nav-items nav-link active">Main</a></li>
                  <li><a href="/category" className="nav-items nav-link">Category</a></li>
                  <li><a href="/highlight" className="nav-items nav-link">Highlights</a></li>
                </ul>


                <h5>Welcome</h5>

                <div className="main-contents">
                <p>Please feel free to make notes. Notes are taken with different categories and titles.</p>
                <p>A category can have many titles and a title can have many notes. Each Category, Title and Notes can be added with the "+" prefix button on their respective page.</p>
                <p>Please be aware of the delete button. Note that Delete Button for Category will delete all titles and notes along with it. Same to title, delete a title (page) will delete all the notes in it.</p>
                <p>Edit can be done just by clicking the text itself.</p>
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

module.exports = Main;