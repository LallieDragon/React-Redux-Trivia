import React from 'react';
import { connect } from 'react-redux';

import { fetchCategories, receiveQuestions } from '../actions';
import CheckboxList from './common/CheckboxList';

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  onQuestionsSelected(id, name) {
    this.props.receiveQuestions(id, name)
  }

  renderList() {
    return (
      <CheckboxList
        categories={this.props.categories}
        onQuestionsSelected={this.onQuestionsSelected.bind(this)}
        />
    )
  }

  render() {
    var content = []

    if (typeof this.props.categories !== 'undefined') {
      content = this.renderList();
    }

    return(
      <div>
        <h1>Trivia with React-Redux</h1>
        <div>
          <p>Please select 4 categories</p>
          {content}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories.trivia_categories }
}

export default connect(mapStateToProps,
  { fetchCategories, receiveQuestions }
)(CategoryList)
