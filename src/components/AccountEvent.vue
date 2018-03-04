<template>
  <div class='ui centered card'>
    <div class='content'>
      <div class='header'>
        {{ event.stream }}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['event']
}
</script>
