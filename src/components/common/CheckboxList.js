import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CheckboxList = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleSubmit = checked => {
    if (checked.length === 4) {
      for (let i = 0; i < checked.length; i++) {
        props.onQuestionsSelected(checked[i].id, checked[i].name)
      }
    }
  }

  const handleToggle = category => () => {
    const currentIndex = checked.indexOf(category);
    const newChecked = [...checked];

    if (newChecked.length < 4) {
      if (currentIndex === -1) {
        newChecked.push(category);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
      handleSubmit(newChecked)
    }
  };



  return (
    <div>
      <List className={classes.list}>
        {props.categories.map(category => {
          const labelId = `checkbox-list-label-${category.id}`;
          return (
            <ListItem key={category.id} role={undefined} dense button onClick={handleToggle(category)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(category) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${category.name}`} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default CheckboxList;
