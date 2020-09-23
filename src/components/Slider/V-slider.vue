<template>
    <div class="v-slider-wrapper">
        <div class="v-slider"
            :style="{
                'margin-left': '-' + (100 * currentSlideIndex) + '%', 
                'width': sliderData.length * 100 + '%'
            }"
        >
            <vSliderItem
                v-for="item in sliderData" 
                :key="item.id"
                :itemData="item"
            ></vSliderItem>
        </div>
        <button class="slider-prev slider-button" @click="prevSlide"><i class="icon-arrow-left"></i></button>
        <button class="slider-next slider-button" @click="nextSlide"><i class="icon-arrow-right"></i></button>
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
    @import '@/assets/scss/style';

    .v-slider-wrapper {
        width: 100%;
        overflow: hidden;
    }

    .v-slider {
        display: flex;
        transition: all ease .5s;
        height: 470px;
    }

    .slider-prev {
        background-color: $mainColor;
    }

    .slider-next {
        background-color: $secondColor;
    }

    .slider-button {
        display: inline-block;
        width: 50%;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 10px 0;
    }

    .slider-button i {
        font-size: 15px;
        color: #fff;
    }
</style>
