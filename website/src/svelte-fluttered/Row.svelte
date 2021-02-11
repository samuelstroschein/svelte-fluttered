<script>
  export let globalClass = "";
  export let mainAxisSize = "max";
  export let mainAxisAlignment = "start";
  export let crossAxisAlignment = "";

  import processAxisAlignment from "./js/processAxisAlignment";
  import processMainAxisSize from "./js/processMainAxisSize.js";
</script>

<div
  style="
    display: flex; 
    justify-content: {processAxisAlignment(
    mainAxisAlignment
  )};
    width: {processMainAxisSize(
    mainAxisSize
  )};
    align-items: {processAxisAlignment(crossAxisAlignment)}
    "
  class={globalClass}
>
  <slot />
</div>
