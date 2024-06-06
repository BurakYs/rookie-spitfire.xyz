import SupportModal from '$lib/components/SupportModal.svelte';

export default function supportModal() {
    new SupportModal({
        target: document.body
    });
}