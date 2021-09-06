import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Link } from 'react-router-dom';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <div className={classes.side}>
      <ul>
        <li>
          <Link to="/kanbanBoard" className={classes.link}>
            Kanban-board
          </Link>
        </li>
        <li>
          <Link to="/ticTacToe" className={classes.link}>
            Tic tac Toe
          </Link>
        </li>
        <li>
          <Link to="/pep" className={classes.link}>
            pep
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Side;
