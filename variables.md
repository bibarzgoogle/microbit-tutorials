### @hideIteration true
### @explicitHints true
# Using variables


## 1. A simple task.


Let's start with a simple task:
- When you press button `A`, show the message "Hi".
- When you press button `B`, show the message "Bye".




```blocks
input.onButtonPressed(Button.A, function () {
   basic.showString("Hi")
})
input.onButtonPressed(Button.B, function () {
   basic.showString("Bye")
})
```


## 2. An impossible task.


Let's change the task a little bit:
- When you press button `A` the first time after reset, show the message "Hi".
- When you press button `A` a second time, show the message "Bye".


Note that we are not involving button `B` at all this time.


Note that the following solution is NOT correct:
```blocks
input.onButtonPressed(Button.A, function () {
   basic.showString("Hi")
   basic.showString("Bye")
})
```

This shows one message after the other whenever we press the button. The program does the same thing every time. But we want it to do one thing the first time we press it, and a different thing the second.


Spend a bit of time trying to find a solution. How can we do this?


## 3. Variables


The answer is: we can't! Unless we use the microbit's memory. The microbit does not remember how many times you have pressed the button. Every time is like the first time.


You need to use the memory of the microbit to remember that the button has already been pressed.


To use the memory of the microbit we need **variables**.


A variable is a little space in the memory of the microbit that we can manipulate. You can think of it as a box. You can put something in the box, and later come back and look at the content of the box. Most importantly, you can tell the microbit to change the content of the box, and do different things depending on the content of the box.


Let's create a variable.
- Delete all the blocks you have created so far.
- Go to the ``||variables:Variables||`` category and click the ``|control:Make a Variable|`` button.
- You have to give the variable a **name**. Let's call it `counter`.
- We have to set the **value** of the variable when we start the microbit, using the ``||variables:set||`` block. Let's give it the value 0.


```blocks
let counter = 0
```


Run your program. What happens?


## 4. Displaying variables.


Apparently nothing happens!


Well, *something* has happened, but we can't see it.  By creating a variable, we have modified the memory of the microbit. But the microbit doesn't show what goes on in its memory.


### ~reminder

#### Let's recap for a moment what we know about variables:
- A variable is a space in the memory of the microbit. We can think of it as a box.
- A variable has a **name**. The name is like something we write on the outside of the box to remember what the box is for (for example, 'biscuits', or 'toys'). The name of a variable can be almost anything, the microbit doesn't care. We've called our variable `counter` but we could just as well have called it `jabberwocky`, and everything would work just the same (try it!).
- A variable has a **value**. This is the important thing, the content of the box. Unlike a real box, that can contain all sorts of stuff, our variables will always contain **a number**. Remember that, after all, everything is a number for the computer.
### ~


Let's show the **value** of the `counter` variable on the screen of the microbit when we press button `A`. Since the value is a number, we have to use the ``||basic:show number||`` block in the ``||basic:Basic||`` category. But instead of showing a fixed number, like so:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(0)
})
```
we will show the value of our `counter` variable (find it in the ``||variables:Variables||`` category, in a circle, and drag it into the ``||basic:show number||`` block):
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   // @highlight
   basic.showNumber(counter)
})
```
Can you spot the difference between the two programs? Look closely! For the moment, both programs seem to do the same thing. One is showing the number 0. The other is showing the **value of the** `counter` **variable**, which also happens to be 0. To do more interesting things, we need to *modify* the **value** of our variable.


## 5. Modifying variables (1).


Acutally, we have already learned to modify the value of a variable!


Remember how we used the ``||variables:set||`` block from the ``||variables:Variables||`` category to set `counter` to 0 on start?


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
- Press button `A`. What happens?
- Press button `B`. Does something happen?
- Press button `A` again. What happens?


Did you see that? The second time we pressed button `A`, something different happened. Remember we didn't know how to do that?


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

Now run the program and see if you were right!


Notice that **the order of the blocks matters**. Swap the ``||variables:set||`` and ``||basic:show number||`` blocks, like this:
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


## 6. Modifying variables (2).


There is another way of modifying variables in microbit: the ``||variables:change||`` block.


Let's go back to this program, which we will call program 1:
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
Now change the ``||variables:set||`` block for a ``||variables:change||`` block:
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
Let's call this program 2. What's the difference between program 1 and program 2? Fill the following table:

| | Program 1 (using `set`) | Program 2 (using `change`) |
| ------------- |:-------------:|:-----:|
| On start      | Shows 0 | Shows 0 |
| First time button `A` pressed   |   |   |
| Second time button `A` pressed   |   |   |
| Third time button `A` pressed   |   |   |
| Fourth time button `A` pressed   |   |   ||


### ~reminder

#### Here's the difference between ``||variables:set||`` and ``||variables:change||``:
- ``||variables:set||`` *replaces* the value of the variable.
- ``||variables:change||`` takes the current value, and *adds* to it.
### ~



By the way, see what program 2 is doing? It is *counting* how many times we press button `A`. Now you may understand why we named our variable `counter` and not `jabberwocky`!


We can change the value of the variable by numbers other than 1. Try this program and see what happens when you press button `A` repeatedly:
```blocks
let counter = 0
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += 3
})
```


We can also change the value of a variable down instead of up. To do this we need to use a *negative change*. Try this:
```blocks
let counter = 9
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += -2
})
```


## 7. A counting game.


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




## 8. Advanced: Back to the impossible task.


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
- (Harder) Can you modify the program so that the first time it shows "Hi", the second time "How are you?" and the third time "Bye"?





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
