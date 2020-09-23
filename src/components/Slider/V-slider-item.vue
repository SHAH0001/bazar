<template>
    <div class="v-slider-item">
        <img :src="require('@/assets/images/' + itemData.image)" alt="">
        <div class="v-slider-text">
            <h3 class="v-slider-title">{{itemData.name}}</h3>
            <p class="v-slider-description">{{itemData.description}}</p>
        </div>
        <a class="v-shop-now" href="#">Shop now</a>
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
        position: relative;
    }

    .v-slider-item img {
        display: block;
    }

    .v-slider-text {
        position: absolute;
        top: 31%;
        left: 0;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        padding: 6.6% 0;
        background-color: rgba(102, 102, 102, .5);
    }

    .v-slider-title {
        font-size: 54px;
        color: #fff;
        margin: 7px 0 0 0;
    }

    .v-slider-description {
        font-size: 24px;
        color: #fff;
        margin: -15px 0 0 0;
    }

    .v-shop-now {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 6px;
        text-decoration: none;
        text-transform: uppercase;
        background-color: #fff;
        color: #000;
        padding: 15px 24px;
    }

</style>
