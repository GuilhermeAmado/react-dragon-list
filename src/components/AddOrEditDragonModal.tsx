import { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
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
} from '@chakra-ui/react';
import { useMutation, UseMutationResult, useQuery } from 'react-query';

export default function AddOrEditDragonModal({ isOpen, onOpen, onClose }) {
  const formRef = useRef();

  const { refetch } = useQuery('dragonsList');

  const dragonNameRef = useRef<HTMLInputElement>();
  const dragonTypeRef = useRef<HTMLInputElement>();

  const createDragon: UseMutationResult = useMutation(
    (event: React.FormEvent) => {
      event.preventDefault();
      return fetch(
        `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`,
        {
          method: 'POST',
          body: JSON.stringify({
            name: dragonNameRef.current.value,
            type: dragonTypeRef.current.value,
          }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        }
      );
    },
    {
      onSuccess: () => {
        refetch();
        onClose();
      },
    }
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add or edit Dragon</ModalHeader>
          <ModalCloseButton />
          <form ref={formRef} onSubmit={createDragon.mutate}>
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
      </Modal>
    </>
  );
}
