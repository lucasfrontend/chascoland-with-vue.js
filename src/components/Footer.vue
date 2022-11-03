<template>
    <div class="footer">
        <span>Make with love by <span class="barri">BarriDev</span></span>
    </div>
</template>

<script>

export default {
    name: 'Footer',

}

</script>

<style lang="scss" scoped>
.footer{
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    text-align: right;
    font-size: 0.8rem;
    /*
    overflow:hidden;
    */
    .vue{
        background-image: requiere('@/assets/logo.png');
        min-width: 3rem;
        min-height: 3rem;
    }
}
</style>