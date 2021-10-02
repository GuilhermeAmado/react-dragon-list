import Logo from '../components/Logo';
import DragonList from '../components/DragonList';
import { Flex, Container } from '@chakra-ui/react';
import AddDragonButton from '../components/AddDragonButton';

export default function Home() {
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
        <Logo />
        <AddDragonButton />
      </Flex>
      <DragonList />
    </Container>
  );
}
