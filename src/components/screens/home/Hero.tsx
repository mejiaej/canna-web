import React from 'react';
import { Container, Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Crops
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Get to choose from our select variety of crops at one click.
        </Typography>
      </Container>
    </div>
  );
};
