<template>
    <div class="calendar">
        <div class="calendar-header">
            <span>Octubre</span>
            <div class="arrows">
                <p class="arrow">←</p>
                <p class="arrow">→</p>
            </div>
        </div>
        <div class="calendar-body">
            <div class="day-label" v-for="day in dayLabels" :key="day">{{ day }}</div>
            <div v-for="day in days" :key="day.date" :class="['day', day.colorClass]">
                {{ day.date }}
            </div>
        </div>
    </div>
</template>

<script setup>
const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
const days = [
    { date: '' }, { date: '' },
    { date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }, { date: 5, colorClass: 'weekend' },
    { date: 6, colorClass: 'weekend' }, { date: 7 }, { date: 8 }, { date: 9 }, { date: 10 }, { date: 11 },
    { date: 12, colorClass: 'weekend' }, { date: 13, colorClass: 'weekend' }, { date: 14 }, { date: 15 },
    { date: 16 }, { date: 17 }, { date: 18 }, { date: 19, colorClass: 'weekend' }, { date: 20, colorClass: 'weekend' },
    { date: 21 }, { date: 22 }, { date: 23, colorClass: 'highlighted' }, { date: 24 }, { date: 25 }, { date: 26, colorClass: 'weekend' },
    { date: 27, colorClass: 'weekend' }, { date: 28 }, { date: 29 }, { date: 30 }, { date: 31 }
];
</script>

<style scoped>
.calendar {
    display: flex;
    width: 229.837px;
    height: 234.452px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 9.991px;
    background: #FFF;

    color: #000;
    font-family: Inter;
    font-size: 19.981px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.calendar-header {
    display: flex;
    min-width: 209.801px;
    padding: 4.995px 9.991px;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
    border-radius: 9.991px;
}

.calendar-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: #000;
    font-family: Inter;
    font-size: 14.986px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 9.991px;

}

.day-label {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.day {
    display: flex;
    width: 29.972px;
    height: 29.972px;
    padding: 9.991px;
    justify-content: center;
    align-items: center;
    gap: 9.991px;

    color: #000;
    font-family: Inter;
    font-size: 14.986px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.weekend {
    background-color: black;
    color: white;
}

.holiday {
    background-color: red;
    color: black;
}

.highlighted {
    background-color: limegreen;
    color: black;
}

.arrows {
    display: flex;
    gap: 10px;
}

.arrow {
    font-size: 20px;
    cursor: pointer;
}
</style>