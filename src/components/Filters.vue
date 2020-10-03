<template>
    <div>
        <div v-if="!filtersShowMobile" class="filters" :class="{'filters-show-mobile' : filtersShowMobile}">
            <div class="filters-wrapper">
                
                <button @click="filtersShowMobile = !filtersShowMobile" class="close-filters" type="button">Close</button>

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
                
                <div class="filter-price">
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
                </div>

                <div class="filter-color">
                    <h3 class="filters-title">Filter by color</h3>
                    <ul class="color-items">
                        <li v-for="color in filters[1]" :key="color.id">
                            <div 
                                @click="applyFilter(color.id, 1)" 
                                class="color-item-wrapper"
                                :class="{'filter-name-active' : color.selected}"
                            >
                                <span :style="{backgroundColor: color.name}" class="color-item"></span>
                                <span 
                                    :class="{'filter-name-active': color.selected}"
                                    class="color-name"
                                >
                                    {{color.name}}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="filter-size">
                    <h3 class="filters-title">Filter by size</h3>
                    <ul class="size-items">
                        <li v-for="size in filters[2]" :key="size.id">
                            <div 
                                @click="applyFilter(size.id, 2)" 
                                :class="{'filter-name-active': size.selected}" class="filter-size-select-and-name"
                            >
                                <span v-if="!size.selected" class="filter-size-checkbox not-selected"></span>
                                <span v-else class="filter-size-checkbox selected">
                                    <i class="icon-check"></i>
                                </span>
                                <span :class="{'filter-name-active': size.selected}" class="filter-size-name">
                                    {{ size.name }}
                                </span>
                            </div>
                            <span :class="{'filter-count-active': size.selected}" class="filter-item-count">
                                {{ size.countProducts }}
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="filter-tags">
                    <h3 class="filters-title">Filter by tags</h3>
                    <div class="filter-tags-items">
                        <span
                            class="filter-tag" 
                            :class="{'filter-tag-border': tag.selected}"
                            v-for="tag in filters[3]" 
                            :key="tag.id"
                            @click="applyFilter(tag.id, 3)"
                        >
                            <i 
                                :class="{'filter-tag-color': tag.selected}"
                                class="icon-tags"
                            ></i>
                            <span 
                                :class="{'filter-tag-color': tag.selected}"
                                class="filter-tag-name"
                            >
                                {{ tag.name }}
                            </span>
                        </span>
                    </div>
                </div>

                <div class="featured-products-block">
                    <h3 class="featured-products-title">Featured products</h3>
                    <div class="featured-products-items">
                        <div v-for="item in featuredProducts" :key="item.id" class="featured-products-item">
                            <div class="featured-products-item-img">
                                <img :src="getImage(item.img)" alt="">
                            </div>
                            <div class="featured-products-item-info">
                                <router-link to="/" tag="a" class="featured-products-item-title">{{ item.name }}</router-link>
                                <h4 class="featured-products-item-price">${{ item.price }}.00</h4>
                                <StarRating :rating="item.rating"></StarRating>
                                <router-link class="featured-products-item-link" to="/" tag="a">Add to cart</router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <button @click="filtersShowMobile = !filtersShowMobile" v-if="filtersShowMobile" class="show-filters">
            <i class="icon-filter"></i>
        </button>
    </div>
