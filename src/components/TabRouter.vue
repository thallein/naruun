<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/" exact/>
      <md-tab id="tab-world" md-label="World" to="/world" exact/>
      <md-tab id="tab-characters" md-label="Characters" to="/characters" exact/>
      <md-tab id="tab-events" md-label="Events" to="/events" exact/>
      <md-tab id="tab-lore" md-label="Lore" to="/lore" exact/>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabRouter'
  }
</script>