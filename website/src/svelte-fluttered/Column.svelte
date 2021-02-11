<script>
  export let globalClass = "";
  export let mainAxisSize = "min";
  export let mainAxisAlignment = "start";
  export let crossAxisAlignment = "";

  import processAxisAlignment from "./js/processAxisAlignment";
  import processColumnMainAxisSize from "./js/processMainAxisSize.js";
</script>

<div
  style="
    display: flex; 
    flex-wrap: wrap;
    flex-direction: column;
    align-content: {processAxisAlignment(
    crossAxisAlignment
  )};
    height: {processColumnMainAxisSize(
    mainAxisSize
  )};
    justify-content: {processAxisAlignment(mainAxisAlignment)};
    "
  class={globalClass}
>
  <slot />
</div>
