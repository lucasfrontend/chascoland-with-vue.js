<template>
    <div class="col-4 col-md-6 col-xl-4 staff-card">
        <img class="img-fluid" :src='img' :alt='alt' />
        <h4> {{ name }} </h4>
        <p> {{ position }} </p>
    </div>
        <!--
-->
</template>

<script>
export default {
    name: 'VCardMember',
    props: {
        name: String,
        position: String,
        img: String,
        alt: String
    }
}

</script>

<style lang="scss" scoped>
.staff-card {
    min-width: 150px;
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f1f5f98e;
  text-align: center;
  border-radius: 3px;
}

img{
    border-radius: 50%;
    min-width: 150px;
    min-height: 50px;
}
</style>