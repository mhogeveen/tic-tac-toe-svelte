<script lang="ts">
  import { gridData, winState } from '$stores';
  import { Icon } from '$components';
  import { hasWon } from '$utils';

  export let player: string | null;
  export let index: number;

  const onTileClick = () => {
    gridData.setTilePlayer(index)
    const winStateCheck = hasWon($gridData)
    if (winStateCheck.gameOver) {
      winState.setWinners(winStateCheck.winningTiles)
    }
  }
</script>

<div
  class="h-[15vw] max-h-40 w-[15vw] max-w-[10rem] bg-dark grid place-items-center outline-4 outline-transparent outline-offset-[-8px] outline transition-all"
  class:cursor-pointer={!player}
  class:hover:outline-green={!player}
  class:outline-green={$winState?.includes(index)}
  class:pointer-events-none={$winState?.length}
  on:click={onTileClick}
>
  {#if player}
    <Icon icon={player} size={'50%'} color={'#fff'} />
  {/if}
</div>