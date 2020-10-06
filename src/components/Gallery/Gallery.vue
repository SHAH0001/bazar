<template>
    <div>
        <div class="gallery-main-image-block">
            <img :src="galleryShowMainImage" alt="" />
            <div v-if="additionalInformation">
                <div class="gallery-more-about-product">
                    <div class="gallery-button-wrapper">
                        <button type="button" class="gallery-more-about-product-button gallery-more-about-product-button-heart">
                            <i class="icon-heart-o"></i>
                        </button>
                        <span class="gallery-button-hover-info">Add To Heart</span>
                    </div>
                    <div class="gallery-button-wrapper">
                        <button type="button" class="gallery-more-about-product-button gallery-more-about-product-button-arrows">
                            <i class="icon-arrows-h"></i>
                        </button>
                        <span class="gallery-button-hover-info">Add To Arrows</span>
                    </div>
                    <div class="gallery-button-wrapper">
                        <button type="button" class="gallery-more-about-product-button gallery-more-about-product-button-eye">
                            <i class="icon-eye"></i>
                        </button>
                        <span class="gallery-button-hover-info">Add To Wishes</span>
                    </div>
                    <div class="gallery-button-wrapper">
                        <button type="button" class="gallery-more-about-product-button gallery-more-about-product-button-shopping-basket">
                            <i class="icon-shopping-basket"></i>
                        </button>
                        <span class="gallery-button-hover-info">Add To Cart</span>
                    </div>
                </div>
                <div class="gallery-product-info">
                    <div class="gallery-price-block">
                        <h3 class="gallery-new-price">$120.00</h3>
                        <p class="gallery-old-price">$160.00</p>
                    </div>
                    <div class="gallery-title-and-rating">
                        <router-link 
                            to="/product/aenean-ru-bristique" class="gallery-title-product"
                        >
                            Aenean Ru Bristique
                        </router-link>
                        <StarRating :rating="2"></StarRating>
                    </div>
                </div>
            </div>
        </div>
        <div class="gallery-content">

            <button 
                @click="previous()" 
                class="gallery-button gallery-button-left" 
                type="button"
            >
                <i class="icon-arrow-left"></i>
            </button>

            <div class="gallery-miniatures-block" id="galleryMiniaturesBlock">
                <Flickity ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell" v-for="item in images" :key="item.id">
                        <img class="top-seller-gallery-item" @click="galleryChangeImage(item.img)" :src="getImage(item.img)" alt="">
                    </div>
                </Flickity>
            </div>

            <button 
                @click="next()" 
                class="gallery-button gallery-button-right" 
                type="button"
            >
                <i class="icon-arrow-right"></i>
            </button>

        </div>
    </div>
</template>
<script>
import StarRating from '../StarRating'
import mixins from '../../mixins/mixins'
import Flickity from 'vue-flickity'

export default {
    data() {
        return {
            flickityOptions: {
                initialIndex: 15,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
            },
            startShowImage: false,
        }
    },
    mixins: [mixins],
    props: {
        images: {
            type: Array,
            required: true
        },
        additionalInformation: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },    
        previous() {
            this.$refs.flickity.previous();
        },
        galleryChangeImage(image) {
            return this.startShowImage = image
        }
    },
    computed: {
        galleryShowMainImage() {
            if(!this.startShowImage) {
                return this.getImage(this.images[0].img)
            }
            return this.getImage(this.startShowImage)
        },
    },
    components: {
        StarRating,
        Flickity
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .carousel-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        height: 70px;
        margin-right: 10px;
       
       @include max-width-1190 {
            width: 40%;
        }

        @include max-width-1150 {
            width: 30%;
        }

        @include max-width-850 {
            width: 15%;
        }

        @include max-width-550 {
            width: 30%;
        }
    }

    .carousel-cell img {
        height: 70px;

        @include max-width-850 {
            width: 100%;
        }
    }

    .gallery-button-wrapper {
        display: flex;
        align-items: center;
    }

    .gallery-button-hover-info {
        display: none;
        font-size: 12px;
        position: relative;
        color: #fff;
        margin: 0 0 6px 9px;
        background-color: $mainColor;
        padding: 5px 10px;
    }

    .gallery-button-hover-info::before {
        content: '';
        position: absolute;
        top: 8px;
        left: -6px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 6px 6px 0;
        border-color: transparent #2a2a2a transparent transparent;
    }
</style>
