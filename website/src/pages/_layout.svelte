<script>
    import FlexRoot from "./../svelte-fluttered/FlexRoot.svelte";
</script>

<!--     
    FlexRoot component does nothing else than defining a 
    root height and width (the users screen size) for
    components that make use of CSS flex (most of them).
-->
<FlexRoot globalClass="p-10 max-w-screen-lg mx-auto">
    <slot />
</FlexRoot>
