import { Repo as RepoType } from '../../pages/Blog/types';
import { DivDate, DivName, Header, Title } from './styles';

type RepoReturn = {
  repo: RepoType;
};

export const Repo = ({ repo }: RepoReturn) => {
  const date = new Date(repo.created_at).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <>
      <Title>{repo.full_name}</Title>
      <Header>
        <DivName>{repo.name}</DivName>
        <DivDate>{date}</DivDate>
      </Header>
    </>
  );
};
