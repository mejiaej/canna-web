import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { CROP_ENDPOINT } from '../../../config/end-points';
import { Card } from '../../common/Card';
import { Grid, Container, makeStyles, Theme } from '@material-ui/core';
import { CROP_PATH } from '../../../config/paths';

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

interface Crop {
  id: number;
  name: string;
  imageUrl: string;
}

export const CropList = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const { data: responseCrops } = await Axios.get(CROP_ENDPOINT);      
      setCrops(responseCrops);
    };

    fetchData();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {crops.map((crop) => (
          <Card
            key={crop.id}
            header={crop.name}
            description="This is a media card. You can use this section to describe the
          content."
            imageUrl={crop.imageUrl}
            linkUrl={`${CROP_PATH}/${crop.id}`}
            imageTitle={crop.name}
          />
        ))}
      </Grid>
    </Container>
  );
};
