<script lang="ts">
  import config from '$lib/config';
  import supportModal from '$lib/supportModal';
  import FeaturesBrief from '$lib/components/FeaturesBrief.svelte';
  import FAQList from '$lib/components/FAQList.svelte';
  import FeaturesList from '$lib/components/FeaturesList.svelte';

  let stats = [
    {
      title: 'Servers',
      value: '2.8K+',
      className: 'startarea sta1'
    },
    {
      title: 'Members',
      value: '200K+',
      className: 'middle sta1'
    },
    {
      title: 'Registered Accounts',
      value: '7K+',
      className: 'endarea sta1'
    }
  ];
</script>

<svelte:head>
    <title>{config.bot.name}</title>
</svelte:head>

<div class="background">
    <div class="background-image"></div>
    <div class="background-image-animation"></div>
    <div class="background-image-animation-2"></div>
    <div class="centerv2">
        <div class="centerh">
            <div class="landingpage">
                <div class="header">
                    <h1><span class="highlight">{config.bot.name}</span></h1>
                </div>
                <div class="content">
                    <p>
                        Daily item shops, friend management, lockers, shop images, reminders, cheap v-bucks and
                        more!
                    </p>
                </div>
                <div class="end">
                    <a class="a" href={config.bot.invite}>
                        <div class="dclogo">
                            <img alt="iconlogo" src="/assets/discordlogo.svg">
                        </div>
                        Add to Discord
                    </a>
                    <a class="b" href="#headline">
                        <img alt="icon" src="/assets/arrowtop.svg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="featurescenter">
    <div class="bodyhead">
        <div class="headline" id="headline"></div>
    </div>
    <div class="allfeatures">
        <div class="centerallfeatures">
            <div class="leftarea">
                <h1>Learn more about {config.bot.name}</h1>
                <a href="#explore" id="explore">
                    <div>
                        <img alt="icon" src="/assets/arrowtop.svg"/>
                        Explore
                    </div>
                </a>
            </div>
            <div class="rightarea">
                <div class="rightarea">
                    <div class="rowone rows">
                        <FeaturesBrief start={0} end={2}/>
                    </div>
                    <div class="rowtwo rows">
                        <FeaturesBrief start={2} end={4}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="support">
        <div class="supportgeneral">
            <div class="supportleft">
                <p>A supporter of {config.bot.name}. Donate us or add our bot to your server to support us.</p>
            </div>
            <div class="supportright">
                <button class="inspect" on:click={supportModal}>Support</button>
            </div>
        </div>
    </div>
    <div class="features">
        <FeaturesList/>
    </div>
    <div class="morefeature" id="faq">
        <div class="centermorefeature">
            <div class="leftarea">
                <h1>More Features?</h1>
                <p>
                    We are working on new features every day. You can see the features we are working on and the
                    features we have completed by clicking the button below.
                </p>
                <a class="seeall" href={config.bot.supportServer}>Join our Support Server</a>
                <div class="line3"></div>
                <h1>Statistics</h1>
                <p>{config.bot.name} is a bot verified by discord, trusted by users, used by a lot of servers!</p>
                <div class="stats">
                    {#each stats as stat}
                        <div class={stat.className}>
                            <p><br>Total</p>
                            <h1>{stat.value}</h1>
                            <p>{stat.title}</p>
                        </div>
                    {/each}
                </div>
                <a class="addto" href={config.bot.invite}>
                    <div class="index">
                        <img alt="icon" src="/assets/addtodiscordicon.svg"/>
                        Start Using
                    </div>
                </a>
                <div class="line3 activated"></div>
            </div>
            <div class="rightarea">
                <h1>FAQ</h1>
                <FAQList/>
            </div>
        </div>
    </div>
</div>