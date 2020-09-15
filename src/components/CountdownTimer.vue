<template>
    <div class="time-block">
        <div class="time-block-item">
            <p class="figures">{{ Math.trunc(days) }}</p>
            <p class="unit-name">Days</p>
        </div>
        <div class="time-block-item">
            <p class="figures">{{ Math.trunc(hours) }}</p>
            <p class="unit-name">Hrs</p>
        </div>
        <div class="time-block-item">
            <p class="figures">{{ Math.trunc(minutes) }}</p>
            <p class="unit-name">Mins</p>
        </div>
        <div class="time-block-item">
            <p class="figures">{{ Math.trunc(seconds) }}</p>
            <p class="unit-name">Secs</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                now: 0,
                count: 0,
                date: 'October 31, 2020'
            }
        },
        methods: {
            timer_loop() {
                this.count++
                this.now = Math.trunc(new Date().getTime() / 1000)
                this.count < 200 && setTimeout(this.timer_loop, 1000)
            },
        },
        computed: {
            seconds() {
                return (this.modifiedDate - this.now) % 60
            },
            minutes() {
                return ((this.modifiedDate - this.now) / 60) % 60
            },
            hours() {
                return ((this.modifiedDate - this.now) / 60 / 60) % 24
            },
            days() {
                return ((this.modifiedDate - this.now) / 60 / 60 / 24)
            },
            modifiedDate: function () {
                return Math.trunc(Date.parse(this.date) / 1000)
            }
        },
        mounted() {
            this.timer_loop()
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/style';

    .time-block {
        display: flex;
        position: absolute;
        bottom: 7%;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .time-block-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 71px;
        height: 71px;
        background-color: #3e3e3e;
        border-radius: 50%;
        margin: 0 5px 0 0;
    }

    .figures,
    .unit-name {
        color: #fff;
        margin: 0;
    }

    .figures {
        font-size: 24px;
    }

    .unit-name {
        font-size: 13px;
        text-transform: uppercase;
    }

</style>