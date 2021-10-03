import { useRouter } from 'next/router';
import { Container, Flex } from '@chakra-ui/react';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';
import DragonDetails from '../../components/DragonDetails';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

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
        <Logo onClick={() => Router.push('/dragons')} />
        <BackButton onClick={() => router.push('/dragons')} />
      </Flex>
      <Flex as="section">
        <DragonDetails dragonID={id} />
      </Flex>
    </Container>
  );
}

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
