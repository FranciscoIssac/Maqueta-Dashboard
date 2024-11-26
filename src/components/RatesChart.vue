<template>
  <div class="chart-container">
    <h2 class="chart-title">Gráfico de calificaciones generales</h2>
    <Line
      :data="chartData"
      :options="chartOptions"
      style="width: 616.59px; height: 184.608px"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Line } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const chartData = ref({
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  datasets: [
    {
      label: "Calificaciones",
      data: [10, 10, 6, 8, 1, 9, 10, 4, 5, 8, 8, 8],
      fill: false,
      borderColor: "#004A98",
      borderWidth: 0.923,
      pointBackgroundColor: "white",
      pointBorderColor: "black",
      pointRadius: 4,
    },
  ],
});

const chartOptions = ref({
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#CCC",
        lineWidth: 0.923,
      },
      ticks: {
        color: "#000",
        font: {
          family: "Inter",
          size: 11.076,
          weight: "400",
          style: "normal",
        },
      },
    },
    y: {
      beginAtZero: true,
      max: 12,
      grid: {
        color: "#CCC",
        lineWidth: 0.923,
      },
      ticks: {
        color: "#000",
        font: {
          family: "Inter",
          size: 11.076,
          weight: "400",
          style: "normal",
        },
        align: "end",
        stepSize: 3,
      },
    },
  },
});
</script>

<style scoped>
.chart-container {
  display: flex;
  width: 883px;
  height: 243px;
  padding: 4.58px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 9.23px;
  background: #004a98;
}

.chart-title {
  color: var(--TextNormal, #fff);
  font-family: "Open Sans";
  font-size: 29.537px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 40px;
  margin-top: 0;
  margin-bottom: 9.23px;
}

canvas {
  background: #ffc600;
  width: 616.59px;
  height: 184.608px;
}
</style>
