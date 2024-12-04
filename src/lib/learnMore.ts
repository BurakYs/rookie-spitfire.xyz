import LearnMore from '$lib/components/LearnMore.svelte';
import config from '$lib/config';
import { mount } from 'svelte';

const infoList = [
    {
        title: 'Multi-Language Support',
        description: `${config.bot.name} supports multiple languages with a wide range of English, German, Turkish, Dutch, French and Spanish.<br><br>By default, the bot will use the language of your Discord client.<br>You can also change the language with the <code>/preferences language</code> command.`
    },
    {
        title: 'Locker Images',
        description: 'You can get an image of your locker with the <code>/locker image</code> command. This also lets you choose special categories. Use the command for more info.<br><br>If you want to view your whole locker on <a href="https://fortnite.gg" target="_blank">Fortnite.GG</a>, use the <code>/locker fortnitegg</code> command.'
    },
    {
        title: 'Friend Management',
        description: `${config.bot.name} lets you manage your friends with the <code>/friends</code> command. You can add, remove, and list your friends.<br><br>If you want to manage your friends with an interactive interface, use the <code>/friends user</code> command.`
    },
    {
        title: 'Fake Your Stats',
        description: 'You can do fake stuff <strong>only visible to other players in the current Fortnite party</strong> with the bot:<br>• Equip any cosmetic you don\'t own with <code>/ghost equip</code><br>• Change your level with <code>/fake-level</code><br>• Change your crown wins with <code>/fake-crown-wins</code><br>• Change your rank with <code>/fake-rank</code>'
    }
];

export default function learnMore(num: number) {
    const info = infoList[num];

    mount(LearnMore, {
        target: document.body,
        props: {
            title: info.title,
            description: info.description
        }
    });
}