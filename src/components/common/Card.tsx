import React from 'react';
import {
  Typography,
  Grid,
  Card as MaterialCard,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

interface CardProps {
  header: string;
  description?: string;
  imageUrl: string;
  imageTitle: string;
  linkUrl: string;
}

export const Card = ({
  header,
  description = '',
  imageUrl,
  imageTitle,
  linkUrl,
}: CardProps) => {
  const classes = useStyles();
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MaterialCard className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {header}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button component={RouterLink} to={linkUrl} size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </MaterialCard>
    </Grid>
  );
};
