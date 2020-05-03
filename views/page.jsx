var React = require("react");
var Template = require('./template');

class Page extends React.Component {
  render() {
    let pageContent = this.props.result;
    console.log("pageContent")
    console.log(pageContent);
    const pages = this.props.result;

    const titleList = pages.map((page) => {
      return (
        <li key={page.id} className="d-flex justify-content-between align-items-center"><a href={"/category/:id/title/"+page.id} className="list-group-item list-group-item-action all-page-list">{page.title}</a></li>
        )
    })


    return (

      <Template>
        <div className="page-form-section">
          <form action={"/category/"+this.props.result.category_id+"/title"} method="POST">
            <div className="form-row">
              <div className="col col-sm-6 col-xs-4">
                <input name="title" className="form-control" required/>
              </div>
              <input type="submit" className="btn btn-outline-info up-title-btn" value="Add New Title" />
            </div>
          </form>
          <br />
        </div>
        <br/>

        <div className="titles">
          <ul className="all-titles-list list-group">
            {titleList}
          </ul>
        </div>
      </Template>
    );
  }
}

module.exports = Page;