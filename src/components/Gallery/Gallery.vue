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

            <div class="gallery-miniatures-block" id="galleryMiniaturesBlock">
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
            // maximumShift: 0,
            currentShift: 0,
            currentWidthBlock: 0,
            countPages: 0,
            currentPage: 0,
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
            default: 90
        },
        // displayContainerWidth: {
        //     type: Number,
        //     default: 470
        // }
    },
    methods: {
        galleryCurrentWidth() {
            this.currentWidthBlock = document.getElementById('galleryMiniaturesBlock').clientWidth
        },
        galleryScrollLeft() {
            if(this.currentShift != 0) {
                return this.currentShift -= this.currentWidthBlock
            }
            return
        },
        galleryScrollRight() {
            let imagesWidth = this.images.length * this.pictureWidth / this.currentWidthBlock
            
            if(this.currentShift === 0) {
                this.countPages = Math.ceil(imagesWidth)
                this.currentPage = 1
                console.log('первое нажатие')
                return this.currentShift = this.currentWidthBlock
            }
            
            if(this.currentPage++ >= this.countPages || this.currentPage >= this.countPages) {
                return
            }
            else {
                this.currentPage++
                return this.currentShift += this.currentShift
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
        this.galleryCurrentWidth()
        window.addEventListener('resize', this.galleryCurrentWidth)
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
