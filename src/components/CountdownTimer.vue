<template>
    <div class="time-block">
        <div class="time-block-item">
            <p class="figures">{{ days }}</p>
            <p class="unit-name">Days</p>
        </div>
        <div class="time-block-item">
            <p class="figures">{{ hours }}</p>
            <p class="unit-name">Hrs</p>
        </div>
        <div class="time-block-item">
            <p class="figures">{{ minutes }}</p>
            <p class="unit-name">Mins</p>
        </div>
        <div class="time-block-item">
            <p class="figures">{{ seconds }}</p>
            <p class="unit-name">Secs</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                days: 25,
                hours: 10,
                minutes: 45,
                seconds: 30,
            }
        },
        methods: {
            showRemaining() {
                const timer = setInterval(() => {
                    const now = new Date()
                    const end = new Date(2020, 4, 22, 10, 10, 10, 10)
                    const ditance = end.getTime() - now.getTime()

                    if(ditance < 0) {
                        clearInterval(timer)
                    }
                })

            }
        },
        computed: {
            _seconds: () => 1000,
            _minutes() {
                return this._seconds * 60
            },
            _hours() {
                return this._minutes * 60
            },
            _days() {
                return this._hours * 24
            }
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
        // margin: 0;
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