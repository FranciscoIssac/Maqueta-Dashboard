<script setup>
import Counter from "./components/Counter.vue";
import Lista from "./components/ListReactive.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import Component1 from "./components/Component1.vue";
import Tablero from "./components/Tablero.vue";

import MailIcon from "./components/icons/Mail.vue";
import BellIcon from "./components/icons/Bell.vue";
import PersonIcon from "./components/icons/Person.vue";
import DownloadButton from "./components/DownloadButton.vue";
import EvaluateButton from "./components/EvaluateButton.vue";
import AcceptButton from "./components/AcceptButton.vue";
import CancelButton from "./components/CancelButton.vue";
import CustomButton from "./components/CustomButton.vue";
import UserButton from "./components/UserButton.vue";
import TextArea from "./components/TextArea.vue";
import EvidenceDisplay from "./components/EvidenceDisplay.vue";
import CustomInput from "./components/CustomInput.vue";
import ProgressBar from "./components/ProgressBar.vue";
import FileInput from "./components/FileInput.vue";
import Calendar from "./components/Calendar.vue";

</script>

<template>
  <Calendar></Calendar>
</template>

<!-- <template>
  <FileInput></FileInput>
</template> -->

<!-- <template>
  <ProgressBar progress="25"></ProgressBar>
</template> -->

<!-- <template>
  <CustomInput placeholder="Buscar">
  </CustomInput>
</template> -->

<!-- <template>
  <EvidenceDisplay description="Ejemplo">
  </EvidenceDisplay>
</template> -->

<!-- <template>
  <TextArea text="Comentarios" height="112">

  </TextArea>
</template> -->

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

<!-- <template>
  <div>
      <CustomButton variant="default" width="250px">Default Button</CustomButton>

      <CustomButton variant="default" :disabled="true" width="300px">Disabled Default</CustomButton>

      <CustomButton variant="alternative" width="300px">Alternative Button</CustomButton>

      <CustomButton variant="alternative" :disabled="true" width="300px">Disabled Alternative</CustomButton>
  </div>
</template> -->


<style scoped></style>
