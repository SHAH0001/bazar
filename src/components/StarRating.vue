<template>
    <div id="star-rating">
        <div class="star-rating">
            <i 
                v-for="(star, index) in maxStars" 
                :key="index"
                :class="star <= rating ? 'icon-star' : 'icon-star-o'"
            >
            </i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        rating: {
            type: Number,
            required: true
        },
        maxStars: {
            type: Number,
            default: 5
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .star-rating {
        margin: 6px 0 0 0;
    }

    .star-rating i {
        margin: 0 1px;
    }
</style>
