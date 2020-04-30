var React = require("react");

class Newcat extends React.Component {
  render() {

    return (
      <div className="new-cat-form">
        <form action="/categories" method="POST">
          <div className="form-row">
            <div className="co col-sm-2 col-xs-2">
              <label>Category</label>
            </div>
            <div className="col col-sm-6 col-xs-4">
              <input name="category" className="form-control" required/>
            </div>
            <input type="submit" className="btn btn-outline-info up-cat-btn" value="Add" />
          </div>
        </form>
        <br />
        <script src="/new-cat.js"></script>
      </div>

    );
  }
}

module.exports = Newcat;