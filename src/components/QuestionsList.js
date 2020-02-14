import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { fetchQuestions } from '../actions';
import TriviaCard from './common/TriviaCard';

class QuestionsList extends React.Component {
  componentDidMount() {
    let categories = this.props.categories;

    for (let i = 0; i < categories.length; i++) {
      this.props.fetchQuestions(categories[i].id);
    }
  }

  renderCards() {
    const questionsArray = this.props.questionsByCategory;
    var cards = [];

    for (let i = 0; i < questionsArray.length; i++) {
      questionsArray[i].questionsByCategory.map(question => {
        cards.push(<TriviaCard key={question.question} question={question} />)
        return cards
      })
    }

    return cards
  }

  render() {
    var content = [];

    if (this.props.questionsByCategory.length !== 4) {
      content = (<div>Loading</div>)
    } else {
      content = this.renderCards();
    }
    return(
      <Grid container spacing={2} id="grid container div" style={{ flexGrow: 1 }}>
        { content }
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesSelected,
    questionsByCategory: state.questionsByCategory
  }
}

export default connect(mapStateToProps,
  { fetchQuestions }
)(QuestionsList)
