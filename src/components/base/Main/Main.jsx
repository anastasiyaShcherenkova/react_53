import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Switch, Route } from 'react-router-dom';
import styles from './styles';
import Board from '../../Board';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      {/* <Board /> */}
      <Switch>
        <Route path="/kanbanBoard">
          <Board />
        </Route>
        <Route path="/TicTacToe">Tic tac toe</Route>
        <Route path="/pep">pep</Route>
      </Switch>
    </div>
  );
}

export default Main;
