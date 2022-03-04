import axios from 'axios';

const API = axios.create({
  baseURL: 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68',
});

export const fetchProducts = () => {
  return API.get(`/`);
};
