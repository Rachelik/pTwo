var React = require("react");


class Categories extends React.Component {
  render() {
    let allCats = this.props.result;
    // console.log('Layout.jsx allCats result');
    let list;

    if (allCats === null) {
      list = "No categories added yet. Please add a category using the '+ New Category' button";
    } else {
      list = allCats.map((cat) => {
        return (
          <li key={cat.id} className="d-flex justify-content-between align-items-center">
            <a href="" className="list-group-item list-group-item-action all-list-li">{cat.category}</a>
          </li>
          );
      });
    };
            // <script src="/all-cats.js"></script>

    return (

      <div>
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
          <ul className="all-list list-group">
            {list}
          </ul>
        </div>

      </div>


    );
  }
}

module.exports = Categories;