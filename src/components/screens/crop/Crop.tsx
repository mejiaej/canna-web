import { makeStyles } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCropByIdEndpoint } from '../../../config/end-points';

const useStyles = makeStyles((theme) => ({
  crop: {
    height: 'auto',
    width: '100%',
    [theme.breakpoints.up('md')]: { 
      width: '60%',
    },
  }
}));

export const Crop = () => {
  const classes = useStyles();

  const [crop, setCrop] = useState(null);
  //@ts-ignore
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data: responseCrop } = await Axios.get(getCropByIdEndpoint(id));
      setCrop(responseCrop);
    };

    fetchData();
  }, [id]);

  if(!crop) {
    return null;
  }

  return (
    //@ts-ignore
    <img className={classes.crop} src={crop.imageUrl} alt="crop" />
  );
};
