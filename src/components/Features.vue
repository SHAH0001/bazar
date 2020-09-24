<template>
    <div class="features-block">
        <div class="feature-item">
            <a href="#" class="feature-item-link">
                <img src="../assets/images/truck.png" alt="">
            </a>
            <h3 class="feature-item-title">Free Shipping</h3>
            <p class="feature-item-description">all order</p>
        </div>
        <div class="feature-item">
            <a href="#" class="feature-item-link">
                <img src="../assets/images/headphones.png" alt="">
            </a>
            <h3 class="feature-item-title">24/7 customer</h3>
            <p class="feature-item-description">support</p>
        </div>
        <div class="feature-item">
            <a href="#" class="feature-item-link">
                <img src="../assets/images/double-link-left.png" alt="">
            </a>
            <h3 class="feature-item-title">money back</h3>
            <p class="feature-item-description">guarantee</p>
        </div>
        <div class="feature-item">
            <a href="#" class="feature-item-link">
                <img src="../assets/images/shout.png" alt="">
            </a>
            <h3 class="feature-item-title">Member discount</h3>
            <p class="feature-item-description">first oredr</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .features-block {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 68px;
    }

    .feature-item {
        position: relative;
        font-size: 20px;
        width: 23%;
        border: 1px solid #b7b7b7;
        text-transform: uppercase;
        text-align: center;
        color: $mainColor;
        
        @include max-width-750 {
            width: 49%;
            margin-bottom: 68px;
        }

        @include max-width-530 {
            width: 100%;
        }
    }

    .feature-item:hover {
        color: #e0a38e;
    }

    .feature-item-link {
        position: absolute;
        top: -41px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .feature-item-link img {
        
    }

    .feature-item-title {
        font-weight: bold;
        margin: 45px 0 0 0;
    }

    .feature-item-description {
        margin: -5px 0 14px 0;
    }
</style>
