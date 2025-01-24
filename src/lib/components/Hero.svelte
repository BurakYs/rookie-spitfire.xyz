<script lang="ts">
  import config from '$lib/config';
</script>

<section class="hero">
  <h1>{config.name}</h1>
  <p>{config.description}</p>
  <div class="cta-buttons">
    <a href={config.invite} target="_blank" class="primary-btn">
      <img src="https://cdn.simpleicons.org/discord/FFFFFF" alt="Discord Logo"/>
      Add to Discord
    </a>
    <a href="#features" class="secondary-btn">Explore Features</a>
  </div>
</section>

<style lang="scss">
  @use "$lib/styles/variables";
  @use "$lib/styles/functions" as *;
  @use "$lib/styles/mixins";

  .hero {
    @include mixins.container;
    padding: 20rem 2rem 6rem;
    position: relative;
    overflow: hidden;
    min-height: 80vh;
    display: flex;
    flex-direction: column;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: toRem(1px);
      background: linear-gradient(90deg, transparent, variables.$primary-color, transparent);
    }

    &::after {
      content: '';
      position: absolute;
      top: 55%;
      left: 25%;
      transform: translate(-50%, -50%);
      width: toRem(475px);
      height: toRem(475px);
      background: radial-gradient(circle at center, rgba(variables.$primary-color, 0.15) 0%, transparent 70%);
      filter: blur(60px);
      z-index: -1;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 1.25rem;
      color: variables.$text-secondary;
      max-width: toRem(540px);
      margin-bottom: 1rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;

      a {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        display: flex;
        align-items: center;
      }

      .primary-btn {
        background: variables.$primary-dark;
        color: variables.$text-primary;
        transition: transform variables.$transition-speed ease-in-out, box-shadow variables.$transition-speed ease-in-out;

        img {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.5rem;
        }

        &:hover {
          transform: variables.$hover-transform;
          box-shadow: 0 0 1.25rem rgba(variables.$primary-color, 0.3);
        }
      }

      .secondary-btn {
        background: rgba(variables.$primary-color, 0.1);
        color: variables.$primary-color;
        border: toRem(1px) solid rgba(variables.$primary-color, 0.2);
        transition: transform variables.$transition-speed ease-in-out;

        &:hover {
          background: rgba(variables.$primary-color, 0.15);
          transform: variables.$hover-transform;
        }
      }
    }
  }

  @media (max-width: toRem(1366px)) {
    .hero {
      padding: 18rem 2rem 4rem;

      h1 {
        font-size: 3rem;
      }

      &::after {
        top: 60%;
        left: 25%;
        height: toRem(350px);
      }
    }
  }

  @media (max-width: toRem(992px)) {
    .hero {
      &::after {
        height: toRem(350px);
      }
    }
  }

  @media (max-width: variables.$tablet) {
    .hero {
      padding: 0 1.5rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0 auto;

      &::after {
        left: 50%;
      }

      h1 {
        font-size: 2.5rem;
      }

      p {
        max-width: 75%;
        margin: 0 auto 2rem;
      }

      .cta-buttons {
        justify-content: center;
      }
    }
  }

  @media (max-width: variables.$mobile) {
    .hero {
      min-height: 100vh;

      p {
        max-width: 100%;
      }

      .cta-buttons {
        width: 100%;
        flex-direction: column;
        gap: 1rem;

        a {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
</style>