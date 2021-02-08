<script>
  import Row from "../../src/components/Row.svelte";
  import Column from "../../src/components/Column.svelte";
  import Center from "../../src/components/Center.svelte";
</script>

<main>
  <Center>
    <h1>I am a centered HTML element.</h1>
  </Center>
  <Column>
    <Row mainAxisAlignment="start" crossAxisAlignment="center">
      <h2>I am an element in a row</h2>
      <p>
        I am another element in a row which is aligned in the center of the
        y-axis of that row.
      </p>
    </Row>
    <Row mainAxisAlignment="center" crossAxisAlignment="end">
      <h2>I am also in a row, but the x-axis is defined to be centered</h2>
      <p>and I am defined to be at the end of the rows y-axis</p>
    </Row>
    <Row mainAxisAlignment="end" crossAxisAlignment="start">
      <h2>I guess you know what I am</h2>
      <p>and that you know what I am</p>
    </Row>
    <Row mainAxisAlignment="around" crossAxisAlignment="center">
      <Row crossAxisAlignment="center">
        <h5>Of course we can also be</h5>
        <p>aligned between</p>
      </Row>
      <Row crossAxisAlignment="center">
        <h5>or around and so on</h5>
        <p>in other words all regular css alignment options are supported</p>
      </Row>
    </Row>
  </Column>
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .code-example {
    max-width: 500px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
