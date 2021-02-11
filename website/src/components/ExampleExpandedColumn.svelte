<script>
    import Column from "./../svelte-fluttered/Column.svelte";
    import Expanded from "../svelte-fluttered/Expanded.svelte";
    import Row from "../svelte-fluttered/Row.svelte";
</script>

<h1 class="text-lg font-bold">The following is an expanded column:</h1>
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
                globalClass="border-4 border-dashed"
            >
                <p>(The text here is contained in a column)</p>
                <h1 class="text-lg font-bold">This rows alignment:</h1>
                <h2>main axis = between</h2>
                <h2>cross axis = end</h2>
            </Column>
        </Row>
        <Row
            mainAxisAlignment="center"
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
                <h2>cross axis = center</h2>
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
