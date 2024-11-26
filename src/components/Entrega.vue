<!-- este es el componente Entrega que es una tabla que esta definida en el diseño del sistema el cual sirve para mostrar datos de los alumnos en cuanto a entregas -->
<!-- cabe aclarar que en este y en varios fue dificil definir tamaños ya que en figma marcaba unos totalmente distinto -->
<script setup></script>

<template>
  <table class="entrega-table">
    <thead>
      <tr>
        <th>No. Tarea</th>
        <th>Fecha de entrega</th>
        <th>Entregas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>12/10/2024</td>
        <td>12</td>
      </tr>
      <tr>
        <td>2</td>
        <td>15/10/2024</td>
        <td>15</td>
      </tr>
      <tr>
        <td>3</td>
        <td>26/10/2024</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.entrega-table {
  /* display: flex; */
  /* flex-direction: column; */
  color: white;
  width: 100%;
  max-width: 484px;
  height: auto;
  max-height: 181.839px;
  align-items: center;
  align-content: center;
  gap: 15px 63.69px;
  flex-shrink: 0;
  flex-wrap: wrap;

  border-radius: 9.23px;
  background: #004a98;

  padding-top: 40px;
  padding-right: 40px;

  & tbody > tr > td {
    color: #fff;
    font-family: Inter;
    font-size: 18.461px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
    text-align: center;
  }
}
</style>
