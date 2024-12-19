### @hideIteration true
### @explicitHints true
# Snowfall


## 1. Learn how the coordinates of the microbit LEDs work

The microbit "screen" is made up of 25 small lights (called LEDs) arranged in 5 rows and 5 columns.
Each LED is identified by two numbers, called *coordinates*: a horizontal coordinate and a vertical coordinate.
- The horizontal coordinate can go from 0 (all the way to the left) to 4 (all the way to the right).
- The vertical coordinate can go from 0 (all the way at the top) to 4 (all the way at the bottom).
You can see the coordinates of each LED in the microbit emulator by hovering the mouse above the different LEDs.

The horizontal coordinate is usually called *x*. The vertical coordinate is usually called *y*.

The commands to manipulate the LEDs are in the ``||led:Led||`` menu. We use the ``||led:plot||`` command to turn on an LED, and ``||led:unplot||`` to turn it off.

For example, the following will turn on the LED at the center of the screen on start:


```blocks
led.plot(2, 2)
```

Try changing the `x` and `y` coordinates of the plot command and rerunning the program.

Questions:
- How do you turn on the LED at the top left?
- How do you turn on the LED at the bottom left?
- How do you turn on the LED at the bottom right?
- How do you turn on the LED at the top center?
- What LED turns on when `x` is 1 and `y` is 3?
- What are the coordinates of the LED below the top right corner?



## 2. Animating a snowflake.

We are going to make an animation now: a dot will fall from the top center of the screen, as if it was a snowflake.

Movement on the screen is an illusion, the LEDs do not move. Instead, an LED turns on; then it turns off and immediately the LED below it turns on, seeming as if the light had moved down.

On start, our program should turn on the LED at the top center. Then wait for 500 milliseconds. Then turn off the LED (with the ``||led:unplot||`` command) and turn on the LED below it.

Have you done it? Here's the solution:

```blocks
led.plot(2, 0)
pause(500)
led.unplot(2,0)
led.plot(2, 1)
```

Questions:
- What happens if the ``||basic:pause||`` command is between the ``||led:unplot||`` and the ``||led:plot||`` command? Why?


## 3. Making the snowflake fall all the way down.

Let's continue the animation all the way down the screen:

```blocks
led.plot(2, 0)
pause(500)
led.unplot(2,0)
led.plot(2, 1)
pause(500)
led.unplot(2,1)
led.plot(2, 2)
pause(500)
led.unplot(2,2)
led.plot(2, 3)
pause(500)
led.unplot(2,3)
led.plot(2, 4)
pause(500)
led.unplot(2,4)
```

Questions:
- Why do we finish the program with a ``||led:unplot||`` command?
- What do you need to change if you want the snowflake to fall along the left side of the screen instead of the center?


## 4. Use a variable to change the position of the snowflake more easily.

If we want the snowflake to fall along a different column in the screen we have to change all those `2` coordinates, it's quite tedious.

We can make changes more easily with a variable:

```blocks
snowX = 2
led.plot(snowX, 0)
pause(500)
led.unplot(snowX,0)
led.plot(snowX, 1)
pause(500)
led.unplot(snowX,1)
led.plot(snowX, 2)
pause(500)
led.unplot(snowX,2)
led.plot(snowX, 3)
pause(500)
led.unplot(snowX,3)
led.plot(snowX, 4)
pause(500)
led.unplot(snowX,4)
```

We called the variable `snowX` to remind us that it represents the x coordinate of the snowflake, but, as always, this is arbitrary. You can choose any name you want for a variable.

Now if you want to change the position of the snowflake, you just have to change the value of `snowX`. (try it!)


## 5. Snow that keeps falling.

Up to now our snowflake falls only once.

Put the animation in a ``||basic::forever||`` block instead of the ``||basic::onstart||``block, so that it falls repeatedly.


## 6. Snow that falls everywhere.

A snowflake that always falls in the same place is boring.

Let's assign a random value between 0 and 4 to `snowX` each time so that it will fall in a different place each time:

```blocks
basic.forever(function () {
    snowX = randint(0, 4)
    led.plot(snowX, 0)
    pause(500)
    led.unplot(snowX,0)
    led.plot(snowX, 1)
    pause(500)
    led.unplot(snowX,1)
    led.plot(snowX, 2)
    pause(500)
    led.unplot(snowX,2)
    led.plot(snowX, 3)
    pause(500)
    led.unplot(snowX,3)
    led.plot(snowX, 4)
    pause(500)
    led.unplot(snowX,4)
})
```

That's it! You're microbit is now an electronic snow globe!


## 7. Challenges:
- How can you control the speed of the falling snow? Can you make it so that each snowflake falls at a different speed?
- Can you add a horizontal line at the bottom of the screen to represent the ground where the snowflakes fall?
