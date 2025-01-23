<script lang="ts">
  import Hero from '$components/Hero.svelte';
  import Features from '$components/Features.svelte';
  import Stats from '$components/Stats.svelte';
  import FAQ from '$components/FAQ.svelte';
  import config from '$lib/config';
</script>

<svelte:head>
    <title>{config.name}</title>
</svelte:head>

<Hero/>
<Features/>
<Stats/>
<FAQ/>