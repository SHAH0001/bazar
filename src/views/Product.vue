<template>
    <div>
        <flickity ref="flickity"  :options="flickityOptions">
            <div class="carousel-cell" v-for="item in 6" :key="item">
                <img :src="getImage('brand_' + item + '.png')" alt="">
            </div>
        </flickity>
        
        <!-- if you don't want to use the buttons Flickity provides -->
        <button @click="previous()">Custom Previous Button</button>
        <button @click="next()">Custom Next Button</button>
    </div>
</template>
<script>
    import Flickity from 'vue-flickity';
    import mixins from '../mixins/mixins'

    export default {
        data() {
            return {
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                }
            }
        },
        mixins: [mixins],
        methods: {
            next() {
                this.$refs.flickity.next();
            },
            
            previous() {
                this.$refs.flickity.previous();
            }
        },
        components: {
            Flickity
        },
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .carousel {
        background: #FAFAFA;
    }

    // .flickity-slider {
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    // }

    .carousel-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100px;
        margin-right: 10px;
        border: 1px solid red;
        border-radius: 5px;
        counter-increment: carousel-cell;
    }

    /* cell number */
    .carousel-cell:before {
        // display: block;
        // text-align: center;
        // content: counter(carousel-cell);
        // line-height: 200px;
        // font-size: 80px;
        // color: white;
    }

</style>
