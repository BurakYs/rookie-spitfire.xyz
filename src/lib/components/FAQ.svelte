<script lang="ts">
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import config from '$lib/config';

  type FAQ = {
    question: string;
    answer: string;
    isOpen?: boolean;
  };

  let faqs: FAQ[] = $state([
    {
      question: 'How do I link my account?',
      answer: 'Type /login in Discord and follow the steps to connect your Epic Games account.'
    },
    {
      question: 'How can I trust you?',
      answer: `Thousands of users trust us with their accounts. You can join our <a href="${config.supportServer}" target="_blank">support server</a> and see if we are trustworthy.`
    },
    {
      question: 'Is it free?',
      answer: 'Yes, all core features are free to use.'
    },
    {
      question: 'Is my language supported?',
      answer: `We support ${config.languages.join(', ')}. Use /preferences language to change.`
    }
  ]);

  function toggleFaq(index: number) {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
  }
</script>

<section id="faq" class="faq">
  <h2>FAQ</h2>
  <div class="faq-list">
    {#each faqs as faq, index}
      <button
        class="faq-item"
        class:open={faq.isOpen}
        onclick={() => toggleFaq(index)}
        aria-expanded={faq.isOpen}
      >
        <span class="question">
          <span>{faq.question}</span>
          <span class="icon">
            <ChevronDown/>
          </span>
        </span>
        <span class="answer" class:visible={faq.isOpen}>
            {@html faq.answer}
          </span>
      </button>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "$lib/styles/variables";
  @use "$lib/styles/functions" as *;
  @use "$lib/styles/mixins";

  :global(.faq .answer a) {
    text-decoration: underline;
  }

  .faq {
    @include mixins.container;
    padding: 3rem variables.$container-padding;
    background: variables.$bg-dark;
    max-width: toRem(800px);

    h2 {
      font-size: variables.$font-size-xl;
      text-align: center;
      margin-bottom: 3rem;
      color: variables.$text-primary;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      width: 100%;
      background: variables.$bg-card;
      border: toRem(1px) solid transparent;
      border-radius: 0.5rem;
      overflow: hidden;
      transition: all variables.$transition-speed;
      text-align: left;
      cursor: pointer;

      &:hover {
        border-color: rgba(variables.$foreground-color, 0.2);
      }

      &.open {
        .icon {
          transform: rotate(180deg);
        }
      }
    }

    .question {
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      color: variables.$text-primary;
      font-size: variables.$font-size-base;
      font-weight: 500;

      .icon {
        transition: transform variables.$transition-speed;
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    .answer {
      display: block;
      max-height: 0;
      overflow: hidden;
      color: variables.$text-secondary;
      font-size: variables.$font-size-small;
      line-height: 1.6;
      padding: 0 1.5rem;
      transition: all variables.$transition-speed;

      &.visible {
        max-height: toRem(200px);
        padding-bottom: 1.5rem;
      }
    }
  }

  @media (max-width: variables.$mobile) {
    .faq {
      padding: 4rem 1rem;
    }
  }
</style>