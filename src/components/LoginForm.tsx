import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { PasswordField } from './PasswordField';

export const LoginForm = (props: HTMLChakraProps<'form'>) => {
  const { signIn, isLoading } = useContext(AuthContext);
  const { handleSubmit } = useForm();

  async function handleSignIn(data) {
    try {
      await signIn(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <chakra.form onSubmit={handleSubmit(handleSignIn)} {...props}>
      <Stack spacing="6">
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            bg="gray.50"
            name="username"
            type="text"
            autoComplete="username"
            _focus={{ borderColor: 'primary' }}
            required
          />
        </FormControl>
        <PasswordField />
        <Button
          disabled={isLoading}
          type="submit"
          size="lg"
          fontSize="md"
          bg="primary"
          color="yellow.100"
          _hover={{ backgroundColor: 'brown.700', color: 'yellow.200' }}
          _active={{ backgroundColor: 'brown.900' }}
        >
          Enter
        </Button>
      </Stack>
    </chakra.form>
  );
};
