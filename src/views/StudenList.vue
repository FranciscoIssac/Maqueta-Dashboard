<script setup>
import Bell from "../components/icons/Bell.vue";
import Mail from "../components/icons/Mail.vue";
import Header from "../components/Header.vue";
import HeaderLine from "../components/HeaderLine.vue";
import TestBread from "../components/TestBread.vue";
import UserButton from "../components/UserButton.vue";
import Tablero from "@/components/Tablero.vue";
import Footer from "@/components/Footer.vue";
import SubjectHeader from "@/components/SubjectHeader.vue";
import SubjectCard from "@/components/SubjectCard.vue";
import CalendarioResumen from "@/components/CalendarioResumen.vue";
import ListaEvidencia from "@/components/ListaEvidencia.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const irSubjectPage = () => {
  router.push("/subject");
};
</script>

<template>
  <div id="background">
    <div id="header">
      <Header></Header>
      <div class="space"></div>
      <HeaderLine></HeaderLine>
    </div>

    <div id="sub-header">
      <TestBread>
        <template #first>Inicio</template>
        <template #second>Alumnos</template>
      </TestBread>
      <div id="user">
        <Mail></Mail>
        <Bell></Bell>
        <UserButton @click="irSubjectPage">
          <template #user>Administrador</template>
        </UserButton>
      </div>
    </div>

    <div id="content">
      <div style="display: flex">
        <Tablero id="tablero">
          <template #header-title>Guia</template>
        </Tablero>
        <div id="right-content" style="display: flex; flex-direction: column">
          <div style="display: block">
            <h1 id="title" style="margin-top: -7px">Gestionar alumnos</h1>
            <ListaEvidencia></ListaEvidencia>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
#right-content {
  width: 825px;
}

#tablero {
  margin-right: 18px;
  height: 665px;
}

#title {
  color: #000;
  height: 44px;
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

#content {
  display: flex;
  padding: 16px 102px 80px 101px;
  justify-content: center;
  align-items: center;
  background: var(--Background, linear-gradient(180deg, #bec7d3 0%, #fff 0%));
}

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
    width: 22%;
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

#backgorund {
  background: var(--Background, linear-gradient(180deg, #bec7d3 0%, #fff 50%));
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
