import { getUser } from '../../services/user';
import {
  Avatar,
  DivAbout,
  DivDescription,
  Li,
  MenuItems,
  MenuNav,
  Ul,
  Image,
} from './styles';

import { useQuery } from 'react-query';
import { User } from './types';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const { data } = useQuery<User>('user', () =>
    getUser().then((response) => {
      return response.data;
    }),
  );

  return (
    <>
      <MenuNav>
        <MenuItems>
          <Ul>
            <Li>
              <Link to="/" className="link">
                Blog
              </Link>
            </Li>
            <Li>
              <Link to="/about" className="link">
                Sobre
              </Link>
            </Li>
            <Li>
              <Link to="/description" className="link">
                Descrição
              </Link>
            </Li>
          </Ul>
        </MenuItems>

        <DivAbout>
          <Avatar>
            <Image src={data?.avatar_url} />
          </Avatar>

          <DivDescription>
            <h1>{data?.name}</h1>
            <p>{data?.bio}</p>
          </DivDescription>
        </DivAbout>
      </MenuNav>
    </>
  );
};
