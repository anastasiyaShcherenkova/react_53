import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Task({ taskTitle, taskDescription, taskAssigned }) {
  return (
    <div className={classes.task}>
      <h3 className={classes.taskTitle}>{taskTitle}</h3>
      <p className={classes.taskDescription}>{taskDescription}</p>
      <p className={classes.taskAssigned}>{taskAssigned}</p>
    </div>
  );
}

Task.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  taskAssigned: PropTypes.string,
};

export default Task;
