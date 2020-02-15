import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AnswerSelectionCard = (props) => {
  // const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleSelect = answer => {
    const currentIndex = checked.indexOf(answer);
    const newChecked = [...checked];

    if (newChecked.length < 1) {
      if (currentIndex === -1) {
        newChecked.push(answer);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    }
  };

  const renderAnswerOption = () => {
    let options = props.allAnswers.map((answer, index) => {
      const labelId = `checkbox-list-label-${index}`;
      return (
        <ListItem key={index} role={undefined} dense button onClick={() => handleSelect(answer)}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(answer) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={`${answer}`} />
        </ListItem>
      );
    })
    return options;
  }

  return (
    <div>
      {renderAnswerOption()}
    </div>
  );
}

export default AnswerSelectionCard;
