<template>
    <div id="main-wrapper">
        <div class="product-header">
            <h3 class="product-header-title">Furniture</h3>
            <ul class="product-header-items">
                <li>
                    <router-link to="/" tag="a">Home ></router-link>
                </li>
                <li>
                    <router-link to="/" tag="a">Furniture ></router-link>
                </li>
                <li>
                    <router-link to="/" tag="a">Chair</router-link>
                </li>
            </ul>
        </div>
        <div class="product-block">
            
            <div class="product-block-gallery">
                <Gallery
                    :images="images"
                >
                </Gallery>
            </div>
            
            <div class="product-block-info">
                
                <div class="product-info-name-and-rating-wrapper">
                    <div class="product-info-name-and-rating-left">
                        <h3>Sunbaby Magic Bear Chair</h3>
                        <StarRating :rating="2"></StarRating>
                        <span class="product-info-reviews">(0 reviews)</span>
                        <span>|</span>
                        <span class="product-info-review">Add Your Review</span>
                    </div>
                    <div class="product-info-name-and-rating-right"></div>
                </div>

                <div class="product-prices-wrapper">
                    <span class="product-price-old">$350.00</span>
                    <span class="product-price-new">$250.00</span>
                </div>

                <div class="product-buttons-wrapper">
                    
                    <div class="product-buttons-top">
                        <button type="button" class="list-basket">
                            <i class="icon-shopping-basket"></i>
                            <span>Add to cart</span>
                        </button>
                        <button class="button-product">
                            <i class="icon-heart-o"></i>
                        </button>
                        <button class="button-product">
                            <i class="icon-arrows-h"></i>
                        </button>
                        <button class="button-product">
                            <i class="icon-envelope-o"></i>
                        </button>
                    </div>

                    <div class="product-buttons-bottom">
                        <span>Quantity:</span>
                        <span>2</span>
                        <button class="button-product">
                            <i class="icon-minus"></i>
                        </button>
                        <button class="button-product">
                            <i class="icon-plus"></i>
                        </button>
                    </div>

                </div>

                <div class="product-quick-overview-wrapper">
                    <h4 class="product-quick-overview-title">Quick Overview</h4>
                    <p class="product-quick-overview-description">
                        Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euis mod tellus. Nam mattis eros tis sagittis. Vestibulum suscipit cursus biben.
                    </p>
                </div>

                <div class="product-info-wrapper">
                    <div class="availability">
                        <span>Availability:</span>
                        <span>In Stock</span>
                    </div>
                    <div class="category">
                        <span>Category:</span>
                        <span>Furniture</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    import StarRating from '../components/StarRating'
    import Gallery from '../components/Gallery/Gallery'

    export default {
        data() {
            return {
                images: [
                    {
                        id: 1,
                        img: 'product_1.jpg'
                    },
                    {
                        id: 2,
                        img: 'product_2.jpg'
                    },
                    {
                        id: 3,
                        img: 'product_3.jpg'
                    },
                    {
                        id: 4,
                        img: 'product_4.jpg'
                    },
                    {
                        id: 5,
                        img: 'product_5.jpg'
                    },
                    {
                        id: 6,
                        img: 'product_6.jpg'
                    },
                    {
                        id: 7,
                        img: 'product_7.jpg'
                    },
                    {
                        id: 8,
                        img: 'product_8.jpg'
                    }
                ],
            }
        },
        components: {
            StarRating,
            Gallery
        },
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    #main-wrapper {
        margin: 0 23px 0 7px;

        @include max-width-1150 {
            margin: 0;
        }
    }

    .product-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product-header-title {
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        margin: 30px 0;
    }

    .product-header-items {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .product-header-items a {
        display: inline-block;
        font-size: 13px;
        color: $mainColor;
        text-decoration: none;
        margin: 0 0 0 18px;
    }

    .product-block {
        display: flex;
        border: 1px solid #c2c2c2;
    }

    .product-block-gallery {
        margin: 18px 0 0 19px;
        width: 72%;
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

</style>