</template>
<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
import mixins from '../mixins/mixins'
import StarRating from './StarRating'

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
                [
                    {
                        id: 1,
                        name: 'S',
                        countProducts: 3,
                        selected: false,
                    },
                    {
                        id: 2,
                        name: 'M',
                        countProducts: 4,
                        selected: false,
                    },
                    {
                        id: 3,
                        name: 'L',
                        countProducts: 5,
                        selected: false,
                    },
                    {
                        id: 4,
                        name: 'XL',
                        countProducts: 5,
                        selected: false,
                    },
                    {
                        id: 5,
                        name: 'XX',
                        countProducts: 5,
                        selected: false,
                    }
                ],
                [
                    {
                        id: 1,
                        name: 'Table',
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Chair',
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Hand Bag',
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Women',
                        selected: false
                    },
                    {
                        id: 5,
                        name: 'Fashion',
                        selected: false
                    },
                    {
                        id: 6,
                        name: 'Clothes',
                        selected: false
                    },
                ]
            ],
            value: [0, 70],
            featuredProducts: [
                {
                    id: 1,
                    name: 'Office Chair',
                    img: 'featured_products_1.jpg',
                    price: Math.floor(Math.random() * Math.floor(500)),
                    rating: Math.floor(Math.random() * Math.floor(6)),
                },
                {
                    id: 2,
                    name: 'Office Chair',
                    img: 'featured_products_2.jpg',
                    price: Math.floor(Math.random() * Math.floor(500)),
                    rating: Math.floor(Math.random() * Math.floor(6)),
                },
                {
                    id: 3,
                    name: 'Office Chair',
                    img: 'featured_products_3.jpg',
                    price: Math.floor(Math.random() * Math.floor(500)),
                    rating: Math.floor(Math.random() * Math.floor(6)),
                }
            ],
            filtersShowMobile: false,
            screenWidth: 0
        }
    },
    mixins: [mixins],
    methods: {
        applyFilter(id, index) {
            this.filters[index].forEach((element) => {
                if(element.id === id) {
                    element.selected = !element.selected
                    this.filters.index = element
                }
            })
        },
        showFilters() {
            this.filtersShowMobile = false
        },
        getScreenWidth() {
            let currentWidth = window.innerWidth
            // console.log(currentWidth)
            if(currentWidth <= 1190) {
                this.filtersShowMobile = true
            }
            // this.screenWidth = window.innerWidth
        }
    },
    components: {
        VueRangeSlider,
        StarRating
    },
    mounted() {
        this.getScreenWidth()
        window.addEventListener('resize', this.getScreenWidth)

    }
}
</script>
<style lang="scss">
    @import '@/assets/scss/style';

    .filters {
        margin: -8px 0 0 0;

        @include max-width-1190 {
            position: fixed;
            top: 0;
            right: 0;
            margin: 0;
            z-index: 11;
            background: rgba(0, 0, 0, .71);
            width: 100%;
            height: 100vh;
            overflow: scroll;
        }
    }

    .close-filters {
        display: none;

        @include max-width-1190 {
            display: inline-block;
            font-weight: bold;
            width: 100%;
            padding: 10px 20px;
            cursor: pointer;
            outline: none;
            border: none;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            background-color: $secondColor;
            margin: 10px 0;
        }
    }

    .filters-show-mobile {
        right: 0;
        padding: 0 10px;
    }

    .filters-wrapper {
        width: 262px;
        flex-shrink: 0;
        // border: 1px solid red;
        @include max-width-1190 {
            // display: none;
            position: absolute;
            top: 0;
            right: 0;
            background-color: #fff;
            z-index: 12;
            padding: 10px;
        }
    }

    .show-filters {
        position: fixed;
        top: 75%;
        right: 0;
        font-size: 30px;
        width: 5rem;
        height: 5rem;
        line-height: 5rem;
        cursor: pointer;
        outline: none;
        color: #333;
        text-align: center;
        z-index: 120;
        border-top-left-radius: 3.5rem;
        border-bottom-left-radius: 3.5rem;
        box-shadow: 0 0 0.5rem rgba(0,0,0,.17);
        background-color: #fff;
        border: 2px solid $mainColor;

        @include min-width-1191 {
            display: none;
        }
    }

    .filter-categories {
        margin-bottom: 45px;
    }

    .filter-color {
        margin: 0 0 46px 0;
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
        margin: 0 0 0 12px;
    }

    .filter-size {
        margin: 0 0 45px 0;
    }

    .size-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .size-items li {
        display: flex;
        justify-content: space-between;
        margin: 0 0 9px 0;
    }

    .filter-size-select-and-name {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .filter-size-checkbox {
        display: inline-block;
        width: 13px;
        height: 13px;
        border-radius: 3px;
    }

    .not-selected {
        border: 1px solid $mainColor;
        background-color: #fff;
    }

    .selected {
        border: 1px solid $secondColor;
        background-color: $secondColor;
    }

    .selected i {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        color: #fff;
    }

    .filter-size-name {
        display: inline-block;
        margin: 0 0 0 9px;
    }

    .filter-tags-items {
        margin: 30px 0 0 0;
    }

    .filter-tag {
        display: inline-block;
        cursor: pointer;
        border: 1px solid #d7d7d7;
        padding: 4px 10px;
        margin: 0 16px 12px 0;
    }

    .filter-tag-name {
        display: inline-block;
        margin: 0 0 0 10px;
    }

    .filter-tag-color {
        color: $secondColor;
    }

    .filter-tag-border {
        border: 1px solid $secondColor;
    }

    .featured-products-title {
        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
        background-color: $mainColor;
        padding: 6px 0 6px 12px;
        margin: 2px 0 0 0;
    }

    .featured-products-items {
        margin: 30px 0 0 0;
    }

    .featured-products-item {
        display: flex;
        margin: 0 0 6px 0;
    }

    .featured-products-item-info {
        margin: 0 0 0 14px;
    }

    .featured-products-item:hover .featured-products-item-title {
        color: $secondColor;
    }

    .featured-products-item-title {
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        margin: 14px 0 0 0;
        text-decoration: none;
        color: $mainColor;
    }

    .featured-products-item-price {
        font-size: 18px;
        font-weight: bold;
        margin: 4px 0 0 0;
    }

    .featured-products-item:hover .featured-products-item-link {
        background-color: $secondColor;
    }

    .featured-products-item-link {
        display: inline-block;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        background-color: $mainColor;
        padding: 9px 15px;
        text-transform: uppercase;
        text-decoration: none;
        margin: 12px 0 0 0;
    }

</style>