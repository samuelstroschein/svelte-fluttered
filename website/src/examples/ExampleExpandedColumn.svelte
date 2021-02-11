<script>
    import Column from "../svelte-fluttered/Column.svelte";
    import Expanded from "../svelte-fluttered/Expanded.svelte";
    import Row from "../svelte-fluttered/Row.svelte";
    import SizedBox from "./../svelte-fluttered/SizedBox.svelte";
    import { CollapsibleCard } from "svelte-collapsible";
</script>

<h1 class="text-lg font-bold">The following is an expanded Column:</h1>
<p>
    Where the Expanded component wraps the column so that the Column spans the
    full height. Otherwise, the column would only take as much space as needed.
    Within the Column are multiple Rows and in the case of the text, also nexted
    Columns.
</p>
<Expanded globalClass="border-4">
    <Column
        mainAxisAlignment="center"
        crossAxisAlignment="end"
        mainAxisSize="max"
        globalClass="border-4 border-dashed"
    >
        <Row
            mainAxisAlignment="between"
            crossAxisAlignment="center"
            globalClass="border-4 border-dashed"
            mainAxisSize="min"
        >
            <img
                class="w-64 h-64 border-4 border-dashed"
                src="css-center-meme.jpg"
                alt=""
            />
            <div class="w-20 h-20 bg-red-400 border-4 border-dashed" />
            <Column
                mainAxisAlignment="center"
                globalClass="border-2 border-dashed"
            >
                <p>(The text here is contained in a column)</p>
                <h1 class="text-lg font-bold">This rows alignment:</h1>
                <h2>main axis = between</h2>
                <h2>cross axis = end</h2>
            </Column>
        </Row>
        <Row
            mainAxisAlignment="around"
            crossAxisAlignment="end"
            globalClass="border-4 border-dashed"
        >
            <Column
                mainAxisAlignment="end"
                globalClass="border-4 border-dashed"
            >
                <p>(The text here is contained in a column)</p>
                <h1 class="text-lg font-bold">This rows alignment:</h1>
                <h2>main axis = around</h2>
                <h2>cross axis = end</h2>
            </Column>
            <img
                class="w-64 h-64 border-4 border-dashed"
                src="css-center-meme.jpg"
                alt=""
            />
            <div class="w-20 h-20 bg-red-400 border-4 border-dashed" />
        </Row>
    </Column>
</Expanded>

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
            style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(51, 51, 51); background: rgb(248, 248, 248);"><span class="xml"><span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Expanded</span> <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-4"</span>&gt;</span>
            <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Column</span>
                <span class="hljs-attr" style="color: teal;">mainAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"center"</span>
                <span class="hljs-attr" style="color: teal;">crossAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"end"</span>
                <span class="hljs-attr" style="color: teal;">mainAxisSize</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"max"</span>
                <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-4 border-dashed"</span>
            &gt;</span>
                <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Row</span>
                    <span class="hljs-attr" style="color: teal;">mainAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"between"</span>
                    <span class="hljs-attr" style="color: teal;">crossAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"center"</span>
                    <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-4 border-dashed"</span>
                    <span class="hljs-attr" style="color: teal;">mainAxisSize</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"min"</span>
                &gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">img</span>
                        <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"w-64 h-64 border-4 border-dashed"</span>
                        <span class="hljs-attr" style="color: teal;">src</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"css-center-meme.jpg"</span>
                        <span class="hljs-attr" style="color: teal;">alt</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">""</span>
                    /&gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"w-20 h-20 bg-red-400 border-4 border-dashed"</span> /&gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Column</span>
                        <span class="hljs-attr" style="color: teal;">mainAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"center"</span>
                        <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-2 border-dashed"</span>
                    &gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">p</span>&gt;</span>(The text here is contained in a column)<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">p</span>&gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h1</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"text-lg font-bold"</span>&gt;</span>This rows alignment:<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h1</span>&gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>main axis = between<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>cross axis = end<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Column</span>&gt;</span>
                <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Row</span>&gt;</span>
                <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Row</span>
                    <span class="hljs-attr" style="color: teal;">mainAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"around"</span>
                    <span class="hljs-attr" style="color: teal;">crossAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"end"</span>
                    <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-4 border-dashed"</span>
                &gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">Column</span>
                        <span class="hljs-attr" style="color: teal;">mainAxisAlignment</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"end"</span>
                        <span class="hljs-attr" style="color: teal;">globalClass</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"border-4 border-dashed"</span>
                    &gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">p</span>&gt;</span>(The text here is contained in a column)<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">p</span>&gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h1</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"text-lg font-bold"</span>&gt;</span>This rows alignment:<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h1</span>&gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>main axis = around<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>
                        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>cross axis = end<span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">h2</span>&gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Column</span>&gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">img</span>
                        <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"w-64 h-64 border-4 border-dashed"</span>
                        <span class="hljs-attr" style="color: teal;">src</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"css-center-meme.jpg"</span>
                        <span class="hljs-attr" style="color: teal;">alt</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">""</span>
                    /&gt;</span>
                    <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;<span class="hljs-name" style="color: navy; font-weight: 400;">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"w-20 h-20 bg-red-400 border-4 border-dashed"</span> /&gt;</span>
                <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Row</span>&gt;</span>
            <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Column</span>&gt;</span>
        <span class="hljs-tag" style="color: navy; font-weight: 400;">&lt;/<span class="hljs-name" style="color: navy; font-weight: 400;">Expanded</span>&gt;</span></span></pre>
    </div>
</CollapsibleCard>
