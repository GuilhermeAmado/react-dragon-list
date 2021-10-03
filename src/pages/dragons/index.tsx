import { Container, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import AddDragonButton from '../../components/AddDragonButton';
import DragonList from '../../components/DragonList';
import Logo from '../../components/Logo';
import Router from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';

const DragonsPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <h1>You seem lost, friend...</h1>;

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
