import { Box, Flex, Img, Stack, Heading, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import parseDate from '../helpers/parseDate';
import LoadingIndicator from './LoadingIndicator';

const DragonDetails = ({ dragonID }) => {
  const [isPending, setIsPending] = useState(true);
  const { error, data } = useQuery(
    `getSingleDragon${dragonID}`,
    () =>
      fetch(
        `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonID}`
      ).then((res) => res.json()),
    { onSuccess: () => setIsPending(false) }
  );

  if (isPending) return <LoadingIndicator />;

  if (!data) return <h1>Dragon Not Found</h1>;

  const { createdAt, name, type, histories, id, avatar } = data;

  return (
    <Box as="section" mb="8">
      <Box maxW="100%" mx="auto">
        <Flex align="center" direction="column">
          <Box flex="1" pos="relative" maxWidth="100%">
            {avatar && (
              <Img
                w="full"
                h="full"
                objectFit="cover"
                alt={name}
                loading="lazy"
                rounded="6px"
                overflow="hidden"
                src={avatar}
              />
            )}
          </Box>

          <Box flex="1" mt={{ base: '8', md: '0' }}>
            <Stack
              align={{ base: 'flex-start', lg: 'center' }}
              direction="column"
              spacing={{ base: '2', lg: '4' }}
              marginTop="4"
            >
              <Box as="h5" color="gray.500" fontSize="lg">
                {type}
              </Box>

              <Heading>{name}</Heading>
            </Stack>
            <Box mt="4" fontSize={{ base: 'xl', lg: '2xl' }} as="blockquote">
              <Text as="strong">Bio:&nbsp;</Text>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.&quot;
            </Box>
            <Text fontSize="10px" align="center" marginTop="8">
              <Text as="span" fontWeight="bold">
                Created at&nbsp;
              </Text>
              {parseDate(createdAt)}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DragonDetails;
