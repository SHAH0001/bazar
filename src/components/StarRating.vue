<template>
    <div id="star-rating">
        <div class="star-rating">
            <i 
                v-for="(star, index) in maxStars" 
                :key="index"
                :class="star <= rating ? 'icon-star' : 'icon-star-o'"
                @click="changeRating(star)"
            >
            </i>
            <!-- <i class="icon-star"></i> -->
            <!-- <i class="icon-star"></i>
            <i class="icon-star-o"></i>
            <i class="icon-star-o"></i>
            <i class="icon-star-o"></i> -->
        </div>
    </div>
</template>
<script>
export default {
    props: {
        productId: {
            type: Number
        },
        rating: {
            type: Number,
            required: true
        },
        maxStars: {
            type: Number,
            default: 5
        }
    },
    methods: {
        changeRating(star) {
            console.log(star)
            console.log(this.productId)
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
