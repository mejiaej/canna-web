import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
