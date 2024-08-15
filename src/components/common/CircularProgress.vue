<template>
  <div class="circular-progress-wrapper">
    <div class="circular-progress">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path class="circle" :stroke-dasharray="`${percentage}, 100`" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x="18" y="18" class="percentage">{{ percentage }}%</text>
      </svg>
    </div>
    <p class="skill-name">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.circular-progress {
  width: 100px;
  height: 100px;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 15vw; // 使用 vw 單位根據螢幕寬度調整大小
    height: 15vw;
    max-width: 80px; // 限制最大寬度
    max-height: 80px;
    min-width: 60px; // 限制最小寬度
    min-height: 60px;
  }

  .circular-chart {
    width: 100%;
    height: 100%;
  }

  .circle-bg {
    fill: none;
    stroke: $secondary-color;
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke: $accent-color;
    stroke-linecap: round;
    transition: stroke-dasharray 0.6s ease 0s;
  }

  .percentage {
    fill: $accent-color;
    font-family: $font-family-english;
    font-size: 0.5em;
    text-anchor: middle;
    dominant-baseline: middle;
  }
}

.skill-name {
  font-size: 14px;
  color: $secondary-color;
}
</style>