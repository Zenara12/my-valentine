<script setup lang="ts">
import { ref, computed } from 'vue'
import { MESSAGES, TEDDY_IMAGE_URL } from './constants'

type View = 'invite' | 'celebration'

const view         = ref<View>('invite')
const messageIndex = ref(-1)
const yesScale     = ref(1)
const noScale      = ref(1)

const currentQuestion = computed(() =>
  messageIndex.value === -1
    ? "My Lady, will you be my Valentine? ❤️"
    : `${MESSAGES[messageIndex.value]} ❤️`
)

function handleNoClick() {
  messageIndex.value = (messageIndex.value + 1) % MESSAGES.length
  yesScale.value     = yesScale.value + 0.4
  noScale.value      = Math.max(0.6, 1 - (messageIndex.value * 0.05))
}

function handleYesClick() { view.value = 'celebration' }

function handleReset() {
  view.value         = 'invite'
  messageIndex.value = -1
  yesScale.value     = 1
  noScale.value      = 1
}
</script>

<template>

  <!-- ══════════════════════════════════
       CELEBRATION SCREEN
  ══════════════════════════════════ -->
  <div v-if="view === 'celebration'" class="celebration fade-in">

    <!-- Floating hearts (background) -->
    <div class="celebration__bg-hearts">
      <span class="drift-1" style="top:8%;  left:20%">❤️</span>
      <span class="drift-2" style="top:30%; right:22%">💖</span>
      <span class="drift-3" style="bottom:28%; left:48%">💕</span>
      <span class="drift-4" style="top:48%; left:6%">💗</span>
      <span class="drift-5" style="bottom:8%; right:8%">💘</span>
    </div>

    <!-- Avatar -->
    <div
      class="celebration__avatar"
      :style="{ backgroundImage: `url('${TEDDY_IMAGE_URL}')` }"
    />

    <span class="material-symbols-outlined celebration__icon heart-pulse">celebration</span>
    <h2 class="celebration__title">YAY! Happy Valentine's Day! ❤️</h2>
    <p class="celebration__subtitle">You've made me the happiest person ever!</p>

    <button class="btn-reset" @click="handleReset">See you soon!</button>
  </div>


  <!-- ══════════════════════════════════
       INVITE SCREEN
  ══════════════════════════════════ -->
  <div v-else class="app-wrapper">

    <header class="app-header">
      <div class="app-header__icon">
        <span class="material-symbols-outlined" style="font-size:1.875rem">favorite</span>
      </div>
      <h2 class="app-header__title">Special Invite</h2>
    </header>

    <main class="app-main">

      <!-- Hero circle -->
      <div class="hero-circle floating">
        <div
          class="hero-circle__image"
          :style="{ backgroundImage: `url('${TEDDY_IMAGE_URL}')` }"
        />
        <div class="hero-circle__badge">
          <span class="material-symbols-outlined" style="font-size:2.5rem">volunteer_activism</span>
        </div>
      </div>

      <!-- Text -->
      <div class="invite-text">
        <h1 class="invite-text__question">{{ currentQuestion }}</h1>
        <p class="invite-text__sub">
          I've been thinking of a million ways to ask,<br>
          but simple is best. You mean the world to me!
        </p>
      </div>

      <!-- Buttons -->
      <div class="btn-group">
        <button
          class="btn-yes btn-press"
          :style="{ transform: `scale(${yesScale})` }"
          @click="handleYesClick"
        >
          <span class="material-symbols-outlined">favorite</span>
          Yes!
        </button>

        <button
          class="btn-no btn-press"
          :style="{ transform: `scale(${noScale})` }"
          @click="handleNoClick"
        >
          No
        </button>
      </div>

    </main>
  </div>

</template>
