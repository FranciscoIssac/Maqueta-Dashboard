<script setup></script>

<template>
  <div class="calendarioResumen-container">
    <div class="calendarioResumen-header">
      <div class="calendarioResumen-title">
        <h2>Octubre <span>Semana 40</span></h2>
      </div>
      <div class="calendarioResumen-arrows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="calendarioResumen-body">
      <section>
        <h2>Lunes</h2>
        <span>21 - No hay tareas asignadas</span>
      </section>
      <section>
        <h2>Martes</h2>
        <span>22 - No hay tareas asignadas</span>
      </section>
      <section>
        <h2>Miércoles</h2>
        <span>23 - No hay tareas asignadas</span>
      </section>
      <section>
        <h2>Jueves</h2>
        <span>24 - No hay tareas asignadas</span>
      </section>
      <section>
        <h2>Viernes</h2>
        <span>25 - No hay tareas asignadas</span>
      </section>
      <section>
        <h2>Sábado</h2>
        <span>26 - No hay tareas asignadas</span>
      </section>
      <section>
        <h2>Domingo</h2>
        <span>27 - No hay tareas asignadas</span>
      </section>
    </div>
  </div>
</template>

<style>
.calendarioResumen-container {
  background-color: white;
  width: 100%;
  max-width: 840px;
}
.calendarioResumen-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 15px;
  align-items: center;
  & h2 {
    color: #000;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & span {
    color: rgba(0, 0, 0, 0.5);
    font-family: "Open Sans";
    font-size: 12.812px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.calendarioResumen-arrows {
  color: black;
}
.calendarioResumen-body {
  margin: 5px 5px;
  margin-bottom: 15px;
  & section {
    display: flex;
    flex-direction: row;
  }
  & h2 {
    color: #000;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & span {
    color: rgba(0, 0, 0, 0.5);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
