### @explicitHints true
# Variables quiz - to do without a computer or microbit.

For each of the programs below, think what the microbit will show on the screen on start and when the buttons are pressed in the suggested order.

Pay close attention to the **order of the blocks**, and the difference between ``||variables:set||`` and ``||variables:change||``.

Fill in the table:

| | On start | Press `A` | Press `A` | Press `B` | Press `A`| Press `B`
| ---------- |:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Program 1   |   |   |   |   |   |   |
| Program 2   |   |   |   |   |   |   |
| Program 3   |   |   |   |   |   |   |
| Program 4   |   |   |   |   |   |   |
| Program 5   |   |   |   |   |   |   |
| Program 6   |   |   |   |   |   |   |
| Program 7   |   |   |   |   |   |   |
| Program 8   |   |   |   |   |   |   |
| Program 9   |   |   |   |   |   |   |
| Program 10  |   |   |   |   |   |   ||


### Program 1

```blocks
counter = 7
```

### Program 2

```blocks
counter = 3
basic.showNumber(counter)
```

### Program 3

```blocks
counter = 0
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter = 1
})
```

### Program 4

```blocks
counter = 0
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   counter = 1
   basic.showNumber(counter)
})
```

### Program 5

```blocks
counter = 3
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   counter = 1
   basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
   counter = 2
   basic.showNumber(counter)
})
```

### Program 6

```blocks
counter = 3
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   counter = 1
   basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
   basic.showNumber(counter)
   counter = 2
})
```

### Program 7

```blocks
counter = 0
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += 3
})
input.onButtonPressed(Button.B, function () {
   basic.showNumber(counter)
   counter -= 2
})
```

### Program 8

```blocks
counter = 8
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   counter -= 2
   basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
   counter += 1
   basic.showNumber(counter)
})
```

### Program 9

```blocks
counter = 5
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter -= 1
})
input.onButtonPressed(Button.B, function () {
   counter += 3
})
```

### Program 10

```blocks
counter = 0
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += 1
})
input.onButtonPressed(Button.B, function () {
   counter = 0
})
```

<!-- 






> Open this page at [https://bibarzgoogle.github.io/v2-pet-hamster/](https://bibarzgoogle.github.io/v2-pet-hamster/)


## Use as Extension


This repository can be added as an **extension** in MakeCode.


* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/bibarzgoogle/v2-pet-hamster** and import


## Edit this project


To edit this repository in MakeCode.


* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/bibarzgoogle/v2-pet-hamster** and click import


#### Metadata (used for search, rendering)


* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script> -->


