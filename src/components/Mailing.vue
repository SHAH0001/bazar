<template>
    <div class="mail">
        <div class="container">
            <form action="#" method="post">
                <div class="mail-wrapper">
                    <span class="mail-title">Newsletter:</span>
                    <input 
                        class="mail-email"
                        type="email" 
                        required 
                        placeholder="Enter your email address"
                    />
                    <button class="mail-submit" type="submit">
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .mail {
        background-color: #f2f2f2;
    }

    .mail-wrapper {
        
    }

    .mail-title {
        font-size: 22px;
        font-weight: bold;
        color: $secondColor;
        text-transform: uppercase;
    }

    .mail-email {

    }

    .mail-submit {

    }

</style>
