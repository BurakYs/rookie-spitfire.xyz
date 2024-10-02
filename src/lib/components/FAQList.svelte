<script lang="ts">
  import openFaq from '$lib/openFaq';

  let faqs = [
    {
      id: 'faq1',
      question: 'How do I login to the bot?',
      answer: '1. Use the "/login" command.<br>2. Wait for the bot to reply with a message that only you can see.<br>3. Click the button in the message.<br>4. You will be redirected to Epic Games, after website loads you will be asked to authorize. Click "Confirm".<br>5. Get back to Discord and wait 1-2 seconds then you will see a message that you have successfully logged in.'
    },
    {
      id: 'faq2',
      question: 'How can I trust you not to steal my account?',
      answer: '5000+ users trust us, you can see the proof of this by joining our support server.'
    },
    {
      id: 'faq3',
      question: 'How is my data protected?',
      answer: 'Your data is encrypted and stored in a database accessible only to specific IP addresses.'
    },
    {
      id: 'faq4',
      question: 'Why the site theme is incompatible?',
      answer: 'I copied the website from my other bot'
    }
  ];
</script>

{#each faqs as faq}
    <div class="faq {faq.id}" id="faqClosed">
        <div class="areastop">
            <div class="areasleft">
                <p>{faq.question}</p>
            </div>
            <div class="areasright">
                <button on:click={() => openFaq(faq.id)}>
                                    <span class="icon">
                                        <span class="i1"></span>
                                        <span class="i2"></span>
                                    </span>
                </button>
            </div>
        </div>
        <div class="accordion">
            <div class="areasbottom">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                <p>{@html faq.answer}</p>
            </div>
        </div>
    </div>
{/each}