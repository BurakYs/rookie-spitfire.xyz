<svelte:head>
  <title>{config.name} - Terms of Service</title>
</svelte:head>

<script lang="ts">
  import config from '$lib/config';
</script>

<style lang="scss">
  @use "$lib/styles/legal";
</style>

<div class="legal">
  <h1>Terms of Service</h1>
  <p>Last updated: 08.12.2023</p>
  <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Rookie
    Spitfire
    Discord bot and website (the "Service") operated by {config.name} ("us", "we", or "our").</p>
  <p>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.
    These Terms apply to all visitors, users, and others who wish to access or use the Service.</p>
  <p>Our Service is a Discord bot named "{config.name}".</p>
  <p>You agree to be bound by these Terms by accessing or using the Service. If you disagree with any part of
    the
    terms, you do not have permission to access the Service.</p>

  <h2>Purchases</h2>
  <p>If you wish to acquire Premium status through the Service ("Premium Purchase"), rest assured that we do
    not require or store your credit card information or any payment details. Your privacy and security are
    important to us.</p>
  <p>Premium status can be obtained by making a payment through the designated method, which may include
    various payment providers. However, we do not request, collect, or store sensitive payment information
    from you.</p>
  <p>It's important to understand that Premium status is provided as-is and can be canceled by us at any time
    without any obligation for refunds. We do not offer refunds for Premium purchases under any
    circumstances.</p>
  <p>If you have any questions or concerns regarding your Premium status or wish to cancel it, please contact
    us at {config.legal.contactMail}. Your satisfaction is important to us, and we're here to assist you with
    any
    inquiries you may have.</p>

  <h2>Links To Other Web Sites</h2>
  <p>The Service may contain links to third-party websites or services that are not owned or controlled by us.
    We
    have no control over and assume no responsibility for the content, privacy policies, or practices of any
    third-party websites or services. You acknowledge and agree that we shall not be responsible or liable,
    directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with
    the
    use of or reliance on any such content, goods, or services available on or through any such websites or
    services.</p>

  <h2>Termination</h2>
  <p>We reserve the right to terminate or suspend your access to the Service immediately, without prior notice
    or
    liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon
    termination, your right to use the Service will immediately cease. All provisions of the Terms which by
    their nature should survive termination shall survive termination, including, without limitation,
    ownership
    provisions, warranty disclaimers, indemnity, and limitations of liability.</p>

  <h2>Exclusions</h2>
  <p>Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of
    liability for consequential or incidental damages, so the limitations above may not apply to you.</p>

  <h2>Changes</h2>
  <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time without prior
    notice. By continuing to access or use our Service after any revisions become effective, you agree to be
    bound by the updated terms. If you do not agree to the new terms, please stop using the Service.</p>

  <h2>Contact Us</h2>
  <p>If you have any questions about these Terms or the Service, please contact us at
    <a href="mailto:{config.legal.contactMail}">{config.legal.contactMail}</a>.</p>
</div>