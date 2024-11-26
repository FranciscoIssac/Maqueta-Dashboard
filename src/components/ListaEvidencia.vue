<!-- este se iba a optar por hacerlo un organizmo ya que deberia tener componentes dentro mas sin embargo se siguio 
lo establecido en el sistema de diseño -->
<script setup></script>

<template>
  <table class="lista-evidencia">
    <thead>
      <tr>
        <th>Nombre</th>
        <th class="lista-border">Código UASLP</th>
        <th>Promedio general</th>
        <th class="lista-border">(revisar evidencias)</th>
        <th>(eliminar alumno)</th>
      </tr>
    </thead>
  </table>
  <div class="lista-alumno">
    <div class="lista-circule"></div>
    <div>Peptio</div>
    <div>XXXXXX</div>
    <div>5.9</div>
    <div>(revisar evidencias)</div>
    <div>(eliminar alumno)</div>
  </div>
</template>

<style>
.lista-evidencia {
  background-color: #004a98;
  display: inline-flex;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  color: var(--TextNormal, #fff);
  font-family: "Open Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-bottom: 1px double white;
  & .lista-border {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
  & th {
    padding: 0 5px;
  }
}

.lista-alumno {
  display: flex;
  width: 764px;
  padding: 4px;
  align-items: center;
  align-content: center;
  gap: 10px;
  flex-wrap: wrap;
  & .lista-circule {
    width: 41px;
    height: 41px;
    background-color: #d9d9d9;
    border-radius: 30px;
  }
}
</style>
