/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
// import Task from '../Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Column(props) {
  return (
    <div className={classes.column}>
      <div className={classes.columnHeader}>
        <h2>{props.columnHeaderText}</h2>
      </div>
      <div className={classes.tasks}>{props.tasks}</div>
    </div>
  );
}

// Column.propTypes = {
//   columnHeaderText: PropTypes.string.isRequired,
// };

export default Column;
