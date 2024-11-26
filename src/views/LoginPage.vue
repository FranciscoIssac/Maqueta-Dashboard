<!-- esta vista es algo especial ya que la estructura cambia un poco cuando es movil
u ipad por lo que se tiene un comportamiento de componentes muy especial -->
<script>
import Header from "../components/Header.vue";
import HeaderLine from "../components/HeaderLine.vue";
import Footer from "@/components/Footer.vue";
import DesktopLogin from "../components/organisms/DesktopLogin.vue";
import MobileLogin from "../components/organisms/MobileLogin.vue";

export default {
  components: {
    DesktopLogin,
    MobileLogin,
    Header,
    HeaderLine,
    Footer,
  },
  data() {
    return {
      isDesktop: window.innerWidth >= 1024,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 1024;
    },
  },
};
</script>

<template>
  <div id="background">
    <div id="header">
      <Header></Header>
      <div class="space"></div>
      <HeaderLine></HeaderLine>
    </div>

    <DesktopLogin v-if="isDesktop"></DesktopLogin>
    <MobileLogin id="mobile" v-else></MobileLogin>

    <div id="footer">
      <Footer>
        <template #text>Text</template>
      </Footer>
    </div>
  </div>
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
