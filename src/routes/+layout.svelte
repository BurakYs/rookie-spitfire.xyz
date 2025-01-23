<script lang="ts">
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';

  import config from '$lib/config';
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>{config.name}</title>
  <meta name="description" content={config.description}>
  <meta name="og:title" content={config.name}>
  <meta name="og:description" content={config.description}>
  <meta name="og:image" content="/assets/botavatar.png">
  <meta name="twitter:description" content={config.description}>
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="/logo-32.png">
</svelte:head>

<Navbar/>
<main>
  {@render children()}
</main>
<Footer/>

<style lang="scss">
  @use "$lib/styles/variables";

  :global(body) {
    background-color: variables.$bg-dark;
    color: variables.$text-primary;
    font-family: variables.$font-primary;
    line-height: 1.6;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  :global(.app) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :global(button) {
    -webkit-tap-highlight-color: transparent;
  }

  main {
    flex: 1;
  }
</style>