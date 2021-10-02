import {
  Box,
  Center,
  Divider,
  Flex,
  Img,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import parseDate from '../helpers/parseDate';
import { MagicDragon } from './Dragon';

const DragonDetails = ({ dragon }) => {
  const { createdAt, name, type, histories, id, avatar } = dragon;
  console.log(dragon);
  return (
    <Box as="section" py="12">
      <Box maxW="100%" mx="auto">
        <Flex align="center" direction="column">
          <Box flex="1" pos="relative" maxWidth="100%">
            <Img
              w="full"
              h="full"
              objectFit="cover"
              alt=""
              loading="lazy"
              rounded="4px"
              overflow="hidden"
              src={avatar}
            />
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
