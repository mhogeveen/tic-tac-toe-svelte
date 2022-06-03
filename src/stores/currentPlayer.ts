import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const createPlayerStore = () => {
  const { subscribe, update, set }: Writable<string> = writable('x');

  return {
    subscribe,
    switchPlayer: () => update((player) => player === 'x' ? 'o' : 'x'),
    reset: () => set('x')
  }
}

export const currentPlayer = createPlayerStore();