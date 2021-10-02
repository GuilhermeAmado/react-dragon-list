import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Dragon from './Dragon';
import LoadingIndicator from './LoadingIndicator';
import sortByName from '../helpers/sortByName';
import { MagicDragon } from './Dragon';

export default function DragonList() {
  const { isLoading, error, data } = useQuery('dragonsList', () =>
    fetch('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/').then(
      (res) => res.json()
    )
  );

  let dragonsSortedByName: MagicDragon[] = [];

  if (!isLoading && data && data[0]?.name) {
    dragonsSortedByName = sortByName(data);
  }

  if (isLoading) return <LoadingIndicator />;

  if (error) return <Heading>An error has occurred</Heading>;

  return (
    <>
      <Box as="section" my="8" maxW={{ base: 'xs', md: '3xl' }} mx="auto">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {dragonsSortedByName.map((dragon: MagicDragon) => {
            return <Dragon key={dragon.id} dragon={dragon} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
