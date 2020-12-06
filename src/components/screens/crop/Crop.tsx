import { makeStyles, Typography } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCropByIdEndpoint } from '../../../config/end-points';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: '5rem 0',
    },
  },
  cropImageContainer: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '1rem',
    },
  },
  cropImage: {
    height: 'auto',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '35rem',
    },
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cropDesc: {
    margin: '0 10px',
    [theme.breakpoints.up('md')]: {
      margin: '0 5rem',
    },
  },
}));

interface Crop {
  name: string;
  smallDesc: string;
  description: string;
  imageUrl: string;
}

export const Crop = () => {
  const classes = useStyles();

  const [crop, setCrop] = useState<Crop>();
  //@ts-ignore
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data: responseCrop } = await Axios.get(getCropByIdEndpoint(id));
      setCrop(responseCrop);
    };

    fetchData();
  }, [id]);

  if (!crop) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.cropImageContainer}>
        <img className={classes.cropImage} src={crop.imageUrl} alt="crop" />
      </div>
      <div className={classes.descContainer}>
        <Typography align="center" variant="h6" gutterBottom>
          {crop.name}
        </Typography>
        <Typography
          className={classes.cropDesc}
          align="justify"
          variant="body1"
        >
          {crop.description}
        </Typography>
      </div>
    </div>
  );
};
