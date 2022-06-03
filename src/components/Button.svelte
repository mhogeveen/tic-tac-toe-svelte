<script lang="ts">
  export let text: string | null = null;
</script>

<button on:click>
  {#if text}
    {text}
  {/if}
</button>