<!--
    Wrap your website with this component.
    This component does nothing else than defining a 
    root height and width (the users screen size) for
    components that make use of CSS flex (most of them).
-->
<script>
    export let globalClass;
</script>

<div style="height: 100vh; width: 100vw;" class={globalClass}>
    <slot />
</div>
