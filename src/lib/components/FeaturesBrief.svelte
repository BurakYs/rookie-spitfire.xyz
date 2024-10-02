<script lang="ts">
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

  export let start: number;
  export let end: number;
</script>

{#each featuresBrief.slice(start, end) as feature, index}
    <div class="areas{index % 2 ? 'end' : 'start'}">
        <div class="header">
            <img alt="icon" src={feature.icon}/>
        </div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
    </div>
{/each}