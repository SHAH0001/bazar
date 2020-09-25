<template>
    <div>
        <div class="sorting-tabs" v-if="whatSortShow === 'tabs'">
            <h3 class="sorting-tabs-title">New furniture</h3>
            <div class="tabs">
                <a class="tabs-link" href="#">Bed</a>
                <a class="tabs-link" href="#">Chair</a>
                <a class="tabs-link" href="#">Sofa</a>
                <a class="tabs-link" href="#">Table</a>
                <a class="tabs-link" href="#">Dining</a>
            </div>
            <div class="points-block">
                <div class="point point-active"></div>
                <div class="point"></div>
                <div class="point"></div>
            </div>
        </div>
        <div v-else>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        whatSortShow: {
            type: String,
            default: 'tabs'
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .sorting-tabs {
        display: flex;
        position: relative;
        border-bottom: 3px solid #e2e2e2;
        padding-bottom: 5px;

        @include max-width-850 {
            justify-content: space-between;
        }

        @include max-width-650 {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
        }
    }

    .sorting-tabs-title {
        position: relative;
        font-size: 20px;
        font-weight: bold;
        color: $secondColor;
        text-transform: uppercase;
        margin: 0;

        @include max-width-650 {
            margin-bottom: 15px;
        }
    }

    .sorting-tabs-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 44px;
        height: 3px;
        background-color: $secondColor;

        @include max-width-650 {
            display: none;
        }
    }

    .tabs {
        margin: 2px 0 0 17%;

        @include max-width-850 {
            margin: 2px 0 0 0;
        }

        @include max-width-650 {
            width: 100%;
        }

        @include max-width-530 {
            display: flex;
            flex-direction: column;
        }
    }

    .tabs-link {
        display: inline-block;
        position: relative;
        font-size: 18px;
        font-weight: 500;
        color: $mainColor;
        text-decoration: none;
        margin: 0 12px;
        padding: 0 5px;
        // border: 1px solid red;

        @include max-width-530 {
            margin-bottom: 10px;
        }
    }

    .tabs-link:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -9px;
        width: 100%;
        height: 3px;
        background-color: $secondColor;

        @include max-width-650 {
            bottom: -8px;
        }

        @include max-width-530 {
            display: none;
        }
    }

    .points-block {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        margin: 30px 0 0 0;
        padding-left: 14px;

        @include max-width-850 {
            display: none;
        }
    }

    .point {
        width: 13px;
        height: 13px;
        background-color: #e2e2e2;
        border-radius: 50%;
        margin-left: 12px;
    } 
    
    .point-active {
        background-color: $secondColor;
    }

</style>
