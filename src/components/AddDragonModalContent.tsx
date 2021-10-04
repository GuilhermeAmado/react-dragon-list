import { useRef, useState } from 'react';
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Switch,
} from '@chakra-ui/react';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

const AddDragonModalContent = ({ isOpen, onOpen, onClose }) => {
  const [createRandomDragon, setCreateRandomDragon] = useState(false);

  const queryClient = useQueryClient();
  const dragonNameRef = useRef<HTMLInputElement>();
  const dragonTypeRef = useRef<HTMLInputElement>();

  const createDragon: UseMutationResult = useMutation(
    (event: React.FormEvent) => {
      event.preventDefault();
      return fetch(
        `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`,
        {
          method: 'POST',
          ...(!createRandomDragon && {
            body: JSON.stringify({
              name: dragonNameRef.current.value,
              type: dragonTypeRef.current.value,
            }),
          }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('dragonsList');
        onClose();
      },
    }
  );
  return (
    <ModalContent>
      <ModalHeader>Add a new Dragon</ModalHeader>
      <ModalCloseButton disabled={createDragon.isLoading} />
      <form onSubmit={createDragon.mutate}>
        <ModalBody>
          <VStack spacing="3">
            <FormControl id="dragon-name" isRequired={!createRandomDragon}>
              <FormLabel>Dragon Name</FormLabel>
              <Input
                ref={dragonNameRef}
                type="text"
                disabled={createRandomDragon}
                placeholder={createRandomDragon ? 'Random Name' : ''}
                _focus={{ borderColor: 'primary' }}
                _disabled={{
                  backgroundColor: 'gray.100',
                  cursor: 'not-allowed',
                }}
              />
            </FormControl>
            <FormControl id="dragon-type" isRequired={!createRandomDragon}>
              <FormLabel>Dragon Type</FormLabel>
              <Input
                ref={dragonTypeRef}
                type="text"
                disabled={createRandomDragon}
                placeholder={createRandomDragon ? 'Random Type' : ''}
                _focus={{ borderColor: 'primary' }}
                _disabled={{
                  backgroundColor: 'gray.100',
                  cursor: 'not-allowed',
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="random-dragon" mb="0">
                Create a Random Dragon
              </FormLabel>
              <Switch
                id="random-dragon"
                colorScheme="orange"
                onChange={(e) => setCreateRandomDragon(e.currentTarget.checked)}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="primary"
            color="yellow.100"
            _hover={{ backgroundColor: 'brown.700', color: 'yellow.200' }}
            _active={{ backgroundColor: 'brown.900' }}
            mr={3}
            type="submit"
            disabled={createDragon.isLoading}
          >
            Save Dragon
          </Button>
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={createDragon.isLoading}
          >
            Close
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default AddDragonModalContent;
