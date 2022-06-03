import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

import { currentPlayer } from '$stores';

export interface TileDataInterface {
  player: string | null;
  index: number;
}

const createGridData = () => Array.from({ length: 9 }, (_, index) => ({ player: null, index }));

const createGridStore = () => {
  const { subscribe, update, set}: Writable<TileDataInterface[]> = writable(createGridData());

  return {
    subscribe,
    setTilePlayer: (index: number) => update((value) => {
      if (value[index].player) return value
      value[index].player = get(currentPlayer)
      currentPlayer.switchPlayer()
      return value;
    }),
    reset: () => {
      set(createGridData())
      currentPlayer.reset()
    }
  }
}

export const gridData = createGridStore();
