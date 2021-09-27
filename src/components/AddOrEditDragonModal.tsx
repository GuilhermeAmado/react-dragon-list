import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

export default function AddOrEditDragonModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add or edit Dragon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Coming soon...</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="primary"
              color="yellow.100"
              _hover={{ backgroundColor: 'brown.700', color: 'yellow.200' }}
              _active={{ backgroundColor: 'brown.900' }}
              mr={3}
              onClick={onClose}
            >
              Save Dragon
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
