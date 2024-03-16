import { getRepos } from '../../services/user';
import { Title, Page } from './styles';

import { useQuery } from 'react-query';
import { Repo } from './types';
import { Repo as RepoDiv } from '../../components/Repo';

export const Blog = () => {
  const { data, isSuccess, isLoading } = useQuery<Repo[]>('repo', () =>
    getRepos().then((response) => {
      return response.data;
    }),
  );

  console.log('isLoading', isLoading);
  console.log('data', data);
  console.log('isSuccess', isSuccess);

  return (
    <Page>
      <Title>Repositórios</Title>

      {data &&
        data?.length > 0 &&
        isSuccess &&
        data.map((repo) => (
          <div key={repo.id}>
            <h1>ss</h1>
            <RepoDiv repo={repo} />
          </div>
        ))}
    </Page>
  );
};
