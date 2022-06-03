<script lang="ts">
  import { Tile, Button } from '$components';
  import { gridData } from '$stores';
</script>

<div class="grid grid-cols-3 gap-1 bg-teal">
  {#each $gridData as { player, index } (index)}
    <Tile {player} {index} />
  {/each}
</div>

<Button text={'reset'} on:click={() => gridData.reset()} />