<script lang="ts">
  import config from '$lib/config';

  const stats = [
    { label: 'Discord Servers', number: config.stats.servers.toLocaleString() },
    { label: 'Total Discord Members', number: config.stats.members.toLocaleString() },
    { label: 'Registered Users', number: config.stats.registered.toLocaleString() }
  ];
</script>

<section id="stats" class="stats">
  <div class="container">
    <div class="stat-grid">
      {#each stats as stat}
        <div class="stat-item">
          <div class="number">{stat.number}<span>+</span></div>
          <div class="label">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @use "$lib/styles/variables";
  @use "$lib/styles/functions" as *;
  @use "$lib/styles/mixins";

  .stats {
    padding: 6rem variables.$container-padding;
    background: variables.$bg-card;
    position: relative;

    .container {
      @include mixins.container;
      padding: 0;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
      position: relative;

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -1rem;
        top: 50%;
        transform: translateY(-50%);
        height: toRem(50px);
        width: toRem(1px);
        background: linear-gradient(to bottom, transparent, rgba(variables.$foreground-color, 0.2), transparent);
      }

      .number {
        font-size: 2.5rem;
        font-weight: 700;
        color: variables.$text-primary;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 0.25rem;

        span {
          color: variables.$primary-color;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }

      .label {
        font-size: variables.$font-size-small;
        color: variables.$text-secondary;
        text-transform: uppercase;
        letter-spacing: toRem(0.5px);
      }
    }
  }

  @media (max-width: variables.$mobile) {
    .stats {
      padding: 4rem 1rem;

      .stat-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .stat-item {
        &:not(:last-child)::after {
          right: 50%;
          bottom: -1.5rem;
          top: auto;
          transform: translateX(50%);
          height: toRem(1px);
          width: toRem(50px);
        }
      }
    }
  }
</style>