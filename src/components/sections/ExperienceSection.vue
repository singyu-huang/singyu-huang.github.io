<template>
    <div class="experience-section">
        <div class="text-content">
            <h2 class="section-title">EXPERIENCE</h2>
            <p class="section-subtitle">
                我擁有超過十年的工作經驗，涵蓋了從程式設計師、前端工程師到專案管理師的多元角色。我曾擔任專案管理師，協助推動AI和數位賦能的相關專案。此外，我還參與過g0v專案，協助開發Covid19確診者足跡圖和員工健康管理工具。我擅長利用各種前端技術，如HTML、JavaScript、AngularJS、React.js等，並且具備豐富的專案規劃與執行經驗。
            </p>

            <div class="timeline">
                <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index">
                    <h3 class="timeline-date" @click="handleClick(index)">{{ item.date }}</h3>
                    <p v-if="!isMobileOrTablet" class="timeline-content">{{ item.content }}</p>
                </div>
            </div>
        </div>

        <div class="image-container">
            <img src="/images/experience.jpg" alt="Experience Image" />
        </div>

        <CustomModal ref="customModal">
            <h3>{{ timelineItems[selectedIndex].date }}</h3>
            <p>{{ timelineItems[selectedIndex].content }}</p>
        </CustomModal>
    </div>
</template>

<script>
import CustomModal from '../common/CustomModal.vue';

export default {
    name: "ExperienceSection",
    components: {
        CustomModal
    },
    data() {
        return {
            timelineItems: [
                { date: "2012 - 2015 年", content: "在這段時間，我作為一名軟體工程師，專注於企業內部系統的開發和維護，特別是針對生產系統和自動化流程的優化。我主要使用VB.net、Asp.net、Android、MS SQL等技術，為公司的生產線和ERP系統提供技術支持，這段經歷為我打下了堅實的技術基礎。" },
                { date: "2015 - 2018 年", content: "這是一個技術轉型的時期，我轉向前端開發，專注於網頁應用的設計和開發。在這段時間裡，我先後加入了多家公司，負責開發響應式網站和行動服務系統，並深入掌握了HTML、AngularJS、React.js、Node.js等前端技術。同時，我也參與了多個專案，提升了我的技術能力和前端開發經驗。" },
                { date: "2018 - 2024 年", content: "這段時間，我進入了長照領域，擔任日照中心的照顧服務員，並在多個長照單位工作。我負責策劃和執行長者的日常活動，並以此為契機深入了解長照的需求和運作模式。此外，我也參與了g0v的專案，協助開發了Covid19確診者足跡圖和員工健康管理工具，這段經歷讓我將技術與長照需求相結合。" },
                { date: "2024 年", content: "在這段短期工作中，我擔任了專案管理師，負責推動AI和高齡賦能相關專案。在這段時間內，我主要負責與合作夥伴溝通，協調專案進度，並解決專案中的各類問題，這段經歷使我更加熟悉專案管理流程，也強化了我在AI與數位賦能領域的知識。" },
            ],
            selectedIndex: 0,
            isMobileOrTablet: false,
        };
    },
    mounted() {
        this.checkDevice();
        window.addEventListener("resize", this.checkDevice);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkDevice);
    },
    methods: {
        checkDevice() {
            this.isMobileOrTablet = window.innerWidth <= 1024;
        },
        handleClick(index) {
            this.selectedIndex = index;
            if (this.isMobileOrTablet) {
                this.$refs.customModal.openModal();
            }
        },
    },
};
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.experience-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: $secondary-color;
    padding: 20px;
    font-family: $font-family-english;
    height: 100%;

    .text-content {
        width: 70%;
        padding-right: 20px;

        .section-title {
            color: $primary-color;
            font-size: 15vmin;
            margin: 0;
        }

        .section-subtitle {
            margin-top: 10px;
            color: $primary-color;
            font-family: $font-family-chinese;
        }

        .timeline {
            display: flex;
            justify-content: space-between;
            margin-left: -3vw;

            .timeline-item {
                flex: 1;
                margin-bottom: 20px;

                .timeline-date {
                    margin-bottom: 5px;
                    font-size: 3vmin;
                    font-weight: 100;
                    color: #FFFFFF;
                    background-color: #31302c;
                    padding: 20px;
                }

                &:last-child .timeline-date {
                    border-top-right-radius: 50px;
                    border-bottom-right-radius: 50px;
                }

                .timeline-content {
                    font-family: $font-family-chinese;
                    font-size: 0.9rem;
                    margin-left: 15px;
                }
            }
        }
    }

    .image-container {
        width: 30%;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 1024px) {
        .image-container {
            display: none;
        }

        .section-subtitle {
            font-size: 3vmin;
        }

        .text-content {
            width: 100%;
            padding-right: 0;

            .timeline {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-content: space-around;

                .timeline-item {
                    width: 48%;
                    margin-bottom: 10px;
                    text-align: center;
                    flex: none;

                    .timeline-date {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 15px;
                        background-color: $primary-color;
                        color: $text-color;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 3vmin;
                        position: relative;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        transition: transform 0.1s ease-in-out;
                    }

                    .timeline-date::before {
                        content: "\f054";
                        font-family: "Font Awesome 5 Free";
                        font-weight: 900;
                        position: absolute;
                        left: 10px;
                        font-size: 5vmin;
                        color: $accent-color;
                    }

                    &:active .timeline-date {
                        transform: scale(0.95);
                    }

                    &:last-child .timeline-date {
                        border-radius: 5px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .section-subtitle {
            font-size: 2.5vmin;
        }

        .timeline {
            flex-direction: column;

            .timeline-item {
                width: 100%;
                margin-bottom: 10px;

                .timeline-date {
                    font-size: 5vmin;
                }
            }
        }
    }
}
</style>