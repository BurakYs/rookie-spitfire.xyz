<svelte:head>
    <title>Privacy Policy</title>
</svelte:head>

<script lang="ts">
    import config from '$config';
    import '$lib/styles/legal.css'
</script>

<style>
    :global(.app, body) {
        background-color: var(--bg-1) !important;
    }
</style>

<div class="policy">
    <h1>Privacy Policy</h1>
    <p>Last updated: 08.12.2023</p>
    <p>Please read this Privacy Policy ("Terms") carefully before using the {config.bot.name}
        Discord bot and website (the "Service") operated by {config.bot.name} ("us", "we", or "our"). This page
        informs you of our policies regarding collecting, using, and
        disclosing personal data when you use our Service and the choices you have associated with that data.
    </p>
    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection
        and
        use of information under this policy. Unless otherwise defined in this Privacy Policy, the terms used in
        this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
    <p>You agree to be bound by these Terms by accessing or using the Service. If you disagree with any part of the
        terms, you do not have permission to access the Service.
    </p>
    <h2>Data Collection and Usage</h2>
    <p>{config.bot.name} collects certain data from users for the purpose of providing its services effectively. The
        information we collect may include, but is not limited to:</p>
    <ul>
        <li>Discord user and server identifiers</li>
        <li>User's Epic Games Account's information</li>
        <li>Used commands</li>
        <li>Discord server identifiers</li>
    </ul>
    <p>We take the privacy and security of your data seriously. All the information collected is encrypted to ensure its
        confidentiality and integrity.</p>

    <h2>Transfer of Data</h2>
    <p>Your data, including Discord User ID and associated account information, may be transferred to and stored
        on
        servers located in various countries. By using {config.bot.name}, you consent to the transfer of your data
        to
        these locations, which may have data protection laws that differ from those in your jurisdiction.</p>

    <h2>Deletion of Data</h2>
    <p>If you would like us to delete your data from our records, you can request it by sending an email to
        {config.legal.contactMail}. We will make reasonable efforts to respond to your request in a timely manner and
        delete your data, unless we are required to retain it for legal or legitimate business purposes.</p>

    <h2>Disclosure of Data</h2>
    <p>We do not sell, trade, or transfer your data to any third parties for marketing purposes. However, we may
        disclose your data, including Discord User ID and associated account information, in the following
        circumstances:</p>
    <ul>
        <li>If required by law or as necessary to comply with a legal obligation.</li>
        <li>To respond to lawful requests from public authorities or government agencies, including to meet
            national
            security or law enforcement requirements.
        </li>
        <li>To protect and defend our rights, property, or safety, or the rights, property, or safety of our
            users
            or others.
        </li>
        <li>In connection with a merger, acquisition, or sale of assets, in which case your data may be
            transferred
            to the acquiring entity.
        </li>
    </ul>

    <h2>Security of Data</h2>
    <p>We encrypt all your sensitive data to protect its security to safeguard your data against unauthorized
        access, alteration, disclosure or destruction.</p>

    <h2>Changes to Privacy Policy</h2>
    <p>We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any
        changes
        made will be effective immediately upon posting the revised Privacy Policy on our website. We will
        indicate
        the date of the last update at the top of the page. It is your responsibility to review this policy
        periodically for any changes. Continued use of {config.bot.name} after any modifications to the Privacy
        Policy
        constitutes your acceptance of the updated policy.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions or concerns about this Privacy Policy or the data we collect, please contact us
        at <a href="mailto:{config.legal.contactMail}">{config.legal.contactMail}</a>.</p>
</div>