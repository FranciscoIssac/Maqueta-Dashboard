<script setup>
import Counter from "./components/Counter.vue";
import Lista from "./components/ListReactive.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import Component1 from "./components/Component1.vue";
import Tablero from "./components/Tablero.vue";

import DownloadButton from "./components/DownloadButton.vue";
import EvaluateButton from "./components/EvaluateButton.vue";
import AcceptButton from "./components/AcceptButton.vue";
import CancelButton from "./components/CancelButton.vue";
import CustomButton from "./components/CustomButton.vue";
import UserButton from "./components/UserButton.vue";
import MailIcon from "./components/icons/Mail.vue";
import BellIcon from "./components/icons/Bell.vue";
import PersonIcon from "./components/icons/Person.vue";


</script>

<!-- <template>
  <Counter></Counter>
</template> -->

<!-- <template>
  <Lista></Lista>
</template> -->

<!-- <template>
  <Card>
    <template #title>Welcome</template>
    <template #description>This is a simple card for example.</template>
  </Card>
</template> -->

<!-- <template>
  <Tablero>
    <template #tablero-header>Guia</template>
  </Tablero>
</template> -->

<!-- <template>
  <UserButton>
    <template #user>
      Administrador
    </template>
  </UserButton>
</template> -->

<template>
  <div>
    <CustomButton
    text=""
      backgroundColor="#004A98"
      width="100"
      height="40"/>

    <!-- <CustomButton 
      text="Aceptar" 
      backgroundColor="#004A98" 
      width="206" 
      height="50"
    /> -->

    <!-- <CustomButton 
      text="Cancelar" 
      backgroundColor="#00B2E3" 
      width="206" 
      height="50"
    /> -->

    <!-- <CustomButton 
      text="Descargar" 
      backgroundColor="#004A98" 
      width="200" 
      height="50"
    /> -->

  </div>
</template>


<style scoped></style>
