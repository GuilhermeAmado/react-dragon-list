import { Container, Flex } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import AddDragonButton from '../../components/AddDragonButton';
import DragonList from '../../components/DragonList';
import Logo from '../../components/Logo';
import Router from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

const DragonsPage = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (!isLoading && !user) return <h1>you seem lost friend...</h1>;

  return (
    <Container maxWidth="768px" mx="auto">
      <Flex
        as="header"
        justifyContent={{ base: 'space-between' }}
        alignItems="center"
        my="5"
        mx="auto"
        wrap="wrap"
      >
        <Logo onClick={() => Router.push('/dragons')} />
        <AddDragonButton />
      </Flex>
      <DragonList />
    </Container>
  );
};

export default DragonsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['dragonsLair.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
