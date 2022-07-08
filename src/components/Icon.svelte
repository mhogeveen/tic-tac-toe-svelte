<script lang="ts">
  import { Times, Circle, Award, Repeat } from './icons';
  import type { SvelteComponent } from 'svelte';

  export let icon: string;
  export let color: string = '#000';
  export let size: string = '20px';
  export let classes: string = '';

  interface Icons {
    [key: string]: typeof SvelteComponent;
  }

  const icons: Icons = {
    'x': Times,
    'o': Circle,
    'a': Award,
    'r': Repeat
  }
</script>

<svelte:component this={ icons[icon] } {color} {size} {classes} />