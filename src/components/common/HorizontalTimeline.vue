<template>
  <div :class="['timeline-container', currentTheme]">
    <div class="arrow-left" @click="scrollToPreviousMilestone">&#9664;</div>
    <div class="timeline-wrapper">
      <div class="timeline">
        <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
      </div>
      <div v-for="milestone in milestones" :key="milestone.id"
        :class="['milestone', { active: milestone.id <= activeMilestoneId, current: milestone.id === activeMilestoneId }]"
        :style="{ left: milestone.position + '%' }" @click="jumpToMilestone(milestone)">
        <span class="milestone-label">{{ milestone.label }}</span>
      </div>
    </div>
    <div class="arrow-right" @click="scrollToNextMilestone">&#9654;</div>
  </div>
</template>

<script>
export default {
  props: {
    milestones: {
      type: Array,
      required: true,
      default: () => [
        { id: 1, position: 10, label: 'Section 1' },
        { id: 2, position: 30, label: 'Section 2' },
        { id: 3, position: 50, label: 'Section 3' },
        { id: 4, position: 70, label: 'Section 4' },
        { id: 5, position: 90, label: 'Section 5' }
      ]
    },
    isLightTheme: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      progressWidth: 10,
      activeMilestoneId: 1,
      scrolling: false
    };
  },
  mounted() {
    console.log('mounted: adding wheel event listener');
    window.addEventListener('wheel', this.onWheel, { passive: true });
    this.updateSection();
  },
  beforeUnmount() {
    console.log('beforeUnmount: removing wheel event listener');
    window.removeEventListener('wheel', this.onWheel);
  },
  computed: {
    currentTheme() {
      const activeMilestone = this.milestones.find(m => m.id === this.activeMilestoneId);
      return activeMilestone ? activeMilestone.theme : 'light';
    }
  },
  methods: {
    scrollToPreviousMilestone() {
      if (this.scrolling) return;
      this.scrolling = true;
      const currentMilestoneIndex = this.milestones.findIndex(m => m.id === this.activeMilestoneId);
      if (currentMilestoneIndex > 0) {
        this.jumpToMilestone(this.milestones[currentMilestoneIndex - 1]);
      } else {
        this.scrolling = false;
      }
    },
    scrollToNextMilestone() {
      if (this.scrolling) return;
      this.scrolling = true;
      const currentMilestoneIndex = this.milestones.findIndex(m => m.id === this.activeMilestoneId);
      if (currentMilestoneIndex < this.milestones.length - 1) {
        this.jumpToMilestone(this.milestones[currentMilestoneIndex + 1]);
      } else {
        this.scrolling = false;
      }
    },
    onWheel(event) {
      if (this.scrolling) return;
      console.log("Wheel event detected");
      if (event.deltaY > 0) {
        this.scrollToNextMilestone();
      } else {
        this.scrollToPreviousMilestone();
      }
    },
    jumpToMilestone(milestone) {
      this.progressWidth = milestone.position;
      this.activeMilestoneId = milestone.id;
      this.updateSection();
      setTimeout(() => {
        this.scrolling = false;
      }, 300);
    },
    updateSection() {
      const closestMilestone = this.milestones.reduce((prev, curr) => {
        return Math.abs(curr.position - this.progressWidth) < Math.abs(prev.position - this.progressWidth) ? curr : prev;
      });
      this.activeMilestoneId = closestMilestone.id;
      this.$emit('updateSection', closestMilestone.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.timeline-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.light {
    color: $accent-color;
    .timeline {
      background-color: $accent-color;
    }
    .progress-bar {
      background-color: $highlight-light-color;
    }
    .milestone::after {
      background-color: $accent-color;
    }
    .milestone.active::after {
      background-color: $highlight-light-color;
    }
    .milestone.active.current::after {
      animation: blink-light 1s infinite alternate;
    }
    .milestone.active .milestone-label {
      color: $highlight-light-color;
    }
  }
  &.dark {
    color: $accent-color;
    .timeline {
      background-color: $accent-color;
    }
    .progress-bar {
      background-color: $highlight-dark-color;
    }
    .milestone::after {
      background-color: $secondary-color;
    }
    .milestone.active::after {
      background-color: $highlight-dark-color;
    }
    .milestone.active.current::after {
      animation: blink-dark 1s infinite alternate;
    }
    .milestone.active .milestone-label {
      color: $highlight-dark-color;
    }
  }
}

.arrow-left,
.arrow-right {
  font-size: 2em;
  cursor: pointer;
  padding: 0 10px;
  user-select: none;
  font-family:none;
}

.timeline-wrapper {
  position: relative;
  flex-grow: 1;
  margin: 0 10px;
}

.timeline {
  position: relative;
  height: 2px;
}

.progress-bar {
  height: 100%;
  transition: width 0.3s ease;
}

.milestone {
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  cursor: pointer;
}

.milestone::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -23.5px;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.milestone.active::after {
  animation: blink 1s infinite alternate;
}

@keyframes blink-light {
  0% {
    background-color: $highlight-light-color;
  }
  100% {
    background-color: lighten($highlight-light-color, 30%);
  }
}

@keyframes blink-dark {
  0% {
    background-color: $highlight-dark-color;
  }
  100% {
    background-color: lighten($highlight-dark-color, 30%);
  }
}

.milestone-label {
  position: absolute;
  bottom: -5px;
  transform: translateX(-50%);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .milestone-label {
    display: none !important;
  }
}
</style>