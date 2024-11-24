<script setup></script>

<template>
    <div class="headerline-container">
        <div class="headerline-blue"></div>

        <div class="headerline-yellow">
            <p>"MODOS ET CUNCTARUM RERUM MENSURAS AUDEBO"</p>
            <div class="triangle"></div>
        </div>
    </div>
</template>

<style>
.headerline-container {
    display: flex;
    width: 100vw;
    height: 40px;
}

.headerline-blue {
    background-color: #004a98;
    width: 50%;
    height: 100%;
}

.headerline-yellow {
    position: relative;
    background-color: #ffc600;
    width: 50%;
    height: 100%;

    & p {
        position: absolute;
        right: 0;
        height: 100%;
        align-content: center;
        overflow: hidden;
        color: #000;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-right: 20px;
    }

    line-height: normal;

    & .triangle {
        width: 5%;
        height: 100%;
        background-color: #004a98;
        clip-path: polygon(0% 100%, 50% 50%, 0% 0%);
    }
}
</style>