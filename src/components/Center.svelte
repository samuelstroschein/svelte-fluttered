<script>
  export let globalClass;
</script>

<div
  style="
    display: flex; 
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
    "
  class={globalClass}
>
  <div>
    <slot />
  </div>
</div>
