<template>
    <div id="main-products-block">
        <div v-if="showGrid" class="products">
            <div v-for="product in data" :key="product.id" class="product">
                <div class="product-img-block">
                    <div class="discount" v-if="product.sale === 1">
                        <div class="discount-top"></div>
                        <div class="discount-bottom">Sale</div>
                    </div>
                    <img :src="getImage(product.img)" alt="">
                    <div class="additional-options">
                        <button class="additional-options-button quick-view" type="button">Quick View</button>
                        <button class="additional-options-button add-to-cart" type="button"><i class="icon-shopping-basket"></i>Add to cart</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-info-wrapper">
                        <router-link to="/product/aenean-ru-bristique" tag="a" class="product-info-title">{{ product.name }}</router-link>
                        <StarRating :rating="product.rating"></StarRating>
                        <div class="product-line"></div>
                        <div class="liked-and-price-block">
                            <div class="buttons-block">
                                <button class="button-product button-product-grid" type="button"><i class="icon-heart-o"></i></button>
                                <button class="button-product button-product-grid" type="button"><i class="icon-arrows-h"></i></button>
                            </div>
                            <div class="prices-block">
                                <span v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}.00</span>
                                <span class="current-price">${{ product.newPrice }}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-products" v-else>
            <div v-for="product in data" :key="product.id" class="list-product-item">
                <div class="list-product-img-block">
                    <img :src="getImage(product.img)" alt="">
                    <div class="discount" v-if="product.sale === 1">
                        <div class="discount-top"></div>
                        <div class="discount-bottom">Sale</div>
                    </div>
                </div>
                <div class="list-product-info">
                    <router-link 
                        to="/product/aenean-ru-bristique" 
                        tag="a" 
                        class="product-info-title"
                    >
                        {{ product.name }}
                    </router-link>
                    <div class="list-prices">
                        <span v-if="product.oldPrice" class="list-old-price">${{ product.oldPrice }}.00</span>
                        <span class="list-new-price">${{ product.newPrice }}.00</span>
                    </div>

                    <StarRating :rating="product.rating"></StarRating>

                    <p class="list-description">{{ product.description }}</p>
                    
                    <button class="button-product button-product-list" type="button">
                        <i class="icon-heart-o"></i>
                    </button>
                    <button class="button-product button-product-list" type="button">
                        <i class="icon-arrows-h"></i>
                    </button>
                    <button class="button-product button-product-list" type="button">
                        <i class="icon-search"></i>
                    </button>
                    <button class="list-basket" type="button">
                        <i class="icon-shopping-basket"></i>
                        <span>Add to cart</span>
                    </button>

                </div>
            </div>
        </div>
        <button v-if="showReload" class="add-more">
            <i class="icon-refresh"></i>
        </button>
    </div>
</template>
<script>

import StarRating from './StarRating'
import mixins from '../mixins/mixins'

export default {
    data() {
        return {
            
        }
    },
    mixins: [mixins],
    methods: {
    },
    props: {
        data: {
            required: true
        },
        showGrid: {
            default: true,
            type: Boolean
        },
        showReload: {
            default: false,
        }
    },
    components: {
        StarRating
    },
}
</script>
<style lang="scss">
    @import '@/assets/scss/style';

    #main-products-block {
        margin: 30px 0 0 0;
    }

    .products {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 25px;
        margin-bottom: 13px;

        @include max-width-1150 {
            justify-content: space-around;
        }
    }

    .product {
        width: 23%;
        margin-bottom: 35px;

        @include max-width-1150 {
            width: 30%;
        }

        @include max-width-850 {
            width: 40%;
        }

        @include max-width-530 {
            width: 100%;
        }
    }

    .product-img-block {
        position: relative;
    }

    .discount {
        position: absolute;
        width: 42px;
        height: 42px;
        font-size: 12px;
        text-align: center;
        top: -21px;
        left: 50%;
        transform: translate(-50%, 0);
        color: #fff;
        padding: 20px 0 0 0;
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(42,42,42,1) 51%,rgba(42,42,42,1) 100%);
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    .product-img-block img {
        display: block;
        width: 100%;
    }

    .product:hover .additional-options {
        display: flex;
    }

    .additional-options {
        display: none;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .additional-options-button {
        display: inline-block;
        font-size: 13px;
        color: #fff;;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: $mainColor;
        padding: 11px 17px 11px 11px;
    }

    .add-to-cart {
        text-transform: uppercase;
    }

    .add-to-cart i {
        padding: 0 5px 0 0;
    }

    .product-info {
        text-align: center;
        border: 1px solid #e2e2e2;
        border-top: none;
    }

    .product-info-wrapper {
        width: 92%;
        margin: 0 auto;
    }

    .product:hover .product-info-title {
        color: $secondColor;
    }

    .product-info-title {
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        color: $mainColor;
        margin: 8px 0 0 0;
        text-decoration: none;
    }

    .product-line {
        position: relative;
        width: 100%;
        height: 1px;
        background-color: $mainColor;
        margin: 15px 0 0 0;
    }

    .product-line::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 5px;
        top: -2px;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: $secondColor;
    }

    .liked-and-price-block {
        display: flex;
        justify-content: space-between;
        margin-bottom: 11px;

        @include max-width-950 {
            flex-direction: column;
        }
    }

    .button-product {
        display: inline-block;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        width: 37px;
        height: 37px;
        border: 1px solid $mainColor;
    }

    .button-product-grid {
        margin: 19px 5px 0 0;
    }

    .button-product-list {
        margin: 29px 8px 0 0;

        @include max-width-550 {
            margin: 29px 4px 0 4px;        
        }
    }

    .prices-block {
        margin: 23px 0 0 0;
    }

    .old-price {
        font-size: 16px;
        font-weight: 100;
        color: #a5a5a5;
        text-decoration: line-through;
        margin: 0 5px 0 0;
    }

    .product:hover .current-price {
        background-color: $secondColor;
    }

    .current-price {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background-color: $mainColor;
        padding: 6px 10px;
    }

    .list-products {
        margin: 0 30px 0 0;

        @include max-width-550 {
            margin: 0;
        }
    }

    .list-product-info {
        margin: -4px 0 0 22px;

        @include max-width-550 {
            margin: 0 15px;
            text-align: center;
        }
    }

    .list-prices {
        margin: 7px 0 9px 0;
    }

    .list-product-item {
        display: flex;
        border-bottom: 1px solid #d7d7d7;
        padding: 0 0 23px 0;
        margin: 0 0 30px 0;
        
        @include max-width-550 {
            flex-direction: column;
            justify-content: center;
            padding: 0 0 10px 0;
        }
    }

    .list-product-img-block {
        position: relative;

        @include max-width-850 {
            width: 260px;
            flex-shrink: 0;
        }

        @include max-width-550 {
            margin: 0 auto;
        }

    }

    .list-product-img-block img {
        width: 480px;
        height: 260px;
    }

    .list-product-title {
        display: block;
        text-decoration: none;
    }

    .list-old-price {
        font-size: 18px;
        font-weight: bold;
        color: $mainColor;
        margin-right: 13px;
    }

    .list-new-price {
        font-size: 16px;
        color: #a5a5a5;
        text-decoration: line-through;
    }
    
    .list-description {
        font-size: 14px;
        color: #676767;
        line-height: 25px;
        margin: 13px 0 0 0;
        padding: 0 0 22px 0;
        border-bottom: 1px solid #a0a0a0;
    }

    .list-basket {
        display: inline-block;
        font-weight: bold;
        border: none;
        outline: none;
        width: 138px;
        height: 37px;
        text-transform: uppercase;
        color: #fff;
        background-color: $secondColor;
        cursor: pointer;

        @include max-width-650 {
            display: block;
            margin: 10px 0 0 0;
            width: 128px;
        }

        @include max-width-650 {
            margin: 10px auto;
            width: 100%;
        }
    }

    .list-basket i {
        font-size: 15px;
    }

    .list-basket span {
        margin: 0 0 0 7px;
    }

    .add-more {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eeeeee;
        margin: 0 auto;
        border: none;
        cursor: pointer;
        outline: none;
        font-size: 20px;
        box-shadow: 0px 4px 6px 0px rgba(50, 50, 50, 0.2);
    }

</style>