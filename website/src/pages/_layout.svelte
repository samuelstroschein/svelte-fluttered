<script>
    import EnableSvelteFluttered from "./../svelte-fluttered/EnableSvelteFluttered.svelte";
</script>

<!--     
    EnableSvelteFluttered component does nothing else than defining a 
    root height and width (the users screen size) for
    components that make use of CSS flex (most of them).
-->
<EnableSvelteFluttered>
    <div class="p-10">
        <slot />
    </div>
</EnableSvelteFluttered>
