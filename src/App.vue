<template>
  <div id="app" v-touch:swipe.left="previousSection" v-touch:swipe.right="nextSection">
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" class="section-content" />
        </transition>
      </router-view>
    </div>
    <HorizontalTimeline ref="timeline" :milestones="milestones" @updateSection="updateSection" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HorizontalTimeline from './components/common/HorizontalTimeline.vue';

const router = useRouter();

const milestones = ref([
  { id: 1, position: 10, label: '封面', route: '/resume', theme: 'dark' },
  { id: 2, position: 30, label: '關於我', route: '/intro', theme: 'light' },
  { id: 3, position: 50, label: '工作經歷', route: '/experience', theme: 'light' },
  { id: 4, position: 70, label: '技能', route: '/skills', theme: 'dark' },
  { id: 5, position: 90, label: '作品集', route: '/portfolios', theme: 'light' }
]);

const updateSection = (id) => {
  const section = milestones.value.find(milestone => milestone.id === id);
  if (section) {
    router.push(section.route);
  }
};

const nextSection = () => {
  const currentRoute = router.currentRoute.value.path;
  const currentIndex = milestones.value.findIndex(milestone => milestone.route === currentRoute);
  if (currentIndex < milestones.value.length - 1) {
    router.push(milestones.value[currentIndex + 1].route);
  }
};

const previousSection = () => {
  const currentRoute = router.currentRoute.value.path;
  const currentIndex = milestones.value.findIndex(milestone => milestone.route === currentRoute);
  if (currentIndex > 0) {
    router.push(milestones.value[currentIndex - 1].route);
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
