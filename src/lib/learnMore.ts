import LearnMore from '$lib/components/LearnMore.svelte';
import config from '$config';

const infoList = [
    {
        title: 'Multi-Language Support',
        description: `${config.bot.name} supports multiple languages with a wide range of English, German, Turkish, Dutch, French and Spanish! You or the community can add their own language or contribute to the existing languages. These people will also receive the Translator role in the support server. If you want to be a translator, join our support server for more information.`
    },
    {
        title: 'Locker Images',
        description: 'You can view your Fortnite locker either on the Fortnite.GG website or as an image. These are very simple to do. All you need to do is use the "/locker" command to select whether you want to view your locker on Fortnite.GG or as an image. When you select Fortnite.GG as an option, the bot will create your entire locker in seconds and upload it to the Fortnite.GG website, then send you a link to the website. If you want to create it as an image, the bot will ask you which type of cosmetics you want to create for your locker. Once you answer this, the bot will create an image of your locker in seconds and send it to you.'
    },
    {
        title: 'Friend Management',
        description: `${config.bot.name} is the best way to manage your friends. You can add, remove, block and list your friends with just one command. You can simply do all of these with buttons with the "/friends user" command or if you want to add/remove/block friends you can simply select the subcommand you'd like to use.`
    },
    {
        title: 'Fake Stats',
        description: 'You can fake your stats with these three commands: /ghost-equip, /fake-level, /fake-crown-wins. You can equip skins, dances, backblings, pickaxes you don\'t own with /ghost-equip.'
    }
];

export default function learnMore(num: number) {
    const info = infoList[num];

    new LearnMore({
        target: document.body,
        props: {
            title: info.title,
            description: info.description
        }
    });
}