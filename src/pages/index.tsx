import Logo from '../components/Logo';
import { useQuery } from 'react-query';
import DragonList from '../components/DragonList';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Flex as="header" justifyContent="center" my="5">
        <Logo />
      </Flex>
      <DragonList />
    </>
  );
}
