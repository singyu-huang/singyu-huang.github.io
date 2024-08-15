<template>
  <section class="showcase-section">
    <div class="content-wrapper">
      <div class="text-content">
        <h2>SHOWCASE</h2>
        <p>
          呈現我在職涯中所參與的各項專案，包括程式碼的範例與網站作品。這些項目展現了我在技術上的實力，以及如何將這些技能應用於各個不同領域的實際經驗。透過這些範例，可以了解如何將設計理念轉化為功能齊全的應用程式。
        </p>
      </div>
      <div class="image-content">
        <div class="image-grid">
          <a v-for="(showcase, index) in showcase" :key="index" :href="showcase.link" target="_blank">
            <div class="image-wrapper">
              <img :src="showcase.image" :alt="showcase.title" />
              <div class="overlay">
                <div class="project-title">{{ showcase.title }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'ShowcaseSection',
  data() {
    return {
      showcase: [
        {
          title: 'Codepen',
          image: '/images/showcase/codepen.webp',
          link: 'https://codepen.io/hanigogo'
        },
        {
          title: 'deta International',
          image: '/images/showcase/deta.png',
          link: 'https://www.deta.com.tw/'
        },
        {
          title: 'Covid19 確診者足跡地圖',
          image: '/images/showcase/covid19.webp',
          link: 'https://docs.google.com/presentation/d/13t6EzQWiZ6KwazDKtc6HhnB_ODEzt20hil6ThtNcMBc/edit'
        },
        {
          title: 'TOCC填表追蹤機器人',
          image: '/images/showcase/linebot.webp',
          link: 'https://jsfiddle.net/SingYu/v1r6hks8/'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.showcase-section {
  padding: 20px;
  background-color: $secondary-color;
  height: 100%;

  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .text-content {
      flex: 1;
      padding-right: 20px;
      font-family: $font-family-english;

      h2 {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 20px;
        color: $primary-color;
      }

      p {
        font-size: 3vmin;
        line-height: 1.5;
        margin-bottom: 10px;
        color: $text-color;
      }
    }

    .image-content {
      flex: 1;

      .image-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        .image-wrapper {
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
          aspect-ratio: 1 / 1;

          img {
            width: 100%;
            height: 100%;
            transition: transform 0.3s ease;
            display: block;
            object-fit: cover;
            object-position: center;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-title {
            font-size: 18px;
            text-align: center;
            padding: 0 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 766px) {
  .showcase-section {
    .content-wrapper {
      flex-direction: column !important;

      .text-content {
        padding-right: 0;
        text-align: center;
      }

      .image-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;

        .image-grid {
          width: 70vw;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .showcase-section {
    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 100%;

      .text-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
          font-size: 10vmin !important;
        }
      }

      .image-content {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center;
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1920px) {
  .showcase-section {
    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 100%;

      .text-content {
        padding-right: 20px;
        text-align: left;

        h2 {
          font-size: 15vmin !important;
        }
      }

      .image-content {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center;

        .image-grid {
          max-width: 40vw;
        }

        .image-wrapper {
          img {
            transition: transform 0.3s ease;
          }

          &:hover {
            .overlay {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>