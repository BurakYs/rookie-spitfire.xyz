<script lang="ts">
  import config from '$lib/config';

  const footerItems = [
    {
      name: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/legal/privacy-policy' },
        { name: 'Terms of Service', href: '/legal/tos' }
      ]
    },
    {
      name: 'Other',
      links: [
        { name: 'Invite', href: config.invite },
        { name: 'Support Server', href: config.supportServer }
      ]
    }
  ];
</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <div class="logo">
          <img src="/logo-64.png" alt={config.name}/>
          <h3>{config.name}</h3>
        </div>
        <p>{config.description}</p>
      </div>
      <div class="footer-links">
        {#each footerItems as item}
          <div class="footer-block">
            <h3>{item.name}</h3>
            {#each item.links as link}
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}>
                {link.name}
              </a>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "$lib/styles/variables";
  @use "$lib/styles/functions" as *;
  @use "$lib/styles/mixins";

  footer {
    background: variables.$bg-card;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;

    .container {
      @include mixins.container;
    }

    .footer-content {
      display: flex;
      gap: 4rem;
    }

    .footer-section {
      flex-shrink: 0;
      max-width: toRem(350px);

      .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;

        img {
          height: toRem(32px);
          width: toRem(32px);
          border-radius: 100%;
        }

        h3 {
          color: variables.$text-primary;
          font-size: variables.$font-size-lg;
          font-weight: 600;
        }
      }

      p {
        color: variables.$text-secondary;
        font-size: variables.$font-size-small;
        line-height: 1.6;
      }
    }

    .footer-links {
      flex-grow: 1;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;

      .footer-block {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        h3 {
          color: variables.$text-primary;
          font-size: variables.$font-size-base;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        a {
          color: variables.$text-secondary;
          font-size: variables.$font-size-small;
          transition: all variables.$transition-speed;
          width: fit-content;

          &:hover {
            color: variables.$text-primary;
          }
        }
      }
    }
  }

  @media (max-width: variables.$tablet) {
    footer {
      .footer-content {
        flex-direction: column;
        gap: 3rem;
      }

      .footer-section {
        max-width: 100%;
      }

      .footer-links {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: variables.$mobile) {
    footer {
      padding: 3rem 1rem 2rem;

      .footer-content {
        gap: 2rem;
      }

      .footer-section {
        text-align: center;

        .logo {
          justify-content: center;
        }
      }

      .footer-links {
        text-align: center;

        .footer-block {
          align-items: center;

          a {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
</style>