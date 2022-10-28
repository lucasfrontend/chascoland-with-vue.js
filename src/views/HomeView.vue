<template>
  <main class="home">
    <h3>holi</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi rem aperiam amet consequatur accusantium fugiat porro animi sunt eos facere! Eius, dolor? Tempora fugiat officiis est officia aliquid necessitatibus accusantium.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatem atque, dolore temporibus modi placeat tempora error nobis numquam est quisquam quibusdam provident nostrum suscipit maiores iure non nisi sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit, consectetur quia veniam porro alias, quisquam accusantium placeat eaque possimus, ea reiciendis. Dignissimos nostrum officia expedita nulla esse nesciunt minus!</p>

  </main>
  </template>
  
  <script>
  
  export default {
    name: 'HomeView',
  }
  </script>

<style lang="scss" scoped>
.home{
  background-image: url('../assets/headfly.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  min-height: 100vh;
  h3, p{
    color: var(--light)
  }
}
</style>