<script setup>
import Header from "./components/Header.vue";
import HeaderLine from "./components/HeaderLine.vue";
import TestBread from "./components/TestBread.vue";
import UserButton from "./components/UserButton.vue";
import Bell from "./components/icons/Bell.vue";
import Mail from "./components/icons/Mail.vue";
</script>

<template>
  <div id="header">
    <Header></Header>
    <div class="space">.</div>
    <HeaderLine></HeaderLine>
  </div>

  <div id="sub-header">
    <TestBread id="testbread">
      <template #first>inicio</template>
      <template #second>inicio</template>
    </TestBread>
    <div id="user">
      <Bell></Bell>
      <Mail></Mail>
      <UserButton>
        <template #user>Administrador</template>
      </UserButton>
    </div>
  </div>
</template>

<style scoped>
#header > .space {
  height: 20px;
  width: 100%;
}
#sub-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 2px double black;
  & #user {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 768px) {
  #sub-header {
    margin: auto;
    & #testbread {
      display: none;
    }
  }
}
</style>
