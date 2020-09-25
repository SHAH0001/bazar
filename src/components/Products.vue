<template>
    <div id="main-products-block">

        <!-- <div class="selection-options-block">
            <h3></h3>
        </div> -->

        <div class="products">

            <div class="product">
                <div class="product-img-block">
                    <div class="discount">
                        <div class="discount-top"></div>
                        <div class="discount-bottom">Sale</div>
                    </div>
                    <img src="../assets/images/product_10.jpg" alt="">
                    <div class="additional-options">
                        <button class="additional-options-button quick-view" type="button">Quick View</button>
                        <button class="additional-options-button add-to-cart" type="button">
                            <i class="icon-shopping-basket"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-info-wrapper">
                        <a href="#" class="product-info-title">Aenean Ru Bristique</a>
                        <!-- <p class="list-price">$30.00</p> -->
                        <div class="star-rating">
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star-o"></i>
                            <i class="icon-star-o"></i>
                            <i class="icon-star-o"></i>
                        </div>
                        <!-- <p class="list-description">
                            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready.
                        </p> -->
                        <div class="product-line"></div>
                        <div class="liked-and-price-block">
                            <div class="buttons-block">
                                <button class="button-product" type="button"><i class="icon-heart-o"></i></button>
                                <button class="button-product" type="button"><i class="icon-arrows-h"></i></button>
                            </div>
                            <div class="prices-block">
                                <span class="old-price">$30.00</span>
                                <span class="current-price">$15.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Tab from './Tab'

export default {
    components: {
        Tab
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    #main-products-block {
        margin: 121px 0 0 0;
    }

    .products {

    }

    .product {
        width: 23%;
    }



    .product-img-block {
        position: relative;
        // border: 1px solid red;
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
        // background-color: $mainColor;
        padding: 20px 0 0 0;
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(42,42,42,1) 51%,rgba(42,42,42,1) 100%);
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        // border: 1px solid red;
    }

    .product-img-block img {
        display: block;
        width: 100%;
    }

    .additional-options {
        display: none;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
    }

    .product:hover .additional-options {
        display: flex;
    }

    .additional-options-button {
        font-size: 13px;
        border: none;
        outline: none;
        cursor: pointer;
        color: #fff;
        background-color: $mainColor;
        padding: 12px;
    }

    .quick-view {

    }

    .add-to-cart {
        font-weight: bold;
        text-transform: uppercase;
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
        margin: 9px 0 0 0;
        text-decoration: none;
    }

    .star-rating {
        margin: 6px 0 0 0;
    }

    .star-rating i {
        margin: 0 1px;
    }

    .product-line {
        position: relative;
        width: 100%;
        height: 1px;
        background-color: $mainColor;
        margin: 14px 0 0 0;
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
    }

    .buttons-block {

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
        margin: 19px 5px 0 0;
    }

    .prices-block {
        margin: 23px 0 0 0;
    }

    .old-price {
        font-size: 16px;
        font-weight: 100;
        color: #a5a5a5;
        text-decoration: line-through;
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
        margin: 0 0 0 5px;
    }
</style>