<template>
    <div id="main-wrapper">
        <div class="main-slider-block">
            <div class="main-slider-block-left">
                <div class="hot-deals-block">
                    <h3 class="hot-deals-title">Hot Deals</h3>
                    <div class="hot-deals-points">
                        <span class="hot-deals-point hot-deals-point-active"></span>
                        <span class="hot-deals-point"></span>
                        <span class="hot-deals-point"></span>
                    </div>
                </div>
                <div class="main-slider-block-left-image">
                    <img src="../assets/images/360x300.jpg" alt="">
                    <button class="add-to-cart-hot-deals">
                        <i class="icon-shopping-basket"></i>
                        add to cart
                    </button>
                    <CountdownTimer></CountdownTimer>
                </div>
                <div class="info-about-product">
                    <div class="info-about-product-wrapper">
                        <a href="#" class="info-about-product-title">Aenean Ru Bristique</a>
                        <div class="star-rating">
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star-o"></i>
                            <i class="icon-star-o"></i>
                            <i class="icon-star-o"></i>
                        </div>
                        <div class="info-about-line"></div>
                        <div class="buttons-and-price-product">
                            <div class="buttons-block">
                            <div class="product-button"><i class="icon-eye"></i></div>
                            <div class="product-button"><i class="icon-heart-o"></i></div>
                            <div class="product-button"><i class="icon-arrows-h"></i></div> 
                            </div>
                            <div class="price-block">
                                <p class="old-price">$350.00</p>
                                <p class="current-price">$300.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-slider-block-right">
                <v-Slider
                    :sliderData="sliderItems"
                ></v-Slider>
            </div>
        </div>
        <Features></Features>
        <Discount></Discount>
        <Products></Products>
        <div class="furniture-gallery-block">
            
            <div class="furniture-gallery-left">
                <SortingDisplay 
                    :title="'Furniture gallery'"
                >
                </SortingDisplay>

                <Tabs>
                    <Tab name="Featured">
                        <h3>Some information about Featured</h3>
                    </Tab>
                    <Tab name="Top seller" selected="true">
                        <Gallery
                            :images="products"
                        >
                        </Gallery>
                    </Tab>
                    <Tab name="Sale off">
                        <h3>Some information about sale off</h3>
                    </Tab>
                    <Tab name="Top rated">
                        <h3>Some information about top rated</h3>
                    </Tab>
                </Tabs>

            </div>

            <div class="furniture-gallery-right">
                <img :src="getImage('bedroom-bed.jpg')" alt="">
                <div class="furniture-gallery-right-info">
                    <span 
                        class="furniture-gallery-right-info-from"
                    >
                        From
                    </span>
                    <span 
                        class="furniture-gallery-right-info-price"
                    >
                        $50.80
                    </span>
                    <h3 
                        class="furniture-gallery-right-title"
                    >
                        Bedroom Bed
                    </h3>
                    <router-link 
                        class="furniture-gallery-right-shop-now" 
                        to="/" 
                        tag="a"
                    >
                        Shop now
                    </router-link>
                </div>
            </div>
            
        </div>
        <footer style="height: 250px;"></footer>
    </div>
