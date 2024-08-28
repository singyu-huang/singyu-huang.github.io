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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

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
  setup(props, { emit }) {
    const progressWidth = ref(10);
    const activeMilestoneId = ref(1);
    const scrolling = ref(false);

    const currentTheme = computed(() => {
      const activeMilestone = props.milestones.find(m => m.id === activeMilestoneId.value);
      return activeMilestone && activeMilestone.theme ? activeMilestone.theme : (props.isLightTheme ? 'light' : 'dark');
    });

    const scrollToPreviousMilestone = () => {
      if (scrolling.value) return;
      scrolling.value = true;
      const currentMilestoneIndex = props.milestones.findIndex(m => m.id === activeMilestoneId.value);
      if (currentMilestoneIndex > 0) {
        jumpToMilestone(props.milestones[currentMilestoneIndex - 1]);
      } else {
        scrolling.value = false;
      }
    };

    const scrollToNextMilestone = () => {
      if (scrolling.value) return;
      scrolling.value = true;
      const currentMilestoneIndex = props.milestones.findIndex(m => m.id === activeMilestoneId.value);
      if (currentMilestoneIndex < props.milestones.length - 1) {
        jumpToMilestone(props.milestones[currentMilestoneIndex + 1]);
      } else {
        scrolling.value = false;
      }
    };

    const onWheel = (event) => {
      if (scrolling.value) return;
      if (event.deltaY > 0) {
        scrollToNextMilestone();
      } else {
        scrollToPreviousMilestone();
      }
    };

    const jumpToMilestone = (milestone) => {
      progressWidth.value = milestone.position;
      activeMilestoneId.value = milestone.id;
      emit('updateSection', milestone.id);
      setTimeout(() => {
        scrolling.value = false;
      }, 300);
    };

    onMounted(() => {
      window.addEventListener('wheel', onWheel, { passive: true });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('wheel', onWheel);
    });

    return {
      progressWidth,
      activeMilestoneId,
      scrolling,
      currentTheme,
      scrollToPreviousMilestone,
      scrollToNextMilestone,
      jumpToMilestone
    };
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
  font-family: none;
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