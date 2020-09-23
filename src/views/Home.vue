<template>
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
                <button class="add-to-cart">
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
            <!-- <div class="slider-content">
                <img src="../assets/images/slider_1.jpg" alt="">
                <div class="slider-info">
                    <h3 class="slider-info-title">indoor furniture</h3>
                    <p class="slider-info-description">save up to 50% of all furniture</p>
                </div>
                <a class="shop-now" href="#">Shop now</a>
            </div> -->
        </div>
    </div>
</template>
<script>
import CountdownTimer from '../components/CountdownTimer.vue'
import vSlider from '../components/Slider/V-slider.vue'

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
            }
        },
        components: {
            CountdownTimer,
            vSlider
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';
    
    .main-slider-block {
        display: flex;
        justify-content: space-between;
    }

    .main-slider-block-left {
        max-width: 360px;
        margin: 0 0 0 7px;
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

    .add-to-cart {
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
        // margin-top: 5px;
    }    

    // .time-block {
    //     display: flex;
    //     position: absolute;
    //     bottom: 7%;
    //     left: 50%;
    //     transform: translate(-50%, 0);
    //     // margin: 0;
    // }

    // .time-block-item {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     flex-direction: column;
    //     width: 71px;
    //     height: 71px;
    //     background-color: #3e3e3e;
    //     border-radius: 50%;
    //     margin: 0 5px 0 0;
    // }

    // .figures,
    // .unit-name {
    //     color: #fff;
    //     margin: 0;
    // }

    // .figures {
    //     font-size: 24px;
    // }

    // .unit-name {
    //     font-size: 13px;
    //     text-transform: uppercase;
    // }

    .hot-deals-point-active {
        background-color: #d58e32;
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
        background-color: #d58e32;
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
    }

</style>
