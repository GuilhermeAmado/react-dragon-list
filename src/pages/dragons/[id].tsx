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

  const { isLoading, error, data } = useQuery('dragonsList', () =>
    fetch(
      'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id
    ).then((res) => res.json())
  );

  if (isLoading) return <LoadingIndicator />;

  if (error) return <Heading>An error has occurred</Heading>;

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
        <BackButton onClick={() => router.back()} />
      </Flex>
      <Flex as="section">
        <DragonDetails dragon={data} />
      </Flex>
    </Container>
  );
}
