# svelte-fluttered

This is a proof of concept which I developed after experiencing frustration (again) with centering elements with CSS. Basically, instead of using CSS to define layout's, one can use Svelte Components with clear intuitive naming conventions to develop the layout. Very much how one would code layout's in Flutter. 

### Example:

The proof of concept get's rid of all 6 different "align-content, justify-content, align-items" etc. by just "mainAxisAlignment" and "crossAxisAlignment".  

![](https://user-images.githubusercontent.com/35429197/105533937-14267000-5ced-11eb-889e-3988258da081.png)

```svelte
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
```

### How it works:

**mainAxisAlignment** \= the main axis -> row = x-axis, column = y-axis

**crossAxisAlignment** \= the cross axis -> row = y-axis, column = x-axis

Fill in any of the official CSS axis alignments or the shorthand version

```javascript
    const officialAxisAlignments = [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ];
  
    const shortAxisAlignments = [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
    ];
```

### TODO

1.  The implementation only works for certain parent and child types. If I use a Row component, I expect it to also work with images etc.
2.  More components?
