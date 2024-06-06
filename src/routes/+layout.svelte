<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/styles/index.css';
    import '$lib/styles/navbar.css';
    import '$lib/styles/other.css';

    import Navbar from '$lib/components/Navbar.svelte';

    const selectQuery = (query: string) => document.querySelector(query)! as HTMLElement;

    function openMenu() {
        if (selectQuery('.burgericon').id === 'menuopened') {
            selectQuery('.responsivemenu').style.display = 'none';
            selectQuery('.burgericon').id = 'menuclosed';
            selectQuery('body, html').style.overflow = 'auto';
        } else {
            selectQuery('body, html').style.overflow = 'hidden';
            selectQuery('.responsivemenu').style.display = 'flex';
            selectQuery('.burgericon').id = 'menuopened';
        }
    }

    onMount(() => {
        selectQuery('.burgericon')?.addEventListener('click', openMenu);
        selectQuery('.closemenu')?.addEventListener('click', openMenu);

        window.onclick = function (e) {
            let modalArea = selectQuery('.modalarea');
            let modalButton = selectQuery('.modalbutton');
            let modalIban = selectQuery('.modaliban');
            let modalIbanIndex = selectQuery('.modalibanindex');
            let ibanFlex = selectQuery('.ibanflex');

            if (e.target === selectQuery('.menuback')) {
                selectQuery('.responsivemenu').style.display = 'none';
                selectQuery('.burgericon').id = 'menuclosed';
                selectQuery('body, html').style.overflow = 'auto';
            }

            if (e.target === modalArea || e.target === modalButton) {
                selectQuery('.inspectmodal').remove();
                Object.assign(document.body.style, { style: {} });
            }

            if ([modalIban, modalIbanIndex, ibanFlex].includes(e.target as HTMLElement)) {
                navigator.clipboard.writeText(modalIbanIndex.innerHTML);
                selectQuery('.clipboardtext').style.color = '#41CE6D';
                selectQuery('.clipboardtext').innerHTML = 'Copied! Thank you for your support!';
            }
        };
    });
</script>

<div class="navbarcontainer">
    <Navbar/>
</div>
<slot/>