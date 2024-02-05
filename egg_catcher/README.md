### @hideIteration true
### @explicitHints true
# Egg catcher


## 1. Set up the necessary variables and plot the basket at the start.



```blocks
basket_x = 2
basket_y = 2
led.plot(basket_x, basket_y)
```


## 2. When we press button A, the basket should move left.

Notice that "moving" consists of:
- Unplotting at the current position.
- Updating the position.
- Plotting at the new position.

```blocks
input.onButtonPressed(Button.A, function () {
   led.unplot(basket_x, basket_y)
   basket_x = basket_x - 1
   led.plot(basket_x, basket_y)
})
```

Try it out! What happens when we go too far to the left?




## 3. Preventing the basket from going out of the screen.

We add a conditional block to make sure that we only move left if we are not at the edge of the screen.

```blocks
input.onButtonPressed(Button.A, function () {
   if (basket > 0) {
      led.unplot(basket_x, basket_y)
      basket_x = basket_x - 1
      led.plot(basket_x, basket_y)
   }
})
```

Check it out: the basket should not go out of the screen anymore.


## 4. Now you go ahead do the same for button B moving the basket to the right.

```blocks
input.onButtonPressed(Button.B, function () {
})
```

Hints:
- Copy the Button A block.
- The basket_x variable has to increase, not decrease, to go to the right.
- To prevent the basket from going out of the screen: what is the x coordinate of the rightmost LED? You want to allow movement as long as basket_x is *less* than that.


## 5. Modifying variables (1).


Actually, we have already learned to modify the value of a variable!


Remember how we used the ``||variables:set||`` block from the ``||variables:Variables||`` category to set `counter` to 0 on start?


We use the ``||variables:set||`` block to modify the value of the variable. Let's modify the value when we press the `B` button:

```blocks
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
counter = 0
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += 3
})
```


We can also change the value of a variable down instead of up. To do this we need to use a *negative change*. Try this:
```blocks
counter = 9
input.onButtonPressed(Button.A, function () {
   basic.showNumber(counter)
   counter += -2
})
```


## 7. A counting game.


Now let's play a game.
- We will use a variable called `counter`, set it to 0 and display it on start:

```blocks
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
counter = 0
```


The ``||logic:if - else||`` block tells the microbit to do different things depending on whether the value of `counter` is 0 or something else:
- If `counter`=0, we show "Hi" *and change `counter` to 1*.
- In any other case (that's what the ``||logic:else||`` part means), show "Bye".


Challenges:
- Can you modify the program so that it alternates printing "Hi" and "Bye" every time you press `A`?
- (Harder) Can you modify the program so that the first time it shows "Hi", the second time "Howdy?" and the third time "Bye"?
