<template>
    <div class="brands-block-wrapper">
        <div class="brands-block">
            <Flickity ref="flickity" :options="flickityOptions">
                <div class="carousel-cell" v-for="item in brands" :key="item.id">
                    <img :src="getImage(item.img)" alt="">
                </div>
            </Flickity>
        </div>
        <button class="brand-prev-button" @click="previous()">
            <i class="icon-arrow-left"></i>
        </button>
        <button class="brand-next-button" @click="next()">
            <i class="icon-arrow-right"></i>
        </button>
    </div>
</template>
<script>
    import Flickity from 'vue-flickity'
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
        props: {
            brands: {
                required: true,
                type: Array
            }
        },
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
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .brands-block-wrapper {
        position: relative;
        margin: 5px 0;
        padding: 24px 0;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
    }

    .brands-block {
        margin: 0 64px;
    }

    .brand-prev-button, 
    .brand-next-button {
        display: inline-block;
        position: absolute;
        width: 33px;
        height: 92px;  
        background-color: $mainColor;
        top: 24px;  
        border: none;
        outline: none;
        cursor: pointer;
        color: #fff;
    }

    .brand-prev-button {
        left: 0;
    } 

    .brand-next-button {
        right: 0;
    }

    .carousel-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 92px;
        margin-right: 10px;
        counter-increment: carousel-cell;

        @include max-width-850 {
            width: 30%;
        }

        @include max-width-550 {
            width: 40%;
        }

        @include max-width-430 {
            width: 100%;
        }
    }

</style>