</template>
<script>
import CountdownTimer from '../components/CountdownTimer.vue'
import Features from '../components/Features.vue'
import SortingDisplay from '../components/SortingDisplay.vue'
import Discount from '../components/Discount.vue'
import Products from '../components/Products.vue'
import vSlider from '../components/Slider/V-slider.vue'
import Tab from '../components/Tabs/Tab'
import Tabs from '../components/Tabs/Tabs'
import Gallery from '../components/Gallery/Gallery'
import mixins from '../mixins/mixins'

    export default {
        data() {
            return {
                sliderItems: [
                    {
                        id: 1, 
                        image: 'slider_1.jpg',
                        name: 'indoor furniture', 
                        description: 'save up to 50% of all furniture'
                    },
                    {
                        id: 2, 
                        image: 'slider_2.jpg',
                        name: 'indoor furniture', 
                        description: 'save up to 50% of all furniture'
                    },
                    {
                        id: 3, 
                        image: 'slider_3.jpg',
                        name: 'indoor furniture', 
                        description: 'save up to 50% of all furniture'
                    }
                ],
                products: [
                    {
                        id: 1,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_1.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: 30.00,
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 2,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_2.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: false,
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 3,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_3.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: false,
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 4,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_4.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: false,
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 5,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_5.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: Math.floor(Math.random() * Math.floor(30)),
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 6,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_6.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: 30.00,
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 7,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_7.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: Math.floor(Math.random() * Math.floor(30)),
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    },
                    {
                        id: 8,
                        sale: Math.floor(Math.random() * Math.floor(2)),
                        img: 'product_8.jpg',
                        name: 'Aenean Ru Bristique',
                        rating: Math.floor(Math.random() * Math.floor(6)),
                        oldPrice: 30.00,
                        newPrice: Math.floor(Math.random() * Math.floor(50)),
                        description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                    }
                ],
            }
        },
        mixins: [mixins],
        components: {
            CountdownTimer,
            vSlider,
            Features,
            Discount,
            Products,
            Tab,
            Tabs,
            Gallery,
            SortingDisplay
        }
    }
