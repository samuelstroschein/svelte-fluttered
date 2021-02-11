<script>
    export let globalClass;
    import { onMount } from "svelte";
    let expandedHTMLElement;

    onMount(() => {
        if (
            expandedHTMLElement.parentElement.style.height === "" ||
            expandedHTMLElement.parentElement.style.width === ""
        ) {
            throw Error(
                "Expanded is using CSS flex. In order to expand the underlying\
                HTML element, the parent element of this Expanded must have\
                set a width and height. Otherwise the Expandeds implemenation\
                of height: 100%; width: 100%; does not work (as 100% height of\
                nothing/undefined/null is nothing/undefined/null).\
                "
            );
        }
    });
</script>

<div
    bind:this={expandedHTMLElement}
    style="
    height: 100%; width: 100%;
    "
    class={globalClass}
>
    <slot />
</div>
