const BASE_URL = 'http://localhost:8080';

export const CROP_ENDPOINT = `${BASE_URL}/crop`;
export const getCropByIdEndpoint = (id: number) => `${CROP_ENDPOINT}/${id}`;
