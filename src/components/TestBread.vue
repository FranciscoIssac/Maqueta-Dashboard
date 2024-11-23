<script setup></script>

<template>
  <div class="testbread-container">
    <slot name="first"></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
    <slot name="second"></slot>
  </div>
</template>

<style>
.testbread-container {
  display: flex;
  padding: 5px;
  align-items: center;
  color: black;
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  & svg {
    width: 20px;
  }
}
</style>
