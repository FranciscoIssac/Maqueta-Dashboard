<!-- this component allows you to write something and show it with enter, the input has a variable and a directive -->
<script setup>
import { ref } from "vue";
const title = ref("");
const newTitle = ref("");

const changeTitle = () => {
  title.value = newTitle.value;
  newTitle.value = "";
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="input-field">
    <label for="">Write in the field to change the title</label>
    <input type="text" v-model="newTitle" @keyup.enter="changeTitle" />
  </div>
</template>

<style>
.input-field {
  display: flex;
  flex-direction: column;
  & input {
    width: 300px;
  }
}
</style>
