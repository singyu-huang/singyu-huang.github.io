<template>
  <div id="app" v-touch:swipe.left="previousSection" v-touch:swipe.right="nextSection">
    <div class="main-content">
      <transition name="fade" mode="out-in">
        <div :key="currentSection" class="section-container">
          <ResumeSection v-if="currentSection === 1" />
          <IntroSection v-else-if="currentSection === 2" />
          <ExperienceSection v-else-if="currentSection === 3" />
          <SkillsSection v-else-if="currentSection === 4" />
          <PortfoliosSection v-else-if="currentSection === 5" />
        </div>
      </transition>
    </div>
    <HorizontalTimeline ref="timeline" :milestones="milestones" @updateSection="updateSection" />
  </div>
</template>

<script>
import HorizontalTimeline from './components/common/HorizontalTimeline.vue';
import ResumeSection from './components/sections/ResumeSection.vue';
import IntroSection from './components/sections/IntroSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import SkillsSection from './components/sections/SkillSection.vue';
import PortfoliosSection from './components/sections/ShowcaseSection.vue';

export default {
  name: 'App',
  components: {
    HorizontalTimeline,
    ResumeSection,
    IntroSection,
    ExperienceSection,
    SkillsSection,
    PortfoliosSection
  },
  data() {
    return {
      currentSection: 1,
      milestones: [
        { id: 1, position: 10, label: '封面', theme: 'dark' },
        { id: 2, position: 30, label: '關於我', theme: 'light' },
        { id: 3, position: 50, label: '工作經歷', theme: 'light' },
        { id: 4, position: 70, label: '技能', theme: 'dark' },
        { id: 5, position: 90, label: '作品集', theme: 'light' }
      ]
    };
  },
  methods: {
    updateSection(id) {
      this.currentSection = id;
    },
    nextSection() {
      this.$refs.timeline.scrollToNextMilestone();
    },
    previousSection() {
      this.$refs.timeline.scrollToPreviousMilestone();
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: $font-family-chinese;
}

#app {
  font-family: $font-family-chinese;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.section-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.text-content {
  padding: 20px;
  text-align: left;
}

.content {
  font-size: 1.2em;
  font-family: $font-family-chinese;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
