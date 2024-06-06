<script lang="ts">
    import config from '$config';
    import openFaq from '$lib/openFaq';
    import learnMore from '$lib/learnMore';
    import supportModal from '$lib/supportModal';

    let featuresBrief = [
        {
            title: 'Reminders',
            description: 'Be notified when a cosmetic comes to the item shop',
            icon: '/assets/star.svg'
        },
        {
            title: 'Item Shop',
            description: 'View the item shop everyday and get notified when the item shop changes',
            icon: '/assets/cart.svg'
        },
        {
            title: 'BR Info',
            description: 'View your overall BR information',
            icon: '/assets/chevron-up.svg'
        },
        {
            title: 'Stats',
            description: 'View statistics of players in Fortnite',
            icon: '/assets/monitoring.svg'
        }
    ];

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

    let stats = [
        {
            title: 'Servers',
            value: '2.5K+',
            className: 'startarea sta1'
        },
        {
            title: 'Users',
            value: '100K+',
            className: 'middle sta1'
        },
        {
            title: 'Registered Accounts',
            value: '5K+',
            className: 'endarea sta1'
        }
    ];

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
                        <div class="areasstart">
                            <div class="header">
                                <img alt="icon" src="{featuresBrief[0].icon}"/>
                            </div>
                            <h3>{featuresBrief[0].title}</h3>
                            <p>{featuresBrief[0].description}</p>
                        </div>
                        <div class="areasend">
                            <div class="header">
                                <img alt="icon" src="{featuresBrief[1].icon}"/>
                            </div>
                            <h3>{featuresBrief[1].title}</h3>
                            <p>{featuresBrief[1].description}</p>
                        </div>
                    </div>
                    <div class="rowtwo rows">
                        <div class="areasstart">
                            <div class="header">
                                <img alt="icon" src="{featuresBrief[2].icon}"/>
                            </div>
                            <h3>{featuresBrief[2].title}</h3>
                            <p>{featuresBrief[2].description}</p>
                        </div>
                        <div class="areasend">
                            <div class="header">
                                <img alt="icon" src="{featuresBrief[3].icon}"/>
                            </div>
                            <h3>{featuresBrief[3].title}</h3>
                            <p>{featuresBrief[3].description}</p>
                        </div>
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
            </div>
        </div>
    </div>
</div>