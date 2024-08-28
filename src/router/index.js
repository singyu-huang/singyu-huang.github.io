import { createRouter, createWebHistory } from 'vue-router'
import ResumeSection from '../components/sections/ResumeSection.vue'
import IntroSection from '../components/sections/IntroSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import SkillsSection from '../components/sections/SkillSection.vue'
import PortfoliosSection from '../components/sections/ShowcaseSection.vue'

const routes = [
    { path: '/', redirect: '/resume' },
    { path: '/resume', component: ResumeSection },
    { path: '/intro', component: IntroSection },
    { path: '/experience', component: ExperienceSection },
    { path: '/skills', component: SkillsSection },
    { path: '/portfolios', component: PortfoliosSection }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router