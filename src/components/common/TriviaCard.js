import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';

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
  cardButton: {

  },
})

const TriviaCard = (props) => {

  const handleSelect = (question) => {
    console.log(question)
  }

  const classes = useStyles();

  const renderCard = () => {
    return(
      <Card variant="outlined" onClick={() => props.onClick(props.question)}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.pos} color="textSecondary">
              {props.question.difficulty}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.question.category}
            </Typography>
          </CardContent>
        </CardActionArea>
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
