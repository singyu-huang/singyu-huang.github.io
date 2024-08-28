<template>
    <div class="progress-bar-wrapper">
        <span class="progress-bar-label">{{ label }}</span>
        <div class="progress-bar-bg">
            <div class="progress-bar-fill" :style="{ width: `${percentage}%` }"></div>
        </div>
        <span class="progress-bar-text">{{ percentage }}%</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    percentage: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.progress-bar-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0;

    .progress-bar-label {
        flex: 0 0 80px;
        text-align: left;
        margin-right: 10px;
        font-size: 14px;
        color: $secondary-color;
    }

    .progress-bar-container {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .progress-bar-bg {
        flex: 1;
        background-color: $secondary-color;
        border-radius: 10px;
        overflow: hidden;
        height: 10px;
        position: relative;
    }

    .progress-bar-fill {
        background-color: $accent-color;
        height: 100%;
        border-radius: 10px;
        transition: width 0.6s ease;
        width: 100%;
    }

    .progress-bar-text {
        margin-left: 10px;
        color: $accent-color;
        font-family: $font-family-english;
        font-size: 14px;
        white-space: nowrap;
    }
}
</style>