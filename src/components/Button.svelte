<script lang="ts">
  export let text: string | null = null;
</script>

<button on:click>
  <slot name="before" />
  {#if text}
    {text}
  {/if}
  <slot name="after" />
</button>