<template>
    <div class="v-slider-wrapper">
        <div class="v-slider"
            :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
        >
            <vSliderItem
                v-for="item in sliderData" 
                :key="item.id"
                :itemData="item"
            ></vSliderItem>
        </div>
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
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
            if(this.currentSlideIndex >= this.sliderData.length - 1) {
                return this.currentSlideIndex = 0
            }
            this.currentSlideIndex++
        }
    },
    components: {
        vSliderItem
    }
}
</script>
<style lang="scss" scoped>
    .v-slider-wrapper {
        width: 100%;
        overflow: hidden;
    }

    .v-slider {
        display: flex;
        width: 300%;
        // margin-left: 0;
        transition: all ease .5s;
    }
</style>
