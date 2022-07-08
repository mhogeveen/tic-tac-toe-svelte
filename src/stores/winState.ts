import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const createWinStateStore = () => {
  const { subscribe, update, set }: Writable<number[] | null> = writable(null);

  return {
    subscribe,
    update,
    setWinners: (value: number[]) => set(value),
    reset: () => set(null)
  }
}

export const winState = createWinStateStore();