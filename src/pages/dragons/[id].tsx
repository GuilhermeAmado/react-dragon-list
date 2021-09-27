import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function DragonDetails({ dragonData }) {
  const [isPending, setIsPending] = useState(true);
  const router = useRouter();

  const { id } = router.query;

  // if (isPending) return <LoadingIndicator />;

  return <h1>dragon # {id}</h1>;
}
