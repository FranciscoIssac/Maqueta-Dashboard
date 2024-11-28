<script setup>
import Header from "@/components/Header.vue";
import HeaderLine from "@/components/HeaderLine.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/AcceptButton.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const irGoodMainPage = () => {
  router.push("/main");
};
</script>

<template>
  <div id="background">
    <div id="header">
      <Header></Header>
      <div class="space"></div>
      <HeaderLine></HeaderLine>
    </div>

    <div id="content-1">
      <h2>¡Bienvenido!</h2>
      <!-- <div></div> -->
      <div id="text">
        Este sistema permite a los profesores de la Facultad de ingeniería
        manejar los datos de sus materias con mayor facilidad
      </div>
      <div id="button">
        <h2>Ingresa al sistema</h2>
        <Button @click="irGoodMainPage"></Button>
      </div>
    </div>

    <div id="content-2">
      <div class="form-container">
        <h2>Ingresar al sistema:</h2>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <Button @click="irGoodMainPage"></Button>
      </div>
    </div>

    <div id="footer">
      <Footer>
        <template #text>Text</template>
      </Footer>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  #header > .space {
    height: 20px;
    width: 100%;
  }

  #content-1 {
    flex: 1;
    display: grid;
    grid-template-columns: 2, 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin: 2em 25em;

    & h2 {
      grid-row: 1 / span 1;
      color: #000;
      font-family: "Open Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    & #text {
      grid-row: 2 / span 1;
      color: #000;
      font-family: "Open Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    & #button {
      grid-row: 1 / span 2;
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
    }
  }
  #content-2 {
    display: none;
  }
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  #backgorund {
    background: var(
      --Background,
      linear-gradient(180deg, #bec7d3 0%, #fff 50%)
    );
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  #header > .space {
    height: 20px;
    width: 100%;
  }
  #content-1 {
    display: none;
  }
  #content-2 {
    margin-top: 4em;
    & .form-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & h2 {
        overflow: hidden;
        color: #000;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: "Open Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & input {
        background-color: #a9a9a9;
        height: 1.5rem;
      }
    }
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
@media (max-width: 768px) {
  #header > .space {
    height: 20px;
    width: 100%;
  }
  #content-1 {
    display: none;
  }
  #content-2 {
    margin-top: 4em;
    & .form-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & h2 {
        overflow: hidden;
        color: #000;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: "Open Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & input {
        background-color: #a9a9a9;
        height: 1.5rem;
      }
    }
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
