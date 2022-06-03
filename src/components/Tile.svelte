<script lang="ts">
  import { gridData } from '$stores';
  import { Icon } from '$components';

  export let player: string | null;
  export let index: number;
</script>

<div
  class="h-[15vw] max-h-40 w-[15vw] max-w-[10rem] bg-dark grid place-items-center outline-4 outline-transparent outline-offset-[-8px] outline {!player ? 'hover:outline-green' : ''} transition-all"
  class:cursor-pointer={!player}
  on:click={() => gridData.setTilePlayer(index)}
>
  {#if player}
    <Icon icon={player} size={'50%'} color={'#fff'} />
  {/if}
</div>