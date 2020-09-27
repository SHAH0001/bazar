<template>
    <div>
        <div class="gallery-main-image-block">
            <img 
                class="gallery-main-image"
                :src="galleryShowMainImage" 
                alt="" 
            />
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
    mounted() {
        const widthAllPictures = this.pictureWidth * this.images.length
        this.maximumShift = widthAllPictures - this.displayContainerWidth + 5
    }
}
</script>