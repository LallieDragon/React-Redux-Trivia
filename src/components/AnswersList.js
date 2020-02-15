import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

import AnswerSelectionCard from './common/AnswerSelectionCard';

class AnswersList extends React.Component {
  render() {
    const allAnswers = this.props.selectedQuestion.allAnswers;
    const question = this.props.selectedQuestion.question;
    return(
      <Card  variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            { question.category }
          </Typography>
          <Typography variant="h5" component="h2">
            { question.question }
          </Typography>
          <Typography color="textSecondary">
            { question.difficulty }
          </Typography>
          <Card>
            <CardActionArea>
              <Grid container spacing={2} style={{ flexGrow: 1 }}>
                <AnswerSelectionCard allAnswers={allAnswers} />
              </Grid>
            </CardActionArea>
          </Card>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AnswersList)
