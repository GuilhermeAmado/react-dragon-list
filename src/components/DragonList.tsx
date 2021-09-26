import { Button } from '@chakra-ui/button';
import { Box, SimpleGrid } from '@chakra-ui/layout';
import { useQuery } from 'react-query';
import Dragon from './Dragon';

interface MagicDragon {
  createdAt: string;
  name: string;
  type: string;
  histories?: string[];
  id: string;
  avatar: string;
}

export default function DragonList() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon').then(
      (res) => res.json()
    )
  );

  if (isLoading) return <h3>Loading</h3>;

  if (error) return <h3>An error has occurred</h3>;

  return (
    <>
      <Box as="section" mt="8" maxW={{ base: 'xs', md: '3xl' }} mx="auto">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {data.map((dragon: MagicDragon) => {
            return <Dragon key={dragon.id} dragon={dragon} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
