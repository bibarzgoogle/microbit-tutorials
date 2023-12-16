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
