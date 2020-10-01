<template>
    <div class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="footer-top-columns">
                    <div class="footer-top-column">
                        <h3 class="footer-title">Information</h3>
                        <ul class="footer-nav-items">
                            <li>
                                <router-link tag="a" to="/">About us</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Privacy</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Conditions</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Online support</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-top-column">
                        <h3 class="footer-title">My account</h3>
                        <ul class="footer-nav-items">
                            <li>
                                <router-link tag="a" to="/">Login</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">My Cart</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Wishlist</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Checkout</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-top-column">
                        <h3 class="footer-title">Information</h3>
                        <ul class="footer-nav-items">
                            <li>
                                <router-link tag="a" to="/">Specials</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">New Products</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Best Sellers</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Our Stores</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-top-column">
                        <h3 class="footer-title">Orders</h3>
                        <ul class="footer-nav-items">
                            <li>
                                <router-link tag="a" to="/">Payment options</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Shipping and delivery</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Returns</router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/">Shipping</router-link>
                            </li>
                        </ul>
                        <div class="footer-card-block">
                            <router-link to="/" class="footer-card-img-block">
                                <img src="../../public/visa.png" alt="">
                            </router-link>

                            <router-link to="/" class="footer-card-img-block">
                                <img src="../../public/master-card.png" alt="">
                            </router-link>

                            <router-link to="/" class="footer-card-img-block">
                                <img src="../../public/paypal.png" alt="">
                            </router-link>

                            <router-link to="/" class="footer-card-img-block">
                                <img src="../../public/visa.png" alt="">
                            </router-link>

                            <router-link to="/" class="footer-card-img-block">
                                <img src="../../public/master-card.png" alt="">
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-wrapper">
                    <p class="footer-bottom-description">©Copyright 2016 Bazar | All Rights Reserved</p>
                    <div class="footer-bottom-links">
                        <router-link tag="a" to="">
                            <i class="icon-twitter"></i>
                        </router-link>

                        <router-link tag="a" to="/">
                            <i class="icon-facebook"></i>
                        </router-link>
                        
                        <router-link tag="a" to="/">
                            <i class="icon-youtube"></i>
                        </router-link>
                        
                        <router-link tag="a" to="/">
                            <i class="icon-google-plus"></i>
                        </router-link>
                        
                        <router-link tag="a" to="/">
                            <i class="icon-linkedin"></i>
                        </router-link>

                        <router-link tag="a" to="/">
                            <i class="icon-pinterest-p"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .footer-top {
        background-color: #363636;
    }

    .footer-top-columns {
        display: flex;
        justify-content: space-between;
        margin: 0 69px 0 18px;
        padding: 53px 0 58px 0;
    }

    .footer-top-column {

    }

    .footer-title {
        font-size: 22px;
        margin: 0;
        color: #fff;
        text-transform: uppercase;
    }

    .footer-nav-items {
        margin: 20px 0 0 0;
        padding: 0;
        list-style: none;
    }

    .footer-nav-items a {
        display: inline-block;
        font-size: 14px;
        color: #a9a9a9;
        text-decoration: none;
        margin: 0 0 6px 0;
    }

    .footer-card-block {
        display: flex;
        margin: 22px -43px 0 0;
    }

    .footer-card-img-block {
        display: inline-block;
        width: 40px;
        height: 27px;
        margin: 0 0 0 10px;
    }

    .footer-bottom {
        background-color: $mainColor;
    }

    .footer-bottom-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 37px 0;
    }

    .footer-bottom-wrapper i {
        display: inline-block;
        color: #a1a1a1;
        margin: 0 12px;
    }

    .footer-bottom-wrapper i:hover {
        color: $secondColor;
    }

    .footer-bottom-description {
        font-size: 14px;
        color: #a9a9a9;
        flex-grow: 1;
        text-align: center;
        margin: 0 0 0 233px;
    }

    .footer-bottom-links a {
        text-decoration: none;
    }

</style>
