<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  height: {
    type: String,
    default: '351px'
  }
});
</script>

<template>
  <div class="tablero-container">
    <div class="tablero-header">
      <slot name="tablero-header"></slot>
    </div>
    <div class="tablero-body" :style="{ minHeight: props.height }">
      <ul>
        <li>
          Inicio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
          <ul>
            <li>
              Material 1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
              <ul>
                <li>Detalles</li>
              </ul>
            </li>
            <li>
              Material 2
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.tablero-container {
  display: flex;
  margin: 0;
  flex-direction: column;
  max-width: 345px;
  width: 300px;
}
.tablero-header {
  background-color: #00b2e3;
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  padding: 0 10px;
}
.tablero-body {
  background-color: #9bd4e4;
  color: black;
  padding: 2px 10px;
  align-items: center;
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
li {
  margin-bottom: 10px;
}
svg {
  width: 20px;
}
</style>
