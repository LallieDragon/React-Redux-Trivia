import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

import { fetchCategories } from '../actions';
import CheckboxList from './common/CheckboxList';

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderList() {
    return (
      <CheckboxList categories={this.props.categories} />
    )
}


  render() {
    var content = []
    if (typeof this.props.categories !== 'undefined' ) {
      content = this.renderList();
    }

    return(
      <div>
        <h1>Trivia with React-Redux</h1>
        <div>
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
  { fetchCategories }
)(CategoryList)
