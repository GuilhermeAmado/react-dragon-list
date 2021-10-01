import { useRef, useEffect } from 'react';
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

const EditDragonModalContent = ({ isOpen, onOpen, onClose, dragon }) => {
  const queryClient = useQueryClient();
  const dragonNameRef = useRef<HTMLInputElement>();
  const dragonTypeRef = useRef<HTMLInputElement>();

  const createDragon: UseMutationResult = useMutation(
    (event: React.FormEvent) => {
      event.preventDefault();
      return fetch(
        `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            ...dragon,
            name: dragonNameRef.current.value,
            type: dragonTypeRef.current.value,
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

  useEffect(() => {
    dragonNameRef.current.value = dragon.name;
    dragonTypeRef.current.value = dragon.type;
  }, [dragon]);

  return (
    <ModalContent>
      <ModalHeader>Edit Dragon</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={createDragon.mutate}>
        <ModalBody>
          <VStack spacing="3">
            <FormControl id="dragon-name" isRequired>
              <FormLabel>Dragon Name</FormLabel>
              <Input
                ref={dragonNameRef}
                type="text"
                _focus={{ borderColor: 'primary' }}
              />
            </FormControl>
            <FormControl id="dragon-type" isRequired>
              <FormLabel>Dragon Type</FormLabel>
              <Input
                ref={dragonTypeRef}
                type="text"
                _focus={{ borderColor: 'primary' }}
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
          >
            Save Dragon
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default EditDragonModalContent;
