<template>
    <div class="section-intro">
        <div class="image-content">
            <img src="/images/about-me.jpg" alt="Description of image">
        </div>
        <div class="text-content">
            <h2>嗨！我是星瑜，來自新北市樹林，水瓶座O型 I/ENFP九號人。我總是充滿好奇心，喜歡探索新事物，並以獨特的視角看待世界。
            </h2>
            <p>週末我經常會獨自或與少數幾位好友一起走進大自然，或是來一杯手沖咖啡，喝一杯香醇的咖啡是我放鬆與享受的方式，也很期待未來和你一起分享我的喜悅。閒暇時我也喜歡與長者們分享知識與經驗，這讓我感到無比的滿足。能夠為他們帶來歡樂與新的學習機會，是我最有成就感的事情之一。
            </p>
            <div class="buttons">
                <button class="btn btn-black" @click="openModal('adventure')">戶外旅遊</button>
                <button class="btn btn-brown" @click="openModal('coffee')">手沖咖啡</button>
                <button class="btn btn-white" @click="openModal('teaching')">樂齡教學</button>
            </div>

            <CustomModal ref="adventureModal">
                <div class="adventure-content">
                    <div class="text-part">
                        <p>我喜歡爬山，因為這是一種讓我放鬆心情、遠離都市喧囂的方式。在山間行走，我能夠感受到自然的平靜與美好，每一次呼吸都讓我更加貼近大自然。爬山的過程中，與綠意盎然的景色相伴，我享受那種慢慢走、慢慢看的悠閒感覺。
                        </p>

                        <p>爬山不僅讓我有機會鍛鍊身體，更是一次與自己對話的時光。當我漫步在山林間，聆聽鳥鳴和微風拂過樹梢的聲音時，那種寧靜與自由的感覺無可比擬。我喜歡記錄下這些瞬間，透過影像和文字與朋友分享，讓大家也能感受到這份簡單而純粹的喜悅。
                        </p>

                        <p>對我來說，爬山是生活中的一種平衡，它讓我在忙碌的日常中找到片刻的寧靜，給予我前進的力量。</p>
                    </div>
                    <div class="image-part">
                        <img src="/images/adventure.jpg" alt="戶外探險圖片">
                    </div>
                </div>
            </CustomModal>

            <CustomModal ref="coffeeModal">
                <div class="coffee-content">
                    <video ref="coffeeVideo" controls width="100%">
                        <source src="/videos/coffee.mp4" type="video/mp4">
                        您的瀏覽器不支持播放此影片。
                    </video>
                </div>
            </CustomModal>

            <CustomModal ref="teachingModal">
                <div class="teaching-content">
                    <video ref="teachingVideo" controls width="100%">
                        <source src="/videos/teaching.mp4" type="video/mp4">
                        您的瀏覽器不支持播放此影片。
                    </video>
                    <p>在長照中心兼職樂齡課程帶領阿公阿嬤做運動、玩遊戲，也是我的興趣之一！</p>
                </div>
            </CustomModal>
            <h1>ABOUT</h1>
            <h1>ME</h1>
        </div>
    </div>
</template>

<script>
import CustomModal from '../common/CustomModal.vue';

export default {
    name: 'IntroSection',
    components: {
        CustomModal
    },
    methods: {
        openModal(type) {
            if (type === 'adventure') {
                this.$refs.adventureModal.openModal();
            } else if (type === 'coffee') {
                this.$refs.coffeeModal.openModal();
                this.$nextTick(() => {
                    const coffeeVideo = this.$refs.coffeeVideo;
                    if (coffeeVideo) {
                        coffeeVideo.play();
                    }
                });
            } else if (type === 'teaching') {
                this.$refs.teachingModal.openModal();
                this.$nextTick(() => {
                    const teachingVideo = this.$refs.teachingVideo;
                    if (teachingVideo) {
                        teachingVideo.play();
                    }
                });
            }
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.section-intro {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: $background-light;
  color: $primary-color;
  height: 100%;

  .image-content {
    flex: 4;
    padding-right: 20px;
    overflow: hidden;

    img {
      width: auto;
      height: 80vh;
      clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
    }
  }

  .text-content {
    flex: 6;
    padding-left: 20px;

    h2 {
      font-size: 0.8em;
    }

    h1 {
      font-family: $font-family-english;
      font-size: 10em;
      margin: 0;
      font-weight: normal;
    }

    p {
      font-size: 0.8em;
      line-height: 1.5;
      margin-bottom: 20px;
    }
  }

  .buttons {
    display: flex;
    gap: 10px;

    .btn {
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.9;
      }

      &.btn-black {
        background-color: $primary-color;
        color: $background-light;
        border: 1px solid darken($primary-color, 10%);
      }

      &.btn-brown {
        background-color: $accent-color;
        color: $primary-color;
        border: 1px solid darken($accent-color, 10%);
      }

      &.btn-white {
        background-color: $background-light;
        color: $primary-color;
        border: 1px solid darken($accent-color, 10%);
      }
    }
  }

  .adventure-content,
  .coffee-content,
  .teaching-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .adventure-content {
    .text-part {
      flex: 1;
      padding-right: 20px;

      p {
        font-size: 1em;
        line-height: 1.5;
      }
    }

    .image-part {
      flex: 1;

      img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
      }
    }
  }

  .coffee-content,
  .teaching-content {
    justify-content: center;

    video {
      max-width: 100%;
      height: 80vh;
      border-radius: 5px;
    }
  }
}

@media (max-width: 766px) {
  .section-intro {
    flex-direction: column;
    align-items: center;
    height: 100%;

    .image-content {
      flex: 3;
      padding-right: 0;

      img {
        width: 100%;
        height: auto;
        clip-path: none;
        object-fit: cover;
        object-position: center;
        max-height: 300px;
      }
    }

    .text-content {
      padding-top: 20px;

      h1 {
        font-size: 12vmin;
      }

      p {
        font-size: vmin;
      }
    }

    .buttons .btn {
      font-size: 3vmin;
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .section-intro {
    justify-content: center;
    align-items: center;

    .image-content {
      img {
        clip-path: none;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: auto;
      }
    }

    .text-content {
      padding-left: 20px;

      h2 {
        font-size: 3vmin;
      }

      p {
        font-size: 2vmin;
      }

      h1 {
        font-size: 16vmin;
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1920px) {
  .section-intro {
    .text-content {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-top: 0px;

      h2 {
        font-size: 3vmin;
      }

      p {
        font-size: 2vmin;
      }

      h1 {
        font-size: 18vmin;
      }
    }

    .image-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

</style>