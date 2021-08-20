import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Header</div>
    </div>
  );
}

export default Header;
