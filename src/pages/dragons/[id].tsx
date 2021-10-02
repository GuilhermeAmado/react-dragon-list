import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Flex } from '@chakra-ui/react';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';

export default function DragonDetails({ dragonData }) {
  const [isPending, setIsPending] = useState(true);
  const router = useRouter();

  const { id } = router.query;

  // if (isPending) return <LoadingIndicator />;

  return (
    <Container maxWidth="100%">
      <Flex
        as="header"
        justifyContent={{ base: 'space-between' }}
        alignItems="center"
        my="5"
        maxWidth="768px"
        mx="auto"
        wrap="wrap"
      >
        <Logo />
        <BackButton onClick={() => router.push('/')} />
      </Flex>
    </Container>
  );
}
