import Logo from '../components/Logo';
import { useQuery } from 'react-query';
import DragonList from '../components/DragonList';
import { Flex } from '@chakra-ui/react';
import AddDragonButton from '../components/AddDragonButton';

export default function Home() {
  return (
    <>
      <Flex
        as="header"
        justifyContent="space-between"
        my="5"
        maxWidth="768px"
        mx="auto"
        wrap="wrap"
      >
        <Logo />
        <AddDragonButton />
      </Flex>
      <DragonList />
    </>
  );
}
