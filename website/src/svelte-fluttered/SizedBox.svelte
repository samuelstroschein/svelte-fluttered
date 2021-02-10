<script>
    export let globalClass;
    export let height;
    export let width;
</script>


<div style=
    "
    width: {width};
    height: {height};
    "
    class={globalClass}
    >
  <slot />
</div>