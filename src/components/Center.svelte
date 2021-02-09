<script>
  export let globalClass;
</script>
<div
  style="
    display: flex; 
    flex: 1 1 auto;
    justify-content: center;
    align-items: center
    "
  class={globalClass}
>
  <div>
    <slot />
  </div>
</div>
