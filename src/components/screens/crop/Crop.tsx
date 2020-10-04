import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCropByIdEndpoint } from '../../../config/end-points';

export const Crop = () => {
  const [crop, setCrop] = useState(null);
  //@ts-ignore
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data: responseCrop } = await Axios.get(getCropByIdEndpoint(id));
      setCrop(responseCrop);
    };

    fetchData();
  }, []);

  if(!crop) {
    return null;
  }

  return (
    //@ts-ignore
    <img src={crop.imageUrl} />
  );
};
