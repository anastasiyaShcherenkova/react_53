/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Column from '../Column';
import Task from '../Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Board() {
  const columnToDo = [<Task taskTitle="Title 1" taskDescription="description1" taskAssigned="developer1" key="1" />,
    <Task taskTitle="Title2" taskDescription="description2" taskAssigned="developer2" key="2" />];
  const columnInProgress = [<Task taskTitle="Title 3" taskDescription="description3" taskAssigned="developer3" key="3" />,
    <Task taskTitle="Title3" taskDescription="description3" taskAssigned="developer3" key="3" />];
  const columnInTesting = [<Task taskTitle="Title 4" taskDescription="description4" taskAssigned="developer4" key="4" />];
  const columnDone = [<Task taskTitle="Title 5" taskDescription="description5" taskAssigned="developer5" key="5" />,
    <Task taskTitle="Title6" taskDescription="description6" taskAssigned="developer6" key="6" />,
    <Task taskTitle="Title7" taskDescription="description7" taskAssigned="developer7" key="7" />];
  return (
    <div className={classes.board}>
      <Column columnHeaderText="TO DO" tasks={columnToDo} />
      <Column columnHeaderText="IN PROGRESS" tasks={columnInProgress} />
      <Column columnHeaderText="IN TESTING" tasks={columnInTesting} />
      <Column columnHeaderText="DONE" tasks={columnDone} />
    </div>
  );
}

export default Board;
