<template>
    <div id="main-wrapper">
        <div class="products-ads">
            <div class="products-ads-info">
                <h2 class="products-ads-title">Bedroom <b>furniture</b></h2>
                <p class="products-ads-description">Always <span>25%</span> off or more</p>
            </div>
            <div class="products-ads-bread-crumbs">
                <ul class="products-ads-bread-crumbs-items">
                    <li>
                        <router-link class="products-ads-bread-crumbs-link" tag="a" to="/">Home <span>></span></router-link>
                    </li>
                    <li>
                        <router-link class="products-ads-bread-crumbs-link products-ads-bread-crumbs-link-active" tag="a" to="/">Furniture</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="products-and-filters">
            <div class="products-and-sort products-page">
                <SortingDisplay @grid="grid" @list="list" :whatSortShow="'sortBy'" :title="'Furniture'">
                </SortingDisplay>
                <Products :showGrid="showGrid" :data="products"></Products>
            </div>
            <Filters></Filters>
        </div>
    </div>
</template>
<script>
import Products from '../components/Products.vue'
import SortingDisplay from '../components/SortingDisplay.vue'
import Filters from '../components/Filters.vue'

export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    sale: 1,
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
                },
                {
                    id: 9,
                    sale: Math.floor(Math.random() * Math.floor(2)),
                    img: 'product_9.jpg',
                    name: 'Aenean Ru Bristique',
                    rating: Math.floor(Math.random() * Math.floor(6)),
                    oldPrice: 30.00,
                    newPrice: Math.floor(Math.random() * Math.floor(50)),
                    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                },
                {
                    id: 10,
                    sale: Math.floor(Math.random() * Math.floor(2)),
                    img: 'product_10.jpg',
                    name: 'Aenean Ru Bristique',
                    rating: Math.floor(Math.random() * Math.floor(6)),
                    oldPrice: 50.00,
                    newPrice: Math.floor(Math.random() * Math.floor(50)),
                    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                },
                {
                    id: 11,
                    sale: Math.floor(Math.random() * Math.floor(2)),
                    img: 'product_11.jpg',
                    name: 'Aenean Ru Bristique',
                    rating: Math.floor(Math.random() * Math.floor(6)),
                    oldPrice: 100.00,
                    newPrice: Math.floor(Math.random() * Math.floor(50)),
                    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                },
                {
                    id: 12,
                    sale: Math.floor(Math.random() * Math.floor(2)),
                    img: 'product_12.jpg',
                    name: 'Aenean Ru Bristique',
                    rating: Math.floor(Math.random() * Math.floor(6)),
                    oldPrice: 100.00,
                    newPrice: Math.floor(Math.random() * Math.floor(50)),
                    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready.'
                }
            ],
            showGrid: true,
        }
    },
    methods: {
        grid() {
            this.showGrid = true
        },
        list() {
            this.showGrid = false
        }
    },
    components: {
        Products,
        SortingDisplay,
        Filters
    }    
}
</script>
<style lang="scss">
    @import '@/assets/scss/style';

    #main-wrapper {
        margin: 0 23px 0 7px;

        @include max-width-1150 {
            margin: 0;
        }
    }

    .products-ads {

    }

    .products-ads-info {
        background-color: #3f3f3f;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        padding: 44px 0 52px 0;
    }

    .products-ads-title {
        font-size: 54px;
        font-weight: 100;
        margin: 0;
    }

    .products-ads-description {
        font-size: 24px;
        font-weight: 100;
        margin: -14px 0 0 0;
        letter-spacing: 14px;
    }

    .products-ads-description span {
        color: $secondColor;
    } 

    .products-ads-bread-crumbs {
        background-color: #e2e2e2;
        padding: 11px 0 10px 20px;
    }

    .products-ads-bread-crumbs-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .products-ads-bread-crumbs-items li {
        display: inline-block;
    }

    .products-ads-bread-crumbs-link {
        font-size: 13px;
        color: $mainColor;
        text-decoration: none;
    }

    .products-ads-bread-crumbs-link span {
        display: inline-block;
        margin: 0 12px 0 8px;
    }

    .products-ads-bread-crumbs-link-active {
        color: $secondColor;
    }

    .products-and-filters {
        display: flex;
        justify-content: space-between;
        margin: 31px 0 0 0;
    }

    .products-and-sort {
        flex-grow: 1;
    }

    .products-page .product {
        width: 29%;
        margin: 0 29px 35px 0;

        @include max-width-1190 {
            width: 23%;
            margin: 0 0 35px 0;
        }

        @include max-width-950 {
            width: 30%;
        }

        @include max-width-850 {
            width: 40%;
        }

        @include max-width-530 {
            width: 100%;
        }
    }
</style>
