<template>
    <div class="filters">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nulla tempora dolore optio quaerat aperiam quo eveniet fugiat. Perferendis labore reiciendis quam nisi porro ut esse soluta nobis, dolore incidunt inventore! Architecto, inventore eveniet natus consequuntur corrupti sit optio accusantium voluptas nemo porro nesciunt labore maxime! Nobis facere temporibus tempore?
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .filters {
        width: 262px;
        flex-shrink: 0;
        border: 1px solid red;

        @include max-width-1190 {
            display: none;
        }

    }

</style>
