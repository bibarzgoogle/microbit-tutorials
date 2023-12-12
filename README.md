# Using variables.


## A simple task.


Let's start with a simple task:
- When you press button A, show the message "Hello".
- When you press button B, show the message "Bye".




```blocks
input.onButtonPressed(Button.A, function () {
   basic.showString("Hello")
})
input.onButtonPressed(Button.B, function () {
   basic.showString("Bye")
})
```


## An impossible task.


Let's change the task a little bit:
- When you press button A the first time after reset, show the message "Hello".
- When you press button A a second time, show the message "Bye".


Note that we are not involving button B at all this time.


Note that the following solution is NOT correct:
```blocks
input.onButtonPressed(Button.A, function () {
   basic.showString("Hello")
   basic.showString("Bye")
})```


This shows one message after the other whenever we press the button, both the first time and any other time. The program does the same thing every time we press the button. But we want it to do one thing the first time we press it, and a different thing the second.


Spend a bit of time trying to find a solution. How can we do this?


## Variables


The answer is: you can't, unless you use the microbit's memory. Your microbit does not remember how many times you have pressed the button. Every time is like the first time.


You need to use the memory of the microbit to remember that the button has already been pressed.


To use the memory of the microbit we need VARIABLES.


A variable is a little space in the memory of the microbit that we can manipulate. You can think of it as a box. You can put something in the box, and later come back and look at the content of the box. Most importantly, you can tell the microbit to change the content of the box, and to do different things depending on the content of the box.


Let's create a variable.
- Delete all the blocks you have created so far.
- Go to the ``||variables:Variables||`` category and click the "Create a variable" button.
- You have to give the variable a **name**. Let's call it "counter".
- Now that you have a variable we have to set its **value** when we start the microbit, using the ``||variables:set||`` block. Let's give it the value 0.


```blocks
let counter = 0
```


Run your program. What happens?


## Displaying variables.


Apparently nothing happens!


Well, *something* has happened, but we can't see it.  By creating a variable, we have modified the memory of the microbit. But the microbit doesn't show us what goes on in its memory.


Let's recap for a moment what we know about variables:
- A variable is a space in the memory of the microbit. We can think of it as a box.
- A variable has a **name**. This is like writing something on the outside of the box to remember what the box is for. The name of a variable can be almost anything, the microbit doesn't care. We've called our variable "counter" but we could just as well have called it "jabberwocky", and everything would work just the same.
- A variable has a **value**. This is the content of the box. It can be many things, but for the moment we will use **numbers** as values of variables. Remember that, after all, everything is represented as numbers in a computer.


Let's show the **value** of the `counter` variable on the screen of the microbit when we press button A. Since the value is a number, we hae to use the ``||basic:show number||`` block. But instead of showing a fixed number, like so:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(0)
})
```
we want to show the value of our `counter` variable (find it in the ``||variables:Variables||`` category, in a circle):
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
})
```
See the difference? For the moment, both programs seem to do the exact same thing. One is showing the number 0. The other is showing the **value of the** `counter` **variable**, which also happens to be 0. To do more interesting things, we need to *modify* the **value** of our variable.


## Modifying variables (1).


Acutally, we have already learned to modify the value of a variable!


Remember how we used the ``||variables:set||`` block from the ``||variables:Variables||`` category to set the value to 0 on start?


We use the ``||variables:set||`` block to modify the value of the variable. Let's modify the value when we press the `B` button:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
   counter = 1
})
```


Run this program. Notice:
- What happens on start?
- Press button A. What happens?
- Press button B. Does something happen?
- Press button A. What happens?


Did you see that? The second time we pressed button A, something different happened. Remember we didn't know how to do that at the beginning of this activity?


We can both show and modify the variable with the same button:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter = 1
})
```
Before you run this program, answer these questions:
- What will happen on start?
- What will happen when you first press button `A`?
- What will happen when you press button `A` again?
Now run the program and see if you were right.


Notice that the order of the blocks matters. Swap the ``||variables:set||`` and ``||basic:show number||`` blocks, like this:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   counter = 1
   basic.showNumber(counter)
})
```
Answer the same questions, and then run the program and check your answers:
- What will happen on start?
- What will happen when you first press button `A`?
- What will happen when you press button `A` again?


## Modifying variables (2).


There is another way of modifying variables in microbit: the ``||variables:change||`` block.


Let's go back to this program:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter = 1
})
```
and change the ``||variables:set||`` block for a ``||variables:change||`` block:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += 1
})
```
What's the difference between the two programs?


Here's the difference between ``||variables:set||`` and ``||variables:change||``:
- ``||variables:set||`` *replaces* the value of the variable.
- ``||variables:change||`` takes the current value, and *adds* to it.
So if you ``||variables:set||`` the value twice:


By the way, see what the last program is doing? It is *counting* how many times we press button `A`. Now you may understand why we named our variable `counter` and not `jabberwocky`!


We can change the value of the variable by numbers other than 1. Try this program:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += -3
})
```
See what happens when you press button `A` repeatedly.


We can also change the value of a variable down instead of up. We do it with negative numbers. Try this:
```blocks
let counter = 9
counter = 9
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += -2
})
```


## A counting game.


Now let's play a game. I'll describe the game, and *you* code it:
- We will use a variable called `counter`, set it to 0 and display it on start:
```blocks
let counter = 0
counter = 0
basic.showNumber(counter)
```
- When button `A` is pressed, add 5 to the variable and display it.
- When button `B` is pressed, subtract 3 from the variable and display it.


To win the game you have to get the microbit to display the number 1.


Good luck!




## Advanced: Back to the impossible task.


Remember the "impossible" task from the beginning?
- When you press button `A` the first time after reset, show the message "Hello".
- When you press button `A` a second time, show the message "Bye".


Can you do it now? You want to do different things depending on how many times you've pressed button `A`, so it can be handy to use a counter variable again. But we don't want to *show the value* of our variable (which, remember, is a number), we want to show a *text* (we need the ``||basic:show string||`` block):
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showString("Hello")
   counter = 1
})
```
But this always shows the same text! We want to show different texts *depending on the value* of the variable. When the variable is 0 (the first time) we want to show "Hello". When the variable is 1, we want to show "Bye".


That's where a new block comes in handy: the ``||logic:if||`` block, in the ``||logic:Logic||`` category.


Try putting together this program:
```blocks
input.onButtonPressed(Button.A, function () {
   if (counter == 0) {
       basic.showString("Hello!")
       counter += 1
   } else {
       basic.showString("Bye")
   }
})
let counter = 0
counter = 0
```





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
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
