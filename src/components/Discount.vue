<template>
    <div class="discount-block">
        
        <a href="#" class="discount-block-left">
            <img src="../assets/images/discount_main_image.jpg" alt="">
            <div class="discount-block-left-border"></div>
            <div class="discount-block-left-info">
                <h3 class="discount-block-left-info-title">guest room</h3>
                <h4 class="discount-block-left-info-description">sofa</h4>
                <p class="discount-block-left-info-discount-amount">-20%</p>
            </div>
        </a>

        <div class="discount-block-right">
            <a href="#" class="discount-block-right-link">
                <img src="../assets/images/discount_1_block.jpg" alt="">
                <div class="discount-block-top-backroung"></div>
                <div class="discount-block-top-info">
                    <h3 class="discount-block-top-info-title"><b>Office</b> chaip</h3>
                    <p class="discount-block-top-info-description">Collection</p>
                    <p class="discount-block-top-info-price">$200.00</p>
                </div>
            </a>
            <a href="#" class="discount-block-right-link">
                <img src="../assets/images/discount_2_block.jpg" alt="">
                <div class="discount-block-bottom-backroung"></div>
                <div class="discount-block-bottom-info">
                    <h3 class="discount-block-bottom-info-title"><b>Special</b> collection</h3>
                    <p class="discount-block-bottom-info-description">Save up 45% of furniture</p>
                </div>
            </a>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .discount-block {
        display: flex;
        justify-content: space-between;
        margin: 30px 0 0 0;

        @include max-width-760 {
            flex-wrap: wrap;
        }

        @include max-width-530 {
            margin: -15px 0 0 0;
        }
    }

    .discount-block-left {
        position: relative;
        text-decoration: none;
        
        @include max-width-1190 {
            margin: 0 30px 0 0;
        }

        @include max-width-760 {
            width: 100%;
            margin: 0 0 2% 0;
        }
    }

    .discount-block-left img {
        display: block;

        @include max-width-760 {
            width: 100%;
        }
    }

    .discount-block-left-border {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        border: 33px solid rgba(106, 106, 106, .5)
    }

    .discount-block-left-info {
        position: absolute;
        bottom: 41px;
        left: 53px;
        color: #fff;
        text-transform: uppercase;
        z-index: 2;

        @include max-width-430 {
            bottom: 21%;
        }
    }

    .discount-block-left-info-title {
        font-size: 36px;
        margin: 0 0 -27px 0;

        @include max-width-850 {
            font-size: 31px;
            margin: 0 0 -13px 0;
        }
    }

    .discount-block-left-info-description {
        font-size: 60px;
        font-weight: bold;
        margin: 0 0 -5px 0;

        @include max-width-850 {
            font-size: 47px;
        }
    }

    .discount-block-left-info-discount-amount {
        font-size: 50px;
        border: 5px solid #fff;
        font-weight: bold;
        margin: 0 76px 10px 0;

        @include max-width-850 {
            font-size: 40px;
            text-align: center;
        }

        @include max-width-430 {
            font-size: 20px;
        }
    }

    .discount-block-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include max-width-750 {
            width: 100%;
        }
    }

    .discount-block-right-link {
        position: relative;
        text-decoration: none;
    }

    .discount-block-right-link img {
        display: block;

        @include max-width-750 {
            width: 100%;
            margin-bottom: 2%;
        }
    }

    .discount-block-top-backroung {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(232, 237, 247, .5);
        z-index: 2;
    }

    .discount-block-top-info {
        position: absolute;
        top: 19%;
        left: 50%;
        transform: translate(-50%, 0);
        text-transform: uppercase;
        color: #000;
        z-index: 3;

        @include max-width-950 {
            top: 2%;
        }

        @include max-width-430 {
            top: 2%;
            left: 4%;
            transform: translate(0);
        }
    }

    .discount-block-top-info-title {
        font-size: 30px;
        font-weight: normal;
        margin: 0;

        @include max-width-950 {
            font-size: 25px;
        }
    }

    .discount-block-top-info-description {
        font-size: 18px;
        margin: -6px 0 0 0;
    }

    .discount-block-top-info-price {
        font-size: 36px;
        font-weight: bold;
        margin: 0;
        color: $secondColor;

        @include max-width-850 {
            font-size: 25px;
        }
    }

    .discount-block-bottom-backroung {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(251, 243, 247, .2);
        z-index: 2;
    }

    .discount-block-bottom-info {
        position: absolute;
        top: 35%;
        right: 4%;
        text-transform: uppercase;
        z-index: 3;
    }

    .discount-block-bottom-info-title {
        font-size: 24px;
        font-weight: normal;
        margin: 0;
        color: $secondColor;
    }

    .discount-block-bottom-info-description {
        font-size: 18px;
        margin: -4px 0 0 0;
        color: #000;
    }
</style>