</script>
<style lang="scss">
    @import '@/assets/scss/style';
    
    #main-wrapper {
        margin: 0 23px 0 7px;

        @include max-width-1150 {
            margin: 0;
        }
    }
    
    .main-slider-block {
        display: flex;
        justify-content: space-between;
    }

    .main-slider-block-left {
        max-width: 360px;

        @include max-width-1150 {
            display: none;
        }
    }

    .hot-deals-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $mainColor;
    }

    .hot-deals-title {
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
        padding: 11px 0 12px 23px;
        color: #fff;
    }

    .hot-deals-points {
        margin: 6px 21px 0 0;
    }

    .hot-deals-point {
        display: inline-block;
        border-radius: 50%;
        background-color: #e2e2e2;
        width: 13px;
        height: 13px;
        margin: 0 0 0 8px;
    }

    .main-slider-block-left-image {
        position: relative;
    }

    .main-slider-block-left-image img {
        display: block;
    }

    .add-to-cart-hot-deals {
        position: absolute;
        font-size: 13px;
        text-transform: uppercase;
        color: #fff;
        top: 32%;
        left: 50%;
        transform: translate(-50%, 0);
        border: none;
        outline: none;
        cursor: pointer;
        background-color: $mainColor;
        padding: 11px 17px 11px 11px;
    }    

    .hot-deals-point-active {
        background-color: $secondColor;
    }

    .info-about-product {
        border: 1px solid #e2e2e2;
        border-top: none;
        text-align: center;
    }
    
    .info-about-product-wrapper {
        width: 93%;
        margin: 0 auto;
    }

    .info-about-product-title {
        font-size: 16px;
        color: $mainColor;
        margin: 0;
        text-decoration: none;
    }

    .star-rating {
        margin: 11px 0 0 0;
    }

    .star-rating i {
        font-size: 17px;
        margin-right: 1px;
    }

    .info-about-line {
        position: relative;
        border-bottom: 1px solid $mainColor;
        margin: 13px 0 0 0;
    }

    .info-about-line::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        top: -2px;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: $secondColor;
    }

    .buttons-and-price-product {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 25px 0 17px 0;
    }

    .buttons-block {
        display: flex;
        align-items: center;
    }

    .price-block {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 3px 0 0;
    }

    .old-price {
        font-size: 14px;
        color: #a5a5a5;
        margin: 0;
        text-decoration: line-through;
    }

    .current-price {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        margin: 0 0 0 7px;
        padding: 5px 10px;
        background-color: $mainColor;
    }

    .main-slider-block-right {
        width: 750px;

        @include max-width-1150 {
            width: 100%;
            margin: 0;
        }
    }

    .furniture-gallery-block {
        display: flex;
        justify-content: space-between;
    }

    .furniture-gallery-left {
        width: 48.6%;
    }

    .tabs {
        margin: 31px 0 0 0;
    }

    .tabs-items {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tabs-item {
        font-size: 18px;
        font-weight: bold;
        width: 25%;
        text-align: center;
        border: 1px solid #e2e2e2;
        border-left: none;
        text-transform: uppercase;
        padding: 8px 0;
        cursor: pointer;
    }

    .tabs .tabs-item:first-child {
        border-left: 1px solid #e2e2e2;
    }

    .tabs-nav-item {

    }

    .tabs-details {

    }

    .tabs-is-active {
        position: relative;
        background-color: #f4f5f7;
        color: $secondColor;
        border-bottom: none;
    }

    .tabs-is-active::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: $secondColor;
    }

    .gallery-main-image-block {
        position: relative;
        border: 1px solid #e2e2e2;
        border-top: none;
    }

    .gallery-main-image-block img {
        display: block;
        width: 100%;
        height: 408px;
    }

    .gallery-more-about-product {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 29%;
        left: 7px;
    }

    .gallery-more-about-product-button:hover + .gallery-button-hover-info{
        display: inline-block;
    }

    .gallery-price-block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        bottom: 122px;
        right: 72px;
        width: 105px;
        height: 105px;
        border-radius: 50%;
        background-color: rgba(123, 123, 124, .5);
        color: #fff;
        z-index: 2;
    }

    .gallery-new-price {
        font-size: 20px;
        margin: 10px 0 0 0;
    }

    .gallery-old-price {
        font-size: 16px;
        margin: 0;
        text-decoration: line-through;
    }

    .gallery-title-and-rating {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 31px;
        right: 0;
        background-color: #fff;
        padding: 25px 43px;
    }

    .gallery-title-and-rating::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 29px 29px 0 0;
        border-color: $mainColor transparent transparent transparent;
    }

    .gallery-title-and-rating::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 29px 29px;
        border-color: transparent transparent $mainColor transparent;
    }

    .gallery-title-product {
        font-size: 16px;
        text-decoration: none;
        color: $mainColor;
        margin: 0;
    }

    .gallery-more-about-product-button {
        display: block;
        width: 37px;
        height: 37px;
        border: 1px solid $mainColor;
        outline: none;
        cursor: pointer;
        background-color: rgba(244, 245, 247, .5);
        margin-bottom: 8px;
    }

    .gallery-more-about-product-button-heart {

    }

    .gallery-more-about-product-button-arrows {

    }

    .gallery-more-about-product-button-eye {

    }

    .gallery-more-about-product-button-shopping-basket {
        
    }

    .gallery-content {
        display: flex;
        position: relative;
        padding: 8px 0;
        border: 1px solid #e2e2e2;
        border-top: none;
    }

    .top-seller-gallery-item {
        display: block;
        width: 70px;
        height: 70px;
        margin: 0 7px;
    }

    .gallery-miniatures-block {
        width: 85%;
        margin: 0 auto;
        overflow: hidden;
    }

    .gallery-miniatures {
        display: flex;
        transition: all ease .5s;
    }

    .top-seller-miniatures img {
        display: block;
    }

    .gallery-button {
        display: inline-block;
        position: absolute;
        top: 8px;
        width: 33px;
        height: 70px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: $mainColor;
        color: #fff;
    }

    .gallery-button-left {
        left: 9px;
    }

    .gallery-button-right {
        right: 9px;
    }

    .furniture-gallery-right {
        position: relative;
        width: 48.6%;
        // border: 1px solid red;
    }

    .furniture-gallery-right img {
        display: block;
        margin: 10px 0 0 0;
    }

    .furniture-gallery-right-info {
        position: absolute;
        top: 63px;
        left: 58px;
    }

    .furniture-gallery-right-info-from {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .furniture-gallery-right-info-price {
        font-size: 48px;
        font-weight: bold;
        color: #79ae30;
    }

    .furniture-gallery-right-title {
        font-size: 48px;
        color: $secondColor;
        margin: -7px 0 29px 0;
    }

    .furniture-gallery-right-shop-now {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        background-color: #79ae30;
        padding: 17px 30px;
        border-radius: 5px;
    }

</style>
