<template>
  <main class="about">
    <h3>Titulo</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in hic, qui dolore similique alias iure, enim facere sit iste doloremque voluptatum porro nulla molestiae velit natus, laborum nisi eveniet.</p>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in hic, qui dolore similique alias iure, enim facere sit iste doloremque voluptatum porro nulla molestiae velit natus, laborum nisi eveniet.</p>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in hic, qui dolore similique alias iure, enim facere sit iste doloremque voluptatum porro nulla molestiae velit natus, laborum nisi eveniet.</p>
  </main>
</template>

<script>

export default {
  name: 'AboutView',

}
</script>

<style lang="scss" scoped>
.about{
  background-image: url('../assets/backfly.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  min-height: 100vh;
  h3, p{
    color: var(--light)
  }
}

</style>