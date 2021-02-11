<script>
    import Column from "../svelte-fluttered/Column.svelte";
    import Expanded from "../svelte-fluttered/Expanded.svelte";
    import Row from "../svelte-fluttered/Row.svelte";
</script>

<div>
    <Expanded>
        <Column mainAxisAlignment="center">
            <Row
                mainAxisAlignment="between"
                crossAxisAlignment="center"
                globalClass="bg-gray-200"
            >
                <img class="w-64 h-64" src="css-center-meme.jpg" alt="" />
                <div class="w-20 h-20 bg-red-400" />
                <h1>Svelte Fluttered</h1>
            </Row>
            <Row
                mainAxisAlignment="around"
                crossAxisAlignment="center"
                globalClass="bg-gray-200"
            >
                <h1>Svelte Fluttered</h1>
                <img class="w-64 h-64" src="css-center-meme.jpg" alt="" />
                <div class="w-20 h-20 bg-red-400" />
            </Row>
        </Column>
    </Expanded>
</div>
