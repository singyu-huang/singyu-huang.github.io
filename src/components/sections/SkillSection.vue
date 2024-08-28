<template>
    <section class="skills-section">
        <div class="content">
            <div class="text-section">
                <h2 class="skills-title">HARD SKILLS</h2>
                <p class="skills-description">
                    多年的工作經歷，使我累積了多元的技術技能，確保我能在各種領域中做出貢獻。這些是我擅長的技術，期待能在專案中發揮作用。
                </p>
            </div>
            <div class="skills-container">
                <div v-for="skill in skills" :key="skill.name" class="skill-item">
                    <CircularProgress v-if="!isMobile" :label="skill.name" :percentage="skill.percentage" />
                    <ProgressBar v-else :label="skill.name" :percentage="skill.percentage" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CircularProgress from '../common/CircularProgress.vue';
import ProgressBar from '../common/ProgressBar.vue';

const isMobile = ref(window.innerWidth <= 767);

const skills = ref([
    { name: 'HTML / CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'AngularJS', percentage: 60 },
    { name: 'React.js', percentage: 50 },
    { name: 'Node.js', percentage: 50 },
    { name: 'Vue.js', percentage: 80 },
    { name: 'MS SQL', percentage: 40 },
    { name: 'Git', percentage: 80 },
    { name: 'Bootstrap', percentage: 60 },
    { name: 'SCSS/SASS', percentage: 70 },
    { name: 'MS Office', percentage: 80 },
    { name: '專案管理', percentage: 30 }
]);

const handleResize = () => {
    isMobile.value = window.innerWidth <= 767;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.skills-section {
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: $primary-color;
    height: 100%;
}

.content {
    display: flex;
    max-width: 1200px;
    width: 100%;
}

.text-section {
    flex: 1;
    margin-right: 40px;
}

.skills-title {
    font-family: $font-family-english;
    font-size: 15vmin;
    margin-bottom: 20px;
    color: $secondary-color;
    font-weight: 100;
}

.skills-description {
    font-size: 16px;
    color: $text-color;
    line-height: 1.6;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.skill-item {
    margin: 20px;
    text-align: center;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 1024px) {
    .skills-section {
        flex-direction: column;

        .text-section {
            margin-right: 0;
            margin-bottom: 20px;
            text-align: center;
            font-size: 1rem;
        }

        .skills-title {
            font-size: 8vmin;
            margin: 0 auto;
        }

        .skills-description {
            font-size: 14px;
        }
    }

    .content {
        flex-direction: column;
        align-items: center;
    }

    .skill-item {
        margin: 0;
    }
}

@media (max-width: 767px) {
    .skills-section {
        .circular-progress-item {
            flex: 1 1 45%;
            max-width: 70px;
        }
    }

    .content {
        display: block;
    }

    .skills-description {
        display: none;
    }

    .skill-item {
        width: 100%;
        display: block;
        margin: 0;
    }
}
</style>