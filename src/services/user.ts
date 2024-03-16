import { api } from '../data/api';

export const getUser = async () => {
  return await api.get('');
};

export const getRepos = async () => {
  return await api.get('/repos');
};
