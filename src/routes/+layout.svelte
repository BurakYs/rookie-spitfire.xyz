<svelte:head>
    <title>{config.bot.name}</title>
    <meta name="og:title" content={config.bot.name}>
    <meta name="og:description" content={config.bot.description}>
    <meta name="og:image" content="/assets/botavatar.png">
    <meta name="og:url" content={$page.url.href}>
    <meta name="twitter:description" content={config.bot.description}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content={config.bot.color}>
    <link rel="icon" type="image/png" href="/assets/botavatar.png">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import '$lib/styles/index.css';
  import '$lib/styles/navbar.css';
  import '$lib/styles/other.css';

  import { onMount } from 'svelte';
  import config from '$config';
  import Navbar from '$lib/components/Navbar.svelte';
  import { page } from '$app/stores';

  const selectQuery = (query: string) => document.querySelector(query)! as HTMLElement;

  function openMenu() {
    if (selectQuery('.burgericon').id === 'menuopened') {
      selectQuery('.responsivemenu').style.display = 'none';
      selectQuery('.burgericon').id = 'menuclosed';
      selectQuery('body, html').style.overflow = 'auto';
    } else {
      selectQuery('body, html').style.overflow = 'hidden';
      selectQuery('.responsivemenu').style.display = 'flex';
      selectQuery('.burgericon').id = 'menuopened';
    }
  }

  onMount(() => {
    selectQuery('.burgericon')?.addEventListener('click', openMenu);
    selectQuery('.closemenu')?.addEventListener('click', openMenu);

    window.onclick = function (e) {
      let modalArea = selectQuery('.modalarea');
      let modalButton = selectQuery('.modalbutton');
      let modalIban = selectQuery('.modaliban');
      let modalIbanIndex = selectQuery('.modalibanindex');
      let ibanFlex = selectQuery('.ibanflex');

      if (e.target === selectQuery('.menuback')) {
        selectQuery('.responsivemenu').style.display = 'none';
        selectQuery('.burgericon').id = 'menuclosed';
        selectQuery('body, html').style.overflow = 'auto';
      }

      if (e.target === modalArea || e.target === modalButton) {
        selectQuery('.inspectmodal').remove();
        Object.assign(document.body.style, { style: {} });
      }

      if ([modalIban, modalIbanIndex, ibanFlex].includes(e.target as HTMLElement)) {
        navigator.clipboard.writeText(modalIbanIndex.innerHTML);
        selectQuery('.clipboardtext').style.color = '#41CE6D';
        selectQuery('.clipboardtext').innerHTML = 'Copied! Thank you for your support!';
      }
    };
  });
</script>

<div class="navbarcontainer">
    <Navbar/>
</div>
<slot/>