import React from 'react';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import QuestionsList from './QuestionsList';

class App extends React.Component {
  render() {
    var pageContent = [];

    if (this.props.categories.length === 0 || this.props.categoriesSelected.length < 4 ) {
      pageContent = (
          <CategoryList />
      )
    } else {
      pageContent = (
        <QuestionsList />
      )
    }

    return(
      <div>
        {pageContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
