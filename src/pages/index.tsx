import Logo from '../components/Logo';
import { useQuery } from 'react-query';
import DragonList from '../components/DragonList';

export default function Home() {
  return (
    <>
      <Logo />
      <DragonList />
    </>
  );
}
