<script setup>
import Calendar from "./Calendarv2.vue";
import CustomButton from "./CustomButton.vue";

import { useRouter } from 'vue-router';

const router = useRouter()

const irSubirMaterial = () => {
    router.push('/material')
}
</script>

<template>
    <div id="modal-background">
        <div id="modal" class="dialog-container">
            <div class="close-button" @click="$emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M1 1L11.75 11.75M22.5 22.5L11.75 11.75M11.75 11.75L22.5 1L1 22.5" stroke="white"
                        stroke-width="2" />
                </svg>
            </div>
            <div class="content">
                <textarea class="description-input" placeholder="Agrega descripción" v-model="description"></textarea>
                <div class="down-content">

                    <div class="calendar-container">
                        <label class="calendar-label">Fecha de entrega</label>
                        <Calendar id="calendar"></Calendar>
                    </div>

                    <div class="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            style="margin-right: 13px;">
                            <path
                                d="M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M2.5 4C3.32843 4 4 3.32843 4 2.5C4 1.67157 3.32843 1 2.5 1C1.67157 1 1 1.67157 1 2.5C1 3.32843 1.67157 4 2.5 4Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                transform="translate(4, 4)" />
                            <path d="M17 6L12 1L1 12" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" transform="translate(3, 7)" />
                        </svg>
                        <CustomButton @click="irSubirMaterial" width="155px">Aceptar</CustomButton>
                        <CustomButton @click="$emit('close')" variant="alternative" width="155px"
                            style="margin-left: 33px; margin-top: 7px;">
                            Cancelar</CustomButton>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
#modal {
    /* background: white;
    padding: 20px;
    border-radius: 8px; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-container {
    position: relative;
    width: 771px;
    height: 449px;
    padding: 35px 5.5px 20.19px 24px;
    flex-shrink: 0;
    background: var(--Secondary3, #9BD4E4);
}

.content {
    padding-right: 23px;
}

#calendar {
    display: flex;
    width: 209.801px;
    height: 213.82px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
}

.buttons {
    margin-left: 193.21px;
    display: block;
    justify-content: space-between;
}

.close-button {
    position: absolute;
    top: 5px;
    right: 5.5px;
    cursor: pointer;
}

.description-input {
    width: 724px;
    height: 163px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    resize: none;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.calendar-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.calendar-label {
    color: var(--TextNormal, #FFF);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 87px;
    margin-left: 9px;
    margin-right: 30.99px;
}

.down-content {
    display: flex;
}
</style>
