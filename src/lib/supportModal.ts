import SupportModal from '$lib/components/SupportModal.svelte';
import { mount } from 'svelte';

export default function supportModal() {
    mount(SupportModal, {
        target: document.body
    });
}