<template>
  <div v-if="isVisible" class="modal-overlay" @animationend="handleAnimationEnd">
    <div :class="['modal-content', isClosing ? 'animated-modal-out' : 'animated-modal-in']">
      <button class="close-btn" @click="closeModal">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isClosing: false,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
      this.isClosing = false;
    },
    closeModal() {
      this.isClosing = true;
    },
    handleAnimationEnd() {
      if (this.isClosing) {
        this.isVisible = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: $secondary-color;
  padding: 35px;
  margin: 30px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: $accent-color;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 15px;
    font-size: 2.5vmin !important;

    .close-btn {
      font-size: 16px;
    }
  }
}

/* 彈出動畫 */
@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-modal-in {
  animation: modal-fade-in 0.3s ease-out;
}

/* 淡出動畫 */
@keyframes modal-fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animated-modal-out {
  animation: modal-fade-out 0.3s ease-out;
}
</style>
