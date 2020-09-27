<template>
    <div>
        <div class="top-seller-img">
            <img :src="topSellerShowImage" alt="" />
        </div>
        <div class="top-seller-gallery">

            <button @click="galleryLeft()" class="top-seller-button top-seller-button-left" type="button">
                <i class="icon-arrow-left"></i>
            </button>

            <div class="top-seller-miniatures">
                <div class="miniatures">
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

            <button @click="galleryRight()" class="top-seller-button top-seller-button-right" type="button">
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
            startShowImage: false
        }
    },
    mixins: [mixins],
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        galleryChangeImage(image) {
            return this.startShowImage = image
        }
    }
}
</script>