<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src='img' :alt='alt'>
        <div class="card-body">
            <h3>{{ name }}</h3>
            <h4> {{ position }}</h4>
            <h3>{{phone}}</h3>
            <pre>
                {{ img}}
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VCardMember',
    props: {
        name: String,
        position: String,
        phone: String,
        img: String,
        alt: String
    }
}

</script>

<style lang="scss" scoped></style>