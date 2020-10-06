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
            <div class="product-block-info-wrapper">
                <div class="product-block-info">               
                    <div class="product-info-name-and-rating-wrapper border-bottom">
                        <div class="product-info-name-and-rating-left">
                            <h3 class="product-info-name">Sunbaby Magic Bear Chair</h3>
                            <div class="product-info-reviews">
                                <StarRating :rating="2"></StarRating>
                                <span>(0 reviews) |</span>
                                <span>Add Your Review</span>
                            </div>
                        </div>
                        <div class="product-info-name-and-rating-right"></div>
                    </div>
                    <div class="product-prices-wrapper border-bottom">
                        <span class="product-price-old">$350.00</span>
                        <span class="product-price-new">$250.00</span>
                    </div>
                    <div class="product-buttons-wrapper border-bottom">
                        <div class="product-buttons-top">
                            <button type="button" class="product-list-basket">
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
                            <span class="product-buttons-bottom-quantity-name">Quantity:</span>
                            <span class="product-buttons-bottom-quantity-count">{{ countProduct }}</span>
                            <button
                                @click="productMinus()" 
                                class="button-product minus"
                            >
                                <i class="icon-minus"></i>
                            </button>
                            <button 
                                @click="productPlus()" 
                                class="button-product"
                            >
                                <i class="icon-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-quick-overview-wrapper border-bottom">
                        <h4 class="product-quick-overview-title">Quick Overview</h4>
                        <p class="product-quick-overview-description">
                            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euis mod tellus. Nam mattis eros tis sagittis. Vestibulum suscipit cursus biben.
                        </p>
                    </div>
                    <div class="product-information-wrapper border-bottom">
                        <div class="availability">
                            <span class="product-information-title">Availability:</span>
                            <span class="product-information-text">In Stock</span>
                        </div>
                        <div class="category">
                            <span class="product-information-title">Category:</span>
                            <span class="product-information-text">Furniture</span>
                        </div>
                    </div>
                    <div class="social-networks-wrapper">
                        <router-link class="social-network-link" to="/" tag="a">
                            <i style="color: #3b5998;" class="icon-facebook"></i>
                            <span>Facebook</span>
                        </router-link>
                        
                        <router-link class="social-network-link" to="/" tag="a">
                            <i style="color: #d62d20;" class="icon-google-plus"></i>
                            <span>Google+</span>
                        </router-link>
                        
                        <router-link class="social-network-link" to="/" tag="a">
                            <i style="color: #4099ff;" class="icon-twitter"></i>
                            <span>Tweet</span>
                        </router-link>
                        
                        <router-link class="social-network-link" to="/" tag="a">
                            <i style="color: #c92228;" class="icon-pinterest-p"></i>
                            <span>Pinterest</span>
                        </router-link>
                        
                        <router-link class="social-network-link" to="/" tag="a">
                            <i style="color: #0077b5;" class="icon-linkedin"></i>
                            <span>Linkedin</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tabs">
            <Tabs>
                <Tab name="Description">
                    <h3>Some description</h3>
                </Tab>
                <Tab name="Review" selected="true">
                    <div class="review-wrapper">
                        <div class="review">
                            <h4 class="review-this-product">There are no reviews for this product.</h4>
                            <h4 class="add-review">Add a review</h4>
                            <h4 class="your-rating">Your Rating</h4>
                            <div class="rating">
                                <span class="bad">Bad</span>
                                <StarRating :rating="5"></StarRating>
                                <span class="good">Good</span>
                            </div>
                            <form action="#" method="post">
                                <div class="review-form">
                                    <div class="form-control-textarea row-1">
                                        <label for="review">Your Review</label>
                                        <textarea 
                                            id="review" 
                                            cols="30" 
                                            rows="5"
                                            name="review" 
                                        ></textarea>
                                    </div>
                                    <div class="form-control-inputs">
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="Name*"
                                            class="form-control-input name"
                                        />
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="Email*"
                                            class="form-control-input"
                                        />
                                        <button 
                                            type="submit"
                                            class="form-control-button"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Tab>
                <Tab name="Specification">
                    <h3>Some specification</h3>
                </Tab>
                <Tab name="Custom tab">
                    <h3>Some custom tab</h3>
                </Tab>
            </Tabs>
        </div>
        <SortingDisplay
            :title="'New furniture'"
            :enabledPoints="true"
        ></SortingDisplay>
        <Products :data="products"></Products>
    </div>
</template>
<script>
    import StarRating from '../components/StarRating'
    import SortingDisplay from '../components/SortingDisplay'
    import Gallery from '../components/Gallery/Gallery'
    import Tab from '../components/Tabs/Tab'
    import Tabs from '../components/Tabs/Tabs'
    import Products from '../components/Products'

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
                countProduct: 2,
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
                    }
                ]
            }
        },
        methods: {
            productMinus() {
                if(this.countProduct > 0) {
                    return this.countProduct--
                }
            },
            productPlus() {
                this.countProduct++
            }
        },
        components: {
            StarRating,
            Gallery,
            Tab,
            Tabs,
            SortingDisplay,
            Products
        },
    }
</script>
<style lang="scss">
    @import '@/assets/scss/style';

    .product-block-gallery .carousel-cell {
        @include min-width-1191 {
            width: 30%;
        }
    }

    .top-seller-gallery-item {
        width: 100%;
    }

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

        @include max-width-430 {
            flex-direction: column;
        }
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

        @include max-width-430 {
            margin-bottom: 30px;
        }
    }

    .product-header-items a {
        display: inline-block;
        font-size: 13px;
        color: $mainColor;
        text-decoration: none;
        margin: 0 0 0 18px;

        @include max-width-430 {
            margin: 0 10px;
        }
    }

    .product-block {
        display: flex;
        border: 1px solid #c2c2c2;
        padding: 0 0 70px 0;

        @include max-width-850 {
            justify-content: space-between;    
        }

        @include max-width-750 {
            flex-direction: column;    
        }
    }

    .product-block-gallery {
        margin: 18px 0 0 19px;
        width: 63%;

        @include max-width-950 {
            width: 100%;    
        }

        @include max-width-850 {
            width: 45%;    
        }

        @include max-width-750 {
            width: 100%; 
            padding: 20px;
            margin: 0;
        }
    }

    .product-block-info-wrapper {
        @include max-width-850 {
            width: 50%;    
        }

        @include max-width-750 {
            width: 100%; 
        }
    }

    .product-info-name{
        font-size: 22px;
        margin: 18px 0 5px 0;
    }

    .product-info-reviews #star-rating {
        display: inline-block;
    }

    .product-info-reviews {
        font-size: 12px;
        color: #676767;
        padding: 0 0 15px 0;
    }

    .product-info-reviews span:nth-child(2) {
        padding: 0 15px 0 8px;
    }

    .product-block-info {
        width: 90%;
        margin: 0 auto;
    }

    .product-prices-wrapper {
        margin: 23px 0 0 0;
        padding: 0 0 24px 0;
    }

    .product-price-old {
        font-size: 20px;
        font-weight: normal;
        color: #939393;
        text-decoration: line-through;
    }

    .product-price-new {
        display: inline-block;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        background-color: $mainColor;
        padding: 0 7px;
        margin: 0px 0 0 8px;
    }

    .product-buttons-wrapper {
        margin: 21px 0 0 0;
    }
    
    .product-buttons-top {
        display: flex;
        align-items: center;
    }

    .product-buttons-top button {
        margin: 0 8px 0 0;
    }

    .product-buttons-bottom {
        font-size: 14px;
        margin: 22px 0 0 0;
        padding: 0 0 23px 0;
    }

    .product-buttons-bottom-quantity-count {
        border: 1px solid $mainColor;
        padding: 7px 30px 8px 30px;
        margin: 0 11px 0 30px;

        @include max-width-430 {
            margin: 0 11px;
        }
    }

    .minus {
        margin: 0 10px 0 0;
    }

    .product-quick-overview-wrapper {
        padding: 0 0 16px 0;
    }

    .product-quick-overview-title {
        font-size: 15px;
        margin: 18px 0 0 0;
    }

    .product-quick-overview-description {
        font-size: 14px;
        color: #676767;
        margin: 7px 0 0 0;
        line-height: 25px;
    }

    .product-information-wrapper {
        margin: 17px 0 0 0;
        padding: 0 0 15px 0;
    }

    .category {
        margin: 10px 0 0 0;
    }

    .product-information-title {
        font-size: 14px;
        font-weight: 500;
    }

    .product-information-text {
        display: inline-block;
        font-size: 13px;
        color: #676767;
        margin: 0 0 0 12px;
    }

    .product-list-basket {
        display: inline-block;
        font-weight: bold;
        border: none;
        outline: none;
        width: 134px;
        height: 37px;
        text-transform: uppercase;
        color: #fff;
        background-color: $secondColor;
        cursor: pointer;
    }

    .product-list-basket i {
        font-size: 15px;
    }

    .product-list-basket span {
        margin: 0 0 0 7px;
    }

    .social-networks-wrapper {
        margin: 24px 0 0 0;

        @include max-width-1150 {
            display: flex;
            flex-direction: column;
        }
    }

    .social-network-link {
        display: inline-block;
        font-size: 13px;
        color: #888888;
        border: 1px solid $mainColor;
        text-decoration: none;
        background-color: #fff;
        padding: 11px 6px;
        margin: 0 5px 0 0;

        @include max-width-1150 {
            margin: 0 0 15px 0;
        }
    }

    .social-network-link i {
        display: inline-block;
        margin: 0 0 0 6px;;
    }

    .social-network-link span {
        display: inline-block;
        margin: 0 10px;
    }

    .border-bottom {
        border-bottom: 1px solid #cccccc;
    }

    .product-block-gallery .gallery-main-image-block img {
        height: 492px;

        @include max-width-1190 {
            height: auto;
        }

        @include max-width-750 {
            height: 400px;
        }

         @include max-width-430 {
            height: auto;
        }
    }

    .product-block-gallery .gallery-content {
        padding: 15px 0 0 0;
    }

    .product-block-gallery .gallery-button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        color: $mainColor;
        border: 1px solid $mainColor;
        top: 51px;
    }

    .product-block-gallery .gallery-button:hover {
        background-color: $secondColor;
        border: 1px solid $secondColor;
        color: #fff;
    }

    .product-block-gallery .gallery-button-left {
        left: -1px;
    }

    .product-block-gallery .gallery-button-right {
        right: -1px;
    }

    .flickity-enabled.is-draggable .flickity-viewport {
        height: 100px !important; 
    }

    .product-block-gallery .carousel-cell {
        height: 100%;

        @include max-width-1150 {
            width: 30%;
        }

        @include max-width-750 {
            width: 15%;
        }

        @include max-width-650 {
            width: 30%;
        }

        @include max-width-430 {
            width: 50%;
        }
    }
    
    .product-block-gallery .carousel-cell img {
        height: 100px;
    }

    .product-block-gallery .gallery-content {
        border: none;
    }

    .product-tabs {
        border: 1px solid #c2c2c2;
        margin: 30px 0 51px 0;
        padding: 0 0 67px 0;
    }

    .product-tabs .tabs {
        margin: 0;
    }

    .product-tabs .tabs-items {
        @include max-width-950 {
            flex-direction: column;
        }
    }

    .product-tabs .tabs-item {
        font-size: 16px;
        width: 13.5%;
        padding: 13px 0;
        border-top: none;

        @include max-width-1190 {
            width: 100%;
        }
    }

    .product-tabs .tabs-is-active {
        background-color: #fff;

    }

    .tabs-is-active::before {
        display: none;
    }

    .review-wrapper {

    }

    .review {
        width: 94%;
        margin: 27px auto 0 auto;
        color: #676767;
    }

    .review-this-product {
        font-size: 14px;
        // color: #676767;
        margin: 0;
    }

    .add-review {
        font-size: 15px;
        font-weight: 500;
        color: #454545;
        margin: 26px 0 0 0;
    }

    .your-rating {
        font-size: 14px;
        // color: #676767;
        margin: 25px 0 0 0;
    }

    .rating {
        margin: 6px 0 0 0;
    }

    .bad {
        display: inline-block;
        margin: 0 20px 0 0;
    }

    .good {
        display: inline-block;
        margin: 0 0 0 20px;
    }

    .review #star-rating {
        display: inline-block;
        margin: 0 0 0 0;
    }

    .review #star-rating i {
        color: $secondColor;
    }

    .review-form {
        margin: 22px 0 0 0;
    }

    .form-control-textarea {
        display: flex;
        flex-direction: column;
    }

    .form-control-textarea label {
        display: inline-block;
        font-size: 14px;
        // color: #676767;
        margin: 0 0 4px 0;
    }

    .form-control-textarea textarea {
        border: 1px solid #c2c2c2;
        outline: none;
        resize: none;
        font-size: 14px;
        // color: #676767;
        padding: 14px 0 0 14px; 
    }

    .form-control-inputs {
        margin: 12px 0 0 0;

        @include max-width-1190 {
            display: flex;
            flex-direction: column;
        }
    }

    .name {
        margin: 0 18px 0 0;

        @include max-width-1190 {
            margin: 0;
        }
    }

    .form-control-input {
        font-size: 14px;
        width: 42%;
        // color: #676767;
        border: 1px solid #cecece;
        outline: none;
        padding: 19px 0 19px 14px;

        @include max-width-1190 {
            width: 100%;
            margin-bottom: 10px;
        }
    }

    .form-control-button {
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        text-transform: uppercase;
        background-color: $mainColor;
        padding: 20px 30px;
        margin: 0 0 0 15px;
        border: none;
        outline: none;
        cursor: pointer;

        @include max-width-1190 {
            margin: 0;
        }
    }

    .product-similar {
        margin: 0 0 0 0;
    }


</style>
