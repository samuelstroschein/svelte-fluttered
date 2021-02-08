<script>
  import Row from "../../src/components/Row.svelte";
  import Column from "../../src/components/Column.svelte";
  import Center from "../../src/components/Center.svelte";
  import SizedBox from "../../src/components/SizedBox.svelte";
</script>

<main>
  <Center>
    <h2>I am a centered HTML element.</h2>
  </Center>
  <!-- SizedBox could be used for Spacing and can take any valid css value -->
  <SizedBox height="5rem" />
  <Column>
    <Row mainAxisAlignment="start" crossAxisAlignment="center">
      <h3>I am an big element in a row</h3>
      <!-- it would make more sense though to add a parameter to Row -->
      <SizedBox width="0.5rem" />
      <p>
        I am a small element in the same row. The row is aligned in the center
        of the cross axis (y) of that row.
      </p>
    </Row>
    <Row mainAxisAlignment="center" crossAxisAlignment="end">
      <h3>
        I am also in a row, but the main axis (x) is defined to be centered
      </h3>
      <SizedBox width="0.5rem" />
      <p>and I am defined to be at the end of the rows cross axis (y)</p>
    </Row>
    <Row mainAxisAlignment="end" crossAxisAlignment="start">
      <h3>I am placed at the end of the row</h3>
      <p>my cross axis value is start</p>
    </Row>
    <Row mainAxisAlignment="around" crossAxisAlignment="center">
        <h5>Of course we can also be</h5>
      <h5>aligned around and so on.</h5>
    </Row>
    <SizedBox height="5rem" />
  </Column>
  <Center>
    <p>All of the rows you saw above, where contained in one column.</p>
  </Center>
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
