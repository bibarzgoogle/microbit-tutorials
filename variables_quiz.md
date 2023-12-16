### @explicitHints true
# Variables quiz - to do without a computer or microbit.

For each of the following programs, think what the microbit will show on the screen on start and when the buttons are pressed in the suggested order.

Program 1

```blocks
let counter = 0
counter = 0
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   // @highlight
   counter = 1
})
```

Program 2

```blocks
let counter = 0
counter = 0
basic.showNumber(counter)
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   // @highlight
   counter += 1
})
```

Program 3


```blocks
let counter = 0
counter = 0
basic.showNumber(counter)
```

Let's call this program 2. What's the difference between program 1 and program 2? Fill the following table:


| | On start | Press `A` | Press `A` | Press `B` | Press `A`| Press `B`
| ------------- |:-------------:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Program 1   | Shows 0 | Shows 0 |
| Program 2   |   |   |   |   |   |
| Program 3   |   |   |   |   |   |
| Program 4   |   |   |   |   |   |
| Program 5   |   |   |   |   |   ||






## A counting game.




Now let's play a game.
- We will use a variable called `counter`, set it to 0 and display it on start:
```blocks
let counter = 0
counter = 0
basic.showNumber(counter)
```


Now I'll describe the game, and *you* code it:
- When button `A` is pressed, add 5 to the variable and display it.
- When button `B` is pressed, subtract 3 from the variable and display it.




Have you coded it? Then try to win at the game (without changing the code!). The goal of the game is to get the microbit to display the number 1.




Good luck!








## Advanced: Back to the impossible task.




Remember the "impossible" task from the beginning?
- When you press button `A` the first time after reset, show the message "Hi".
- When you press button `A` a second time, show the message "Bye".




Can you do it now? You want to do different things depending on how many times you've pressed button `A`, so it can be handy to use a counter variable again. But we don't want to *show the value* of our variable (which, remember, is a number), we want to show a *text* (we need the ``||basic:show string||`` block):
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showString("Hi")
   counter = 1
})
```
Try it out.


This is not what we want! This always shows the same text!


We want to show different texts *depending on the value* of the variable. When the variable is 0 (the first time) we want to show "Hi". When the variable is 1, we want to show "Bye".




That's where a new block comes in handy: the ``||logic:if - else||`` block, in the ``||logic:Logic||`` category.




Try putting together this program:
```blocks
input.onButtonPressed(Button.A, function () {
   if (counter == 0) {
       basic.showString("Hi!")
       counter += 1
   } else {
       basic.showString("Bye")
   }
})
let counter = 0
counter = 0
```


The ``||logic:if - else||`` block tells the microbit to do different things depending on whether the value of `counter` is 0 or something else:
- If `counter`=0, we show "Hi" *and change `counter` to 1*.
- In any other case (that's what the ``||logic:else||`` part means), show "Bye".


Challenges:
- Can you modify the program so that it alternates printing "Hi" and "Bye" every time you press `A`?
- (Harder) Can you modify the program so that the first time it shows "Hi", the second time "Howdy?" and the third time "Bye"?






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



