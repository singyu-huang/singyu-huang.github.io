<template>
  <div class="section-resume">
    <div class="top-content">
      <h1 class="main-title">SINGYU</h1>
    </div>
    <div class="bottom-content">
      <div class="left-content">
        <h2 class="subtitle">HUANG</h2>
        <p class="description">歡迎來到我的履歷！</p>
        <p class="small-text">希望藉由這個履歷，你能簡單地認識我，我將帶你瀏覽我的故事、工作經歷、技能、專案。</p>
      </div>
      <div class="right-content">
        <img class="cover-image" src="/images/section1-img.jpg" alt="封面大圖">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ResumeSection',
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.section-resume {
  color: $secondary-color;
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  height: 100%;

  .top-content {
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-content: center;
    padding-left: 20px;

    .main-title {
      font-family: $font-family-english;
      font-weight: 100 !important;
      font-size: clamp(1rem, 32vw, 60vh);
      margin: 0;
      line-height: 1;
    }
  }

  .bottom-content {
    flex: 4;
    display: flex;
    flex-direction: row;
    width: 100%;

    .left-content {
      .subtitle {
        font-family: $font-family-english;
        font-weight: 100 !important;
        color: $accent-color;
        margin: 0;
        font-size: clamp(1rem, 12.5vw, 20vh);
        margin-top: -6vh;
        letter-spacing: 25px;
        max-height: 22vh;

        &::after {
          content: "";
          display: inline-block;
          width: 100%;
        }
      }

      .description {
        font-size: clamp(1rem, 4vw, 6vh);
        color: $text-color;
        margin: 0 auto !important;
      }

      .small-text {
        font-size: 0.8em;
        color: $text-color;
        margin: 0 auto;
      }
    }

    .right-content {
      .cover-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 766px) {
  .section-resume {
    .top-content {
      flex: 3;
      padding-left: 0;
      justify-content: center;

      .main-title {
        font-size: 30vmin;
        margin: 10px auto !important;
      }
    }

    .bottom-content {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      .left-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .subtitle {
          font-size: 24vmin;
          letter-spacing: 3vmin;
        }

        .description,
        .small-text {
          text-align: center;
        }

        .description {
          margin-top: 30px !important;
        }
      }

      .right-content {
        width: 100%;

        .cover-image {
          max-width: 100%;
          height: auto;
        }
      }
    }

    .small-text {
      margin: 20px 10px !important;
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .section-resume {
    .bottom-content {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .left-content,
      .right-content {
        width: 100%;
        display: block;
        flex: none;
      }

      .left-content {
        .subtitle {
          font-size: 13vh;
          height: 15vh;
        }
      }

      .right-content {
        .cover-image {
          max-width: 100%;
          height: auto;
        }
      }
    }

    .small-text {
      margin: 20px 10px !important;
    }
  }
}

@media (min-width: 992px) and (max-width: 1920px) {
  .section-resume {
    .bottom-content {
      flex-direction: row;

      .left-content {
        .subtitle {
          font-size: clamp(1rem, 12.5vw, 20vh);
          margin-top: -6vh;
          letter-spacing: 25px;
        }

        .description {
          font-size: clamp(1rem, 4vw, 6vh);
        }
      }

      .right-content {
        .cover-image {
          width: 100%;
          height: 100%;
        }
      }
    }

    .top-content {
      justify-content: flex-start;
    }
  }
}
</style>