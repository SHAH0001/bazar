<template>
    <div class="v-slider">
        <vSliderItem
            v-for="item in sliderData" 
            :key="item.id"
            :itemData="item"
        ></vSliderItem>
    </div>    
</template>
<script>
import vSliderItem from './V-slider-item.vue'

export default {
    data() {
        return {
            currentSlideIndex: 0
        }
    },
    props: {
        sliderData: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            this.currentSlideIndex++
        }
    },
    components: {
        vSliderItem
    }
}
</script>
<style lang="scss" scoped>

</style>
