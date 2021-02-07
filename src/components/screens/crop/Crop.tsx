import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useParams } from 'react-router-dom';
import { getCropByIdEndpoint } from '../../../config/end-points';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingBottom: '5rem',
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

  breadCrumbs: {
    margin: '1rem 0.5rem',
    [theme.breakpoints.up('md')]: {
      margin: '2rem 1rem',
    },
  }
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
    <>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography color="textPrimary">{crop.name}</Typography>
        </Breadcrumbs>
      </div>
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
    </>
  );
};
