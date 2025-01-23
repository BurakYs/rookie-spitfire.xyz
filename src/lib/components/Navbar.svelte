<script lang="ts">
  import { onMount } from 'svelte';
  import config from '$lib/config';

  let scrolled = $state(false);
  let sidebarOpen = $state(false);

  const navbarItems = [
    { name: 'Features', href: '#features' },
    { name: 'Stats', href: '#stats' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Support Server', href: config.supportServer, target: '_blank' }
  ];

  onMount(() => {
    function handleScroll() {
      scrolled = window.scrollY > 20;
    }

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const sidebar = document.querySelector('.nav-links');
      const button = document.querySelector('.sidebar-toggle');

      if (sidebarOpen && sidebar && !sidebar.contains(target) && button && !button.contains(target)) {
        sidebarOpen = false;
      }
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  });

  $effect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
  });

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

  function closeSidebar() {
    sidebarOpen = false;
  }
</script>

<nav class="navbar" class:scrolled>
  <div class="container">
    <a href="/" class="logo">
      <img src="/logo-64.png" alt="Bot Logo"/>
      <span>{config.name}</span>
    </a>
    <button class="sidebar-toggle" onclick={toggleSidebar} aria-label="Toggle sidebar">
      <span class="hamburger" class:active={sidebarOpen}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    <div class="nav-links" class:open={sidebarOpen}>
      <div class="nav-backdrop" class:visible={sidebarOpen} onclick={closeSidebar} onkeydown={closeSidebar}
           role="button" tabindex="0" aria-label="Close sidebar"></div>
      <div class="nav-content">
        <button class="close-button" onclick={closeSidebar} aria-label="Close sidebar">&times;</button>
        {#each navbarItems as item}
          <a
            href={item.href}
            target={item.target}
            onclick={closeSidebar}
          >
            {item.name}
          </a>
        {/each}
      </div>
    </div>
  </div>
</nav>

{#if sidebarOpen}
  <div class="mobile-nav-overlay" onclick={closeSidebar} onkeydown={closeSidebar} role="button" tabindex="0"></div>
{/if}

<style lang="scss">
  @use "$lib/styles/variables";
  @use "$lib/styles/functions" as *;

  .mobile-nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(variables.$bg-dark, 0.8);
    backdrop-filter: blur(4px);
    z-index: 90;
    animation: fadeIn 0.3s ease-out;
  }

  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
    transition: all variables.$transition-speed;
    background: transparent;
    backdrop-filter: blur(8px);

    &.scrolled {
      background: variables.$navbar-bg;
      padding: 0.75rem 0;
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 variables.$container-padding;
      max-width: variables.$max-width;
      margin: 0 auto;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: variables.$font-size-lg;
      font-weight: 600;
      color: variables.$text-primary;
      transition: color variables.$transition-speed;

      img {
        height: 1.75rem;
        border-radius: 100%;
      }
    }

    .sidebar-toggle {
      display: none;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;

      .hamburger {
        width: toRem(24px);
        height: toRem(20px);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          display: block;
          width: 100%;
          height: toRem(2px);
          background: variables.$text-primary;
          transition: all variables.$transition-speed;
          transform-origin: left center;
        }
      }
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      .nav-content {
        display: flex;
        gap: 1.5rem;

        .close-button {
          visibility: hidden;
        }

        a {
          color: variables.$text-primary;
          font-size: variables.$font-size-small;
          font-weight: 500;
          transition: color variables.$transition-speed;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          &:hover {
            color: variables.$primary-color;
          }
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: variables.$mobile) {
    .navbar {
      .sidebar-toggle {
        display: block;
      }

      .nav-links {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        pointer-events: none;

        &.open {
          display: flex;
          pointer-events: auto;

          .nav-content {
            transform: translateX(0);
          }
        }

        .nav-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 70%;
          height: 100vh;
          max-width: toRem(300px);
          background: variables.$bg-dark;
          padding: 5rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform variables.$transition-speed;
          animation: slideIn 0.3s ease-out;
        }

        .close-button {
          visibility: visible !important;
          position: absolute;
          top: 1rem;
          right: 2.25rem;
          background: none;
          border: none;
          font-size: 2rem;
          color: variables.$text-primary;
          cursor: pointer;
        }

        a {
          width: 100%;
          padding: 0.75rem 0;
          font-size: variables.$font-size-base;
          border-bottom: 1px solid rgba(variables.$text-secondary, 0.1);

          &:hover {
            padding-left: toRem(10px);
          }
        }
      }
    }
  }
</style>