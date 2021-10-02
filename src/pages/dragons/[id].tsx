import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Container, Flex, Heading } from '@chakra-ui/react';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';
import DragonDetails from '../../components/DragonDetails';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function DragonPage() {
  const router = useRouter();

  const { id } = router.query;

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
        <BackButton onClick={() => router.push('/')} />
      </Flex>
      <Flex as="section">
        <DragonDetails dragonID={id} />
      </Flex>
    </Container>
  );
}
