<script>
export default {
    data() {
        return {
            isDropDownVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropDownVisible = !this.isDropDownVisible;
        },
    },
};
</script>

<template>
    <div class="studentinfo-container">
        <div class="studentinfo-button" @click="toggleDropdown">
            <h2>
                <slot name="studentName"></slot>
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"
                :class="{ rotated: isDropDownVisible }">
                <path fill-rule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div class="studentinfo-content" v-if="isDropDownVisible">
            <ul>
                <li>Tareas Entregadas: 8</li>
                <li>Calificaciones: 10</li>
            </ul>
        </div>
    </div>
</template>

<style>
.studentinfo-container {
    background-color: #004a98;
    display: flex;
    width: 384.90741px;
    min-height: 61px;
    max-width: 399.676px;
    flex-direction: column;
    color: var(--TextNormal, #fff);
    border-radius: 8px;

    & :hover {
        cursor: pointer;
    }
}

.studentinfo-button {
    display: flex;
    /* width: 384.90741px; */
    flex-direction: row;
    align-items: flex-start;
    border-radius: 8px;

    & h2 {
        padding-left: 5px;
        padding-top: 20px;
        color: #FFF;
        font-family: Inter;
        font-size: 18.461px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    & svg {
        margin-top: 15px;
        width: 2rem;
    }
}

.studentinfo-content {
    /* padding-left: 5px; */
    margin: 0;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    padding-bottom: 1em;

    & ul {
        list-style: none;
        margin: 0;
        padding-left: 5px;
    }
}

.rotated {
    transform: rotate(180deg);
    /* Rota el SVG 180 grados */
    transition: transform 0.5s ease;
    /* Añade una transición suave */
}
</style>