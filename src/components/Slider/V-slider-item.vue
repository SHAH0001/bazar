<template>
    <div class="v-slider-item">
        <img :src="require('@/assets/images/' + itemData.image)" alt="">
    </div>
</template>
<script>
export default {
    props: {
        itemData: {
            type: Object,
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>

    .v-slider-item {
        // width: 750px;
        // float: left;
        margin: 0 0 0 0;
    }

</style>
