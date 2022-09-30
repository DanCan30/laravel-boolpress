<template>
  <div>
    <h3>
        {{ cardElement.name }}
    </h3>
  </div>
</template>

<script>
export default {
    name: "GeneralCardComponent",
    
    props: {
        "cardElement": Object
    }

}
</script>

<style>

</style>