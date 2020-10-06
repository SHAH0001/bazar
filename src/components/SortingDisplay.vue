<template>
    <div>
        <div class="sorting-tabs" v-if="whatSortShow === 'tabs'">
            <h3 class="sorting-tabs-title">{{title}}</h3>
            <div class="tabs">
                <slot name="tabs"></slot>
            </div>
            <div v-if="enabledPoints" class="points-block">
                <div class="point point-active"></div>
                <div class="point"></div>
                <div class="point"></div>
            </div>
        </div>
        <div class="sorting-sort-by" v-else-if="whatSortShow === 'sortBy'">
            <h3 class="sort-by-title">{{ title }}</h3>
            <div class="sort-by-block">
                <span class="sort-by-name">Sort By</span>
                <select class="sort-by-select sort-by">
                    <option>Price: Lowest first</option>
                    <option>Price: Hight first</option>
                </select>
            </div>
            <div class="show-block">
                <span class="sort-by-name">Show</span>
                <select class="sort-by-select show-number">
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                </select>
            </div>
            <div class="way-display-block">  
                <div @click="gridShow()" class="grid">
                    <div class="grid-wrapper">
                        <div class="grid-top-block">
                            <div class="grid-block-item" :class="{'active-grid': grid}"></div>
                            <div class="grid-block-item" :class="{'active-grid': grid}"></div>
                        </div>
                        <div class="grid-bottom-block">
                            <div class="grid-block-item" :class="{'active-grid': grid}"></div>
                            <div class="grid-block-item" :class="{'active-grid': grid}"></div>
                        </div>
                    </div>
                </div>
                <div @click="listShow()" class="list">
                    <div class="list-row">
                        <div class="list-point" :class="{'active-grid': !grid}"></div>
                        <div class="list-line" :class="{'active-grid': !grid}"></div>
                    </div>
                    <div class="list-row">
                        <div class="list-point" :class="{'active-grid': !grid}"></div>
                        <div class="list-line" :class="{'active-grid': !grid}"></div>
                    </div>
                    <div class="list-row">
                        <div class="list-point" :class="{'active-grid': !grid}"></div>
                        <div class="list-line" :class="{'active-grid': !grid}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                grid: true
            }
        },
        props: {
            whatSortShow: {
                type: String,
                default: 'tabs'
            },
            enabledPoints: {
                default: false
            },
            title: {
                type: String
            }
        },
        methods: {
            gridShow() {
                this.grid = true
                this.$emit('grid')
            },
            listShow() {
                this.grid = false
                this.$emit('list')
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

    .sorting-sort-by {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $mainColor;
        padding: 0 0 13px 0;
        margin: 0 30px 0 0;

        @include max-width-1190 {
            margin: 0;
            justify-content: space-around;
        }

        @include max-width-650 {
            flex-direction: column;
            align-items: baseline;
        }
    }

    .sort-by-title {
        font-size: 22px;
        color: $mainColor;
        text-transform: uppercase;
        margin: 0 0 0 5px;

        @include max-width-1190 {
            margin: 0;
        }

        @include max-width-650 {
            margin: 0 0 20px 0;
        }
    }

    .sort-by-block {
        margin: 0 0 0 130px;

        @include max-width-1190 {
            margin: 0;
        }

        @include max-width-650 {
            margin: 0 0 20px 0;
        }
    }

    .sort-by-block select {

        @include max-width-650 {
            margin: 0 0 0 20px;
        }
    }

    .show-block {
        @include max-width-650 { 
            margin: 0 0 20px 0;
        }
    }

    .show-block select {
        @include max-width-650 {
            margin: 0 0 0 31px;
        }
    }

    .sort-by-name {
        font-size: 14px;
    }

    .sort-by-select {
        display: inline-block;
        font-size: 14px;
        font-weight: normal;
        color: #939393;
        border: 1px solid #b7b7b7;
        outline: none;
        margin: 0 0 0 13px;

        @include max-width-650 {
            margin: 0;
        }
    }

    .sort-by {
        padding: 7px 49px 7px 10px;
    }

    .show-number {
        padding: 7px 13px;
    }

    .way-display-block  {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 67px;
        border: 1px solid #b7b7b7;
        padding: 5px 0;
    }

    .grid-top-block,
    .grid-bottom-block {
        display: flex;
    }

    .grid-block-item {
        width: 8px;
        height: 8px;
        background-color: #363636;
        border-radius: 1px;
        margin: 1px;
    }

    .list-row {
        display: flex;
        margin-bottom: 1px;
    }

    .list-point {
        width: 6px;
        height: 6px;
        background-color: #363636;
        margin-right: 1px;
    }

    .list-line {
        width: 15px;
        height: 6px;
        background-color: #363636;
    }

    .grid,
    .list {
        cursor: pointer;
    }

    .active-grid {
        background-color: $secondColor;
    }

</style>