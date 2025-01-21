'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRandomRiddle } from './useRandomRiddle';

export const RandomRiddleEntryControl = () => {
  const router = useRouter();
  const [id, setId] = useState<string>();
  const { getData } = useRandomRiddle();
  const handleClick = () => {
    router.push(`/riddle/${id}`);
  }

  useEffect(() => {
    async function getRandomRiddle() {
      const riddle = await getData();

      setId(riddle.id);

    }

    getRandomRiddle();
  }, []);

  return (
    <button
      data-test={id ? 'random-riddle-control' : undefined}
      onClick={handleClick}
      className="border border-blue-500 p-5"
    >
      Resolve random riddle
    </button>
  );
};