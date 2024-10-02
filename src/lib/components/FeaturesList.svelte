<script lang="ts">
  import config from '$lib/config';
  import learnMore from '$lib/learnMore';

  let features = [
    {
      id: 0,
      title: 'Multi-Language Support',
      description: `Don't know English? Not a problem! ${config.bot.name} supports multiple languages.`,
      image: '/assets/newservers.svg',
      className: 'featuresgeneral'
    },
    {
      id: 1,
      title: 'Locker Images',
      description: 'Generate an image of your outfits, backpacks, pickaxes, gliders, dances within just a few seconds!',
      image: '/assets/newservers.svg',
      className: 'featuresgeneral reversefeature'
    },
    {
      id: 2,
      title: 'Friend Management',
      description: 'Add friends, remove friends, get a list of your friend/incoming/outgoing/blocklist, remove inactive accounts easily with just one command!',
      image: '/assets/newservers.svg',
      className: 'featuresgeneral'
    },
    {
      id: 3,
      title: 'Fake Stats',
      description: 'Equip skins you don\'t own, set your level to any number and fake your crown wins in the Crowning Achievement emote with just one command!',
      image: '/assets/newservers.svg',
      className: 'featuresgeneral reversefeature'
    }
  ];
</script>
{#each features as feature}
            <div class={feature.className}>
                <div class="allareas">
                    <div class="areasleft">
                        <h3>Features</h3>
                        <h1>{feature.title}</h1>
                        <p>{feature.description}</p>
                        <button on:click={() => learnMore(feature.id)} class="learnmore">
                            <span>
                                <img src="/assets/infoicon.svg" alt="icon"/>
                                Learn More
                            </span>
                        </button>
                    </div>
                    <div class="areasright">
                        <img src={feature.image} alt="Learn more"/>
                    </div>
                </div>
                <div class="bottomdashline">
                    <div class="dashedline"></div>
                </div>
            </div>
        {/each}