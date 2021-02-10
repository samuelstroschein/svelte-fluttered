<script>
    import Column from "../svelte-fluttered/Column.svelte";
    import Row from "../svelte-fluttered/Row.svelte";
</script>

<Column mainAxisAlignment="center">
    <Row
        mainAxisAlignment="around"
        crossAxisAlignment="center"
        globalClass="bg-gray-200"
    >
        <h1>Svelte Fluttered</h1>
        <img class="w-64 h-64" src="css-center-meme.jpg" alt="" />
        <div class="w-20 h-20 bg-red-400" />
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
