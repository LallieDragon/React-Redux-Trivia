import React from 'react';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import QuestionsList from './QuestionsList';
import AnswersList from './AnswersList';

class App extends React.Component {
  render() {
    var pageContent = [];

    if (this.props.categories.length === 0 || this.props.categoriesSelected.length < 4 ) {
      pageContent = (
        <CategoryList />
      )
    } else {
      if (this.props.selectedQuestion.length < 1) {
        pageContent = (
          <QuestionsList />
        )
      } else {
        pageContent = (
          <AnswersList />
        )
      }
    }

    return(
      <div>
        { pageContent }
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
