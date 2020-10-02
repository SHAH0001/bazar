<template>
    <div class="filters">
        <div class="filters-wrapper">
            
            <div class="filter-categories">
                <h3 class="filters-title">Filter by categories</h3>
                <ul class="filters-items">
                    <li v-for="category in filters[0]" :key="category.id">
                        <div @click="applyFilter(category.id, 0)" class="filter-item-wrapper">
                            <span 
                                :class="{'filter-name-active': category.selected}"
                                class="filter-item-name"
                            >
                                >  {{ category.name }}
                            </span>
                            <span 
                                :class="{'filter-count-active': category.selected}"
                                class="filter-item-count"
                            >
                                {{ category.countProducts }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            
            <!-- <div class="filter-price">
                <h3 class="filters-title">Filter by price</h3>
                <vue-range-slider v-model="value"></vue-range-slider>
                <div class="filter-price-controls">
                    <button class="filter-price-button" type="button">Filter</button>
                    <div class="filter-prices-block">
                        <span>$135</span>
                        <span>-</span>
                        <span>$500</span>
                    </div>
                </div>
            </div> -->

            <!-- <div class="filter-color">
                <h3 class="filters-title">Filter by color</h3>
                <ul class="color-items">
                    <li v-for="(color, index) in filters['colorFilters']" :key="index">
                        <div class="color-item-wrapper">
                            <span :style="{backgroundColor: color}" class="color-item"></span>
                            <span class="color-name">{{color}}</span>
                        </div>
                    </li>
                </ul>
            </div> -->

        </div>
        <!-- <button type="button">Filters</button> -->
    </div>
</template>
<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
    data() {
        return {
            filters: [
                [
                    {
                        id: 1,
                        name: 'Furniture',
                        countProducts: 3,
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Sofa',
                        countProducts: 4,
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Chair',
                        countProducts: 5,
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Table',
                        countProducts: 5,
                        selected: false
                    },
                    {
                        id: 5,
                        name: 'Bedroom',
                        countProducts: 5,
                        selected: false
                    },
                    {
                        id: 6,
                        name: 'Furniture',
                        countProducts: 5,
                        selected: false
                    }
                ],
                [
                    {
                        id: 1, 
                        name: 'Red', 
                        selected: false,
                    },
                    {
                        id: 2, 
                        name: 'Black', 
                        selected: false,
                    },
                    {
                        id: 3, 
                        name: 'Yellow', 
                        selected: false,
                    },
                    {
                        id: 4, 
                        name: 'Blue', 
                        selected: false,
                    },
                    {
                        id: 5, 
                        name: 'Pink', 
                        selected: false,
                    },
                    {
                        id: 6, 
                        name: 'Green', 
                        selected: false,
                    }
                ],
            ],
            value: [0, 70]
        }
    },
    methods: {
        applyFilter(id, index) {
            this.filters[index].forEach((element) => {
                if(element.id === id) {
                    element.selected = !element.selected
                    this.filters.index = element
                }
            })
        }
    },
    components: {
        VueRangeSlider
    },
}
</script>
<style lang="scss">
    @import '@/assets/scss/style';

    .filters {
        margin: -8px 0 0 0;
    }

    .filters-wrapper {
        width: 262px;
        flex-shrink: 0;

        @include max-width-1190 {
            display: none;
        }

    }

    .filter-categories {
        margin-bottom: 45px;
    }

    .filters-title {
        font-size: 16px;
        font-weight: bold;
        color: $mainColor;
        text-transform: uppercase;
        margin: 0 0 26px 0;
        padding-bottom: 7px;
        border-bottom: 1px solid $mainColor; 
    }

    .filters-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .filters-items li {
        margin: 0 0 11px 0;
    }

    .filter-item-wrapper {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .filter-item-name {
        display: inline-block;
        font-size: 13px;
    }

    .filter-item-count {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        width: 23px;
        height: 23px;
        color: #fff;
        background-color: $mainColor;
        border-radius: 50%;
    }

    .filter-name-active {
        color: $secondColor;
        margin-left: 12px;
    }

    .filter-count-active {
        background-color: $secondColor;
    }

    .vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip {
        display: none;
    }

    .vue-range-slider.slider-component.slider-horizontal .slider-dot {
        width: 20px !important;
        height: 20px !important;
        border: 3px solid $secondColor;
    }

    .vue-range-slider.slider-component .slider .slider-process {
        background-color: $mainColor;
    }

    .vue-range-slider.slider-component .slider {
        border-radius: 0;
        background-color: #fff;
        border: 1px solid #d4d4d4;
        height: 10px !important;
    }

    .vue-range-slider.slider-component.slider-horizontal .slider-process {
        height: 8px;
    }

    .filter-price-controls {
        display: flex;
        justify-content: space-between;
        margin: 17px 0 53px 0;
    }

    .filter-price-button {
        display: inline-block;
        font-size: 14px;
        width: 65px;
        height: 32px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: $secondColor;
        color: #fff;
        text-transform: uppercase;
        table-layout: -2px;
    }

    .filter-prices-block {
        border: 1px solid #e1e1e1;
        padding: 3px 12px;
        margin: -2px 0 0 0;
    }

    .color-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .color-items li {
        margin: 4px 0 0 0;
    }

    .color-item-wrapper {
        cursor: pointer;
    }

    .color-item {
        display: inline-block;
        width: 13px;
        height: 13px;
        border-radius: 3px;
    }

    .color-name {
        display: inline-block;
        font-size: 13px;
        margin: 0 0 0 11px;
    }

</style>