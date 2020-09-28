<template>
    <div id="main-products-block">
        <SortingDisplay :whatSortShow="'tabs'" :enabledPoints="true" :title="'New furniture'">
            <div slot="tabs">
                <a class="tabs-link" href="#">Bed</a>
                <a class="tabs-link" href="#">Chair</a>
                <a class="tabs-link" href="#">Sofa</a>
                <a class="tabs-link" href="#">Table</a>
                <a class="tabs-link" href="#">Dining</a>
            </div>
        </SortingDisplay>
        <div class="products">
            <div v-for="product in products" :key="product.id" class="product">
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
                                <button class="button-product" type="button"><i class="icon-heart-o"></i></button>
                                <button class="button-product" type="button"><i class="icon-arrows-h"></i></button>
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
    </div>
</template>
<script>
import SortingDisplay from './SortingDisplay'
import StarRating from './StarRating'
import mixins from '../mixins/mixins'

export default {
    data() {
        return {
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
            topSellerStartImage: false
        }
    },
    mixins: [mixins],
    methods: {
    },
    components: {
        SortingDisplay,
        StarRating
    }
}
</script>
<style lang="scss">
    @import '@/assets/scss/style';

    #main-products-block {
        margin: 53px 0 0 0;
    }

    .selection-options-block {
        display: flex;
        justify-content: space-between;
    }

    .selection-options {
        font-size: 22px;
        font-weight: bold;
        color: $mainColor;
        margin: 0;
    }

    .products {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 25px;
        margin-bottom: 8px;

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
        margin: 14px 0 0 0;
        text-decoration: none;
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

</style>