<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index">
                    <div 
                        class="tabs-nav-item" 
                        :class="{ 'is-active': tab.isActive }"
                        @click="selectTab(tab)"
                    >
                        {{ tab.name }}
                    </div> 
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabs: []
            }
        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = tab.name === selectedTab.name
                })
            }
        },
        created() {
            this.tabs = this.$children
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';
</style>