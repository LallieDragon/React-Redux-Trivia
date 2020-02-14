import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridItem: {
    width: '20%',
    margin: '0 0 0 0',
  },
});

const TriviaCard = (props) => {
  const classes = useStyles();

  const renderCard = () => {
    return(
      <Card variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
            {props.question.difficulty}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.question.category}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  var card = renderCard();

  return (
    <Grid item xs={3} className={classes.gridItem} id="grid item">
      { card }
    </Grid>
  );
}

export default TriviaCard;
