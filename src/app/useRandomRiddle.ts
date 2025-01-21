import {
  createClientAdapter
} from './common/adapter/ClientAdapterFactory';

export const useRandomRiddle = createClientAdapter({
  name: 'get-random-riddle',
  callback: async () => {
    const response = await fetch('http://localhost:3000/api/random-riddle');

    return response.json();
  }
})