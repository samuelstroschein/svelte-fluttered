<script>
    import Center from "../svelte-fluttered/Center.svelte";
    import SizedBox from "./../svelte-fluttered/SizedBox.svelte";
    import { CollapsibleCard } from "svelte-collapsible";
</script>

<h1 class="text-lg font-bold">Demonstration of the Center component:</h1>
<p>
    The Center component is wrapped in a SizedBox because the Center component
    needs a defined width and height to which it should stretch. Bear in mind
    that if you are using the Center component in an HTML element that has a
    defined height and width, of course you don't need a SizedBox/ wrapping HTML
    element.
</p>

<SizedBox width="100%" height="10rem" globalClass="bg-green-500 mt-2">
    <Center globalClass="border-2 border-dashed">
        <h1 class="border-2 border-dashed">
            Hey, I am a vertically and horizontally centered text.
        </h1>
    </Center>
</SizedBox>

<SizedBox height="1rem" />
<CollapsibleCard open={false}>
    <button
        slot="header"
        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >Show Code</button
    >
    <div slot="body">
        <pre
            class="hljs"
            style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(51, 51, 51); background: rgb(248, 248, 248);"><span class="xml"><span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">SizedBox</span> <span class="hljs-attr" style="color: teal;">width</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"100%"</span> <span class="hljs-attr" style="color: teal;">height</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"10rem"</span> <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"bg-green-500 mt-2"</span>&gt;</span>
    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Center</span> <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-2 border-dashed"</span>&gt;</span>
        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h1</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-2 border-dashed"</span>&gt;</span>
            Hey, I am a vertically and horizontally centered text.
        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h1</span>&gt;</span>
    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Center</span>&gt;</span>
<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">SizedBox</span>&gt;</span></span></pre>
    </div>
</CollapsibleCard>
