<template>
  <div id="restaurante-add">
      <h1>Crear Nuevo Restaurante</h1>
      <form>
          <p>
              <label>Nombre</label>
              <input type="text">
          </p>
          <p>
              <label>Descripcion</label>
              <input type="text">
          </p>
          <p>
              <label for="">Precio</label>
              <select>
                  <option value="">Seleccione una opcion...</option>
                  <option value="bajo">Bajo</option>
                  <option value="normal">Normal</option>
                  <option value="alto">Alto</option>
              </select>
          </p>
          <input type="submit" value="Guardar Restaurante">
      </form>
  </div>
</template>
