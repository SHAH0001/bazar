<template>
    <div class="articles">
        <div v-for="(item, index) in 3" :key="index" class="article">
            <div class="article-block-img">
                <img :src="getImage('product_1.jpg')" alt="">
                <div class="article-block-date-and-comments">
                    <span class="article-date article-date-and-comments">
                        <i class="icon-calendar"></i>
                        <span>15 jan 2016</span>
                    </span>
                    <router-link to="/" tag="a" class="article-comments article-date-and-comments">
                        <i class="icon-comments"></i>
                        <span>4 Comments</span>
                    </router-link>
                </div>
            </div>
            <div class="article-info">
                <div class="article-info-wrapper">
                    <router-link to="/" tag="a" class="article-title">
                        Products That Fight Static
                    </router-link>
                    <p class="article-description">
                        Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget luctus nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in, ornare enim.
                    </p>
                </div>
            </div>
            <router-link class="article-link" to="/" tag="a">Read More</router-link>
        </div>
    </div>
</template>
<script>
import mixins from '../mixins/mixins'

export default {
    mixins: [mixins]
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .articles {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .article {
        display: flex;
        flex-direction: column;
        width: 31.6%;
        margin-bottom: 5%;

        @include max-width-950 {
            width: 45%;
        }

        @include max-width-650 {
            width: 80%;
            margin: 0 auto 7% auto;
        }

        @include max-width-430 {
            width: 100%;
        }
    }

    .article:hover .article-title {
        color: $secondColor;
    }

    .article-block-img {
        position: relative;
    }

    .article-block-img img {
        width: 100%;
        height: 289px;
    }

    .article-block-date-and-comments {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        font-size: 13px;
        color: #676767;
        width: 84%;
        left: 50%;
        bottom: 4px;
        transform: translate(-50%, 0);
        background-color: #fff;
        padding: 20px 0;
    }

    .article-date {
        text-transform: uppercase;
    }

    .article-date-and-comments {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-date-and-comments i {
        display: inline-block;
        margin: 0 5px 0 0;
        font-size: 15px;
    }

    .article-comments {
        text-decoration: none;
        color: #676767;
    }

    .article-info {
        flex-grow: 1;
    }

    .article-info-wrapper {
        width: 84%;
        margin: 0 auto;
    }

    .article-title {
        font-size: 16px;
        margin: 10px 0 0 0;
        text-decoration: none;
        color: $mainColor;
    }

    .article-description {
        font-size: 14px;
        color: #676767;
        line-height: 24px;
        margin: 10px 0 0 0;
    }

    .article-link {
        display: inline-block;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: $mainColor;
        margin: 36px auto 0 auto;
        padding: 10px 40px;
    }

    .article:hover .article-link {
        background-color: $secondColor;
    }

</style>
