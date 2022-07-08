<script lang="ts">
  import { Tile, Button, Icon } from '$components';
  import { gridData, winState, currentPlayer } from '$stores';

  const onResetClick = () => {
    gridData.reset()
    winState.reset()
  }
</script>

<div class="flex justify-center items-center gap-2 h-[15vw] max-h-40 w-[30vw] max-w-[20rem]">
  {#if !$winState?.length}
    <Icon icon={'x'} size={'50px'} color={$currentPlayer === 'x' ? '#10b981' : '#e11d48'} />
    <Icon icon={'o'} size={'50px'} color={$currentPlayer === 'o' ? '#10b981' : '#e11d48'} />
  {:else}
    <Icon icon={$currentPlayer === 'x' ? 'o' : 'x'} size={'50px'} color={'#fff'} />
    <Icon icon={'a'} size={'50px'} color={'#10b981'} />
  {/if}
</div>

<div class="grid grid-cols-3 gap-1 bg-teal">
  {#each $gridData as { player, index } (index)}
    <Tile {player} {index} />
  {/each}
</div>

<Button on:click={onResetClick} >
  <Icon slot="before" icon={'r'} size={'50px'} color={'#fff'} classes={"hover:rotate-180 transition-transform"} />
</Button>