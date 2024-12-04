<script lang="ts">
    import config from '$lib/config';

    const navItems = [
        {
            name: 'Support Server',
            href: config.bot.supportServer
        },
        {
            name: 'Commands',
            href: '?'
        },
        {
            name: 'FAQ',
            href: '/#faq'
        }
    ];
</script>

<div class="responsivenavbar">
    <div class="leftarea">
        <a href="/">
            <img alt="logo" class="leftlogo" src="/assets/botavatar.png"/>
            <img alt="logo" class="lefttextlogo" src="/assets/botavatar.png"/>
        </a>
    </div>
    <div class="rightarea">
        <div class="burgericon">
            <div class="line_1"></div>
            <div class="line_2"></div>
            <div class="line_3"></div>
        </div>
    </div>
</div>
<div class="navbar">
    <div class="leftarea">
        <a href="/">
            <img alt="leftlogo" class="leftlogo" src="/assets/botavatar.png">
        </a>
    </div>
    <div class="middlearea">
        {#each navItems as item}
            <a href={item.href}>{item.name}</a>
        {/each}
    </div>
    <div class="rightarea">
        <button class="invitebutton" onclick={() => window.location.href = config.bot.invite}>
            Invite
        </button>
    </div>
</div>
<div class="responsivemenu">
    <div class="menuback">
        <div class="indexmenu">
            <div class="headlogo">
                <div class="menuheadleft">
                    <a href="/">
                        <img alt="avatar" src="/assets/botavatar.png"/>
                    </a>
                </div>
                <div class="menuheadright">
                    <div class="closemenu">
                        <div class="closemenui1"></div>
                        <div class="closemenui2"></div>
                    </div>
                </div>
            </div>
            <div class="ln">
                <div class="menuline"></div>
            </div>
            <div class="menuitems">
                {#each navItems as item}
                    <a href={item.href}>{item.name}</a>
                {/each}
            </div>
            <div class="bottommenu">
                <button class="invitebutton" onclick={() => window.location.href = config.bot.invite}>
                    Invite
                </button>
            </div>
        </div>
    </div>
</div>