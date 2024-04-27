<template>
  <div>
    <button class="btn"><slot></slot></button> 
  </div>
</template>

<script>
export default {
  name: 'my-button'
}

</script>

<style>
button {
  background-color: #f44336; /* Красный цвет */
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>