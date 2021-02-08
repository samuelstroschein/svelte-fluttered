# svelte-fluttered

This is a proof of concept which I developed after experiencing frustration (again) with centering elements with CSS. Basically, instead of using CSS to define layout's, one can use Svelte Components with clear intuitive naming conventions to develop the layout. Very much how one would code layout's in Flutter. 

### Example:

Let's say I want to display a row, in which the children are centered on the main axis (x): 

![](https://github.com/samuelstroschein/svelte-fluttered/blob/main/row_example.png?raw=true)

**Flutter implementation:**
```dart
Row(mainAxisAlignment: MainAxisAlignment.center, 
    children: [
        Text('Hello'),
        Text('World'),
    ])
```
Besides the brackets, it is clear what I can expect. A row, whose main axis is centered and which has two children.

**HTML/CSS implementation:**
```html
<div style="display:flex; flex-direction: row; justify-content: center;">
  <p>Hello</p>
  <p>World</p>
</div>
```
First problem: Why is everything a div? HTML has meaningful tags such as a <p>. I have to look into the CSS (whether inline or not) to understand that the following div is displayed as a row. Furthermore,  "justify-content", "justify-items", "justify-self", "align-content", "align-items", "place-content", "place-items" and "place-items". Which CSS property is the correct one? I have no clue. Telling by the memes, I am not alone.
    
**Proposed implementation:**
```svelte
<Row mainAxisAlignment="center">
  <p>Hello</p>
  <p>World</p>
</Row>
```
A row with two <p> children which are centered along the main axis (x-axis) of the row.  

### General idea:
Make HTML/CSS layout more readable. If I want a row, I should just be able to write <Row> the same way as I can just write <h1>. Furthermore, CSS alignment is confusing. Six different alignment properties for actually only two different things: the main and the cross axis. Why not call it main and cross axis? 
    
#### What about Tailwind CSS?
While Tailwind simplifies CSS, it's hard to grasp what a div with 5+ classes does. Plus, one can use Tailwind classes on the components. For example, the SizedBox can take as height parameter "w-5" from Tailwind CSS as the underlying components are nothing else than abstracted HTML elements with CSS styles.

### Already (partially working) implemented components:
Disclaimer: This is a proof of concept. Don't expect the components to work in every situation (actually expect the opposite). Any PR is welcome. 
**Legend**:   
<Component [parameter1] [parameter2] ... /> children <Component/>  
**Components:**  
<Row [mainAxisAlignment] [crossAxisAlignment]> </Row>  
<Column [mainAxisAlignment] [crossAxisAlignment]> </Column>  
<Center> </Center>  
<SizedBox [height] [width]> </SizedBox>  
**Parameters:**  
Generally, all valid CSS works. But since this proposal is about clearing up CSS mess, the alignment options can be written as shorthand e.g. instead of "flex-start" only "start".  
[mainAxisAlignment]={start|end|center|between|around|evenly}  
[crossAxisAlignment]={start|end|center|between|around|evenly}  


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
