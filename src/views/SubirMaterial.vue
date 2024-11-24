<script setup>
import Bell from "../components/icons/Bell.vue";
import Mail from "../components/icons/Mail.vue";
import Header from "../components/Header.vue";
import HeaderLine from "../components/HeaderLine.vue";
import TestBread from "../components/TestBread.vue";
import UserButton from "../components/UserButton.vue";
import Tablero from "@/components/Tablero.vue";
import CustomInput from "@/components/CustomInput.vue";
import TextArea from "@/components/TextArea.vue";
import CustomButton from "@/components/CustomButton.vue";
import EvidenceDisplay from "@/components/EvidenceDisplay.vue";
import Footer from "@/components/Footer.vue";
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
        <template #second>Creación de Asignaciones</template>
      </TestBread>
      <div id="user">
        <Mail></Mail>
        <Bell></Bell>
        <UserButton>
          <template #user>Administrador</template>
        </UserButton>
      </div>
    </div>

    <div id="content">
      <div style="display: flex">
        <Tablero id="tablero"></Tablero>
        <div style="display: flex; flex-direction: column">
          <h1 id="title">Subir material</h1>
          <div style="display: flex">
            <div style="display: block">
              <p>Materia / Grupo / Tema</p>
              <TextArea
                id="textarea"
                text="Descripción"
                height="128"
              ></TextArea>
              <CustomInput
                id="input"
                placeholder="Ingresa el archivo aquí"
              ></CustomInput>
              <div>
                <CustomButton variant="alternative" width="206px"
                  >Cancelar</CustomButton
                >
                <CustomButton id="guardar-button" width="206px"
                  >Guardar</CustomButton
                >
              </div>
            </div>
            <EvidenceDisplay id="evidence"></EvidenceDisplay>
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
#evidence {
  margin-left: 20px;
}

#tablero {
  margin-right: 20px;
}

#guardar-button {
  margin-left: 47px;
}

#input {
  margin-bottom: 30px;
}

#textarea {
  margin-top: 9px;
  margin-bottom: 24px;
}

p,
#title {
  color: rgba(0, 0, 0, 0.8);
  height: 27px;
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

#title {
  color: #000;
  height: 44px;

  font-size: 32px;
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
</style>
