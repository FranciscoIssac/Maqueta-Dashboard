<script setup>
import Header from "../components/Header.vue"
import HeaderLine from "../components/HeaderLine.vue"
import TestBread from "../components/TestBread.vue"
import Mail from "../components/icons/Mail.vue"
import Bell from "../components/icons/Bell.vue"
import UserButton from "../components/UserButton.vue"
import RatesChart from "../components/RatesChart.vue"
import StudentInfo from "../components/StudentInfo.vue"
import Entrega from "../components/Entrega.vue"
import CustomButton from "../components/CustomButton.vue"
import Calendar from "../components/Calendar.vue"
import Footer from "../components/Footer.vue"
import CreateAssignment from "../components/CreateAssignment.vue";

import { ref } from "vue";
const isModalOpen = ref(false);

import { useRouter } from 'vue-router'

const router = useRouter()

const irStudentList = () => {
    router.push('/students')
}
</script>

<template>
    <div id="background" style="background-color: white;">
        <div id="header">
            <Header></Header>
            <div class="space"></div>
            <HeaderLine></HeaderLine>
        </div>

        <div id="sub-header">
            <TestBread>
                <template #first>Inicio</template>
                <template #second>Detalle de la materia</template>
            </TestBread>
            <div id="user">
                <Mail></Mail>
                <Bell></Bell>
                <UserButton>
                    <template #user>Administrador</template>
                </UserButton>
            </div>
        </div>

        <div id="title-container">
            <h2 id="title">Interfaces gráficas</h2>
        </div>

        <div id="content">
            <div id="left-section">
                <RatesChart />
                <div id="student-section">
                    <div>
                        <StudentInfo>
                            <template #studentName>Diego Israel Loredo Rodriguez</template>
                        </StudentInfo>
                        <CustomButton @click="irStudentList" width="200px"
                            style="margin-top: 9.08px; margin-left: 90px;">
                            Expandir
                        </CustomButton>
                    </div>
                    <Entrega />
                </div>
            </div>
            <div id="right-section">
                <Calendar />
                <CustomButton width="207px" @click="isModalOpen = true">Crear asignación</CustomButton>
            </div>
        </div>

        <div id="footer">
            <Footer></Footer>
        </div>

        <CreateAssignment v-if="isModalOpen" @close="isModalOpen = false" />
    </div>
</template>

<style scoped>
#title-container {
    display: flex;
    justify-content: center;
    margin: 9.23px 0;
}

#title {
    display: flex;
    padding: 16.615px 24.922px;
    align-items: center;
    justify-content: center;
    gap: 9.23px;
    background: var(--Primary2, #002043);
    color: #FFF;
    font-family: "Open Sans", sans-serif;
    font-size: 29.537px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 1123px;
}

#content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 102px 9.23px 102px;
    margin-left: 76px;
    justify-content: center;
    align-items: start;
    background: var(--Background, linear-gradient(180deg, #bec7d3 0%, #fff 0%));
}

#left-section {
    display: flex;
    flex-direction: column;
}

#student-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 17px;
    padding: 9.67px 0;
    border-radius: 8px;
    align-items: center;
}

#right-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

#header>.space {
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
