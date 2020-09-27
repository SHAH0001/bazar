<template>
    <div>
        <div class="gallery-main-image-block">
            <img :src="galleryShowMainImage" alt="" />
            <div>
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

            <button @click="galleryScrollLeft()" class="gallery-button gallery-button-left" type="button">
                <i class="icon-arrow-left"></i>
            </button>

            <div class="gallery-miniatures-block">
                <div 
                    class="gallery-miniatures"
                    :style="{'margin-left': -currentShift + 'px'}"
                >
                    <img 
                        v-for="(item, index) in images" 
                        :key="index" 
                        :src="getImage(item.img)"
                        @click="galleryChangeImage(item.img)" 
                        class="top-seller-gallery-item" 
                        alt="" 
                    />
                </div>
            </div>

            <button @click="galleryScrollRight()" class="gallery-button gallery-button-right" type="button">
                <i class="icon-arrow-right"></i>
            </button>

        </div>
    </div>
</template>
<script>
import StarRating from '../StarRating'
import mixins from '../../mixins/mixins'

export default {
    data() {
        return {
            startShowImage: false,
            maximumShift: 0,
            currentShift: 0
        }
    },
    mixins: [mixins],
    props: {
        images: {
            type: Array,
            required: true
        },
        pictureWidth: {
            type: Number,
            default: 84
        },
        displayContainerWidth: {
            type: Number,
            default: 470
        }
    },
    methods: {
        galleryScrollLeft() {

            if(this.currentShift -= this.pictureWidth * 2 <= 0 || this.currentShift <= this.pictureWidth) {
                return this.currentShift = 0
            }

            return this.currentShift = this.currentShift - this.pictureWidth
        },
        galleryScrollRight() {
            
            if(this.currentShift >= this.maximumShift) {
                return
            }

            if(this.currentShift === 0) {
                return this.currentShift = this.pictureWidth * 2
            }

            if(this.currentShift += this.pictureWidth * 2 > this.maximumShift) {
                return this.currentShift = this.maximumShift
            }
            else {
                this.currentShift *= 2
            }
                
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
        StarRating
    },
    mounted() {
        const widthAllPictures = this.pictureWidth * this.images.length
        this.maximumShift = widthAllPictures - this.displayContainerWidth + 5
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .gallery-button-wrapper {
        display: flex;
        align-items: center;
    }

    .gallery-button-hover-info {
        // display: inline-block;
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
