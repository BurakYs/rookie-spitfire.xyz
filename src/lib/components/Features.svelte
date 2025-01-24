<script lang="ts">
  import ChartColumn from 'lucide-svelte/icons/chart-column';
  import Gamepad2 from 'lucide-svelte/icons/gamepad-2';
  import Globe from 'lucide-svelte/icons/globe';
  import Newspaper from 'lucide-svelte/icons/newspaper';
  import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
  import Users from 'lucide-svelte/icons/users';

  const features = [
    {
      title: 'Track Stats',
      description: 'See your wins, K/D, and match history right in Discord',
      icon: ChartColumn
    },
    {
      title: 'Item Shop',
      description: 'Get notified when items you want are in the shop',
      icon: ShoppingBag
    },
    {
      title: 'View Locker',
      description: 'Show off your skins and items to your friends',
      icon: Gamepad2
    },
    {
      title: 'Fake Items',
      description: 'Prank your friends with fake locker items',
      icon: Users
    },
    {
      title: 'News & Events',
      description: 'Stay updated with the latest Fortnite news',
      icon: Newspaper
    },
    {
      title: 'Multiple Languages',
      description: 'Use the bot in your preferred language',
      icon: Globe
    }
  ];
</script>

<section id="features" class="features">
  <h2>Features</h2>
  <div class="feature-grid">
    {#each features as feature}
      <div class="feature-card">
        <svelte:component this={feature.icon} class="icon"/>
        <div class="content">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "$lib/styles/variables";
  @use "$lib/styles/functions" as *;
  @use "$lib/styles/mixins";

  :global(.features .feature-card .icon) {
    width: 1.5rem;
    height: 1.5rem;
  }

  .features {
    @include mixins.container;
    padding: 3rem variables.$container-padding;
    background: variables.$bg-dark;

    h2 {
      font-size: variables.$font-size-xl;
      text-align: center;
      margin-bottom: 3rem;
      color: variables.$text-primary;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: variables.$bg-card;
      border-radius: 0.75rem;
      transition: all variables.$transition-speed;
      border: toRem(1px) solid transparent;

      &:hover {
        border-color: rgba(variables.$foreground-color, 0.2);
        transform: translateY(toRem(-2px));
      }

      .content {
        h3 {
          font-size: variables.$font-size-base;
          color: variables.$text-primary;
          margin: 0 0 0.5rem;
          font-weight: 500;
        }

        p {
          font-size: variables.$font-size-small;
          color: variables.$text-secondary;
          line-height: 1.5;
          margin: 0;
        }
      }
    }
  }

  @media (max-width: variables.$mobile) {
    .features {
      padding: 4rem 1rem;

      .feature-grid {
        grid-template-columns: 1fr;
      }
    }
  }
</style>