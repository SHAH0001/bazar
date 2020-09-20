<template>
    <div class="v-slider-item">
        <div>
            <img :src="require('@/assets/images/' + itemData.image)" alt="">
        </div>
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

</style>
