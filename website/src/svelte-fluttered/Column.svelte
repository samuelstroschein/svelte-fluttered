<script>
  export let globalClass = "";
  export let mainAxisSize = "min";
  export let mainAxisAlignment = "start";
  export let crossAxisAlignment = "";

  import processAxisAlignment from "./js/processAxisAlignment";
  import processMainAxisSize from "./js/processMainAxisSize.js";
</script>

<div
  style="
    display: flex; 
    flex-wrap: wrap;
    flex-direction: column;
    align-content: {processAxisAlignment(
    crossAxisAlignment
  )};
    height: {processMainAxisSize(
    mainAxisSize
  )};
    justify-content: {processAxisAlignment(mainAxisAlignment)};
    "
  class={globalClass}
>
  <slot />
</div>
