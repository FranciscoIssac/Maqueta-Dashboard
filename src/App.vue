<script setup></script>

<template>
  <router-view></router-view>
</template>

<style scoped>
#header > .space {
  height: 20px;
  width: 100%;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

#backgorund {
  background: var(--Background, linear-gradient(180deg, #bec7d3 0%, #fff 50%));
}

@media (max-width: 1024px) {
  #header > .space {
    height: 20px;
    width: 100%;
  }

  #mobile {
    margin-top: 7em;
  }

  #footer {
    display: none;
  }

  #backgorund {
    background: var(
      --Background,
      linear-gradient(180deg, #bec7d3 0%, #fff 50%)
    );
  }
}
</style>
