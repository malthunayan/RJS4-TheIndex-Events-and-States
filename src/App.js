import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  filterAuthors = query => {
    const filterAuthors = authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({ filteredAuthors: filterAuthors });
  };
  authorDetail = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    }
    return (
      <AuthorsList
        authors={this.state.filteredAuthors}
        selectAuthor={this.selectAuthor}
        search={this.filterAuthors}
      />
    );
  };
  homepage = author => {
    this.setState({ currentAuthor: null });
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar homepage={this.homepage} />
          </div>
          <div className="content col-10">{this.authorDetail()}</div>
        </div>
      </div>
    );
  }
}

export default App;
