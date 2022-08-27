<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div id="page">
      <div class="main">
        <!-- Slots -->
        <div class="numbers">
          <div class="slots" id="slots_tens">
            <div class="number-wrapper"></div>
          </div>
          <div class="slots" id="slots_units">
            <div class="number-wrapper"></div>
          </div>
          <div class="slots" id="slots_queue">
            <div class="number-wrapper"></div>
          </div>
        </div>
      </div>
      <div class="button">
        <!--<input type="button" value="spin!" onClick="go(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));">-->
        <div id="equation" class="done">
          <div id="shoulder"><div id="arm"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
