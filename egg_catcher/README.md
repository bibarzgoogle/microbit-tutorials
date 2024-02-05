### @hideIteration true
### @explicitHints true
# Egg catcher


## 1. Set up the necessary variables and plot the basket at the start.



```blocks
basketX = 2
basketY = 2
led.plot(basketX, basketY)
```


## 2. When we press button A, the basket should move left.

Notice that "moving" consists of:
- Unplotting at the current position.
- Updating the position.
- Plotting at the new position.

```blocks
input.onButtonPressed(Button.A, function () {
   led.unplot(basketX, basketY)
   basketX = basketX - 1
   led.plot(basketX, basketY)
})
```

Try it out! What happens when we go too far to the left?




## 3. Preventing the basket from going out of the screen.

We add a conditional block to make sure that we only move left if we are not at the edge of the screen.

```blocks
input.onButtonPressed(Button.A, function () {
   if (basket > 0) {
      led.unplot(basketX, basketY)
      basketX = basketX - 1
      led.plot(basketX, basketY)
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
- The basketX variable has to increase, not decrease, to go to the right.
- To prevent the basket from going out of the screen: what is the x coordinate of the rightmost LED? You want to allow movement as long as basketX is *less* than that.


## 5. Put the basket at the bottom!

The basket moves along the center row of the screen. Why?

Make the necessary change so it is at the bottom.


## 6. Add the falling egg!

Here's basic code for a falling egg:

```blocks
basic.forever(function () {
    eggX = randint(0, 4)
    for (let eggY = 0; eggY <= 3; eggY++) {
        led.plot(eggX, eggY)
        basic.pause(500)
        led.unplot(eggX, eggY)
    }
})
```

## 7. Check if the basket catches the egg.

Complete the falling egg block with a simple check:

```blocks
basic.forever(function () {
    eggX = randint(0, 4)
    for (let eggY = 0; eggY <= 3; eggY++) {
        led.plot(eggX, eggY)
        basic.pause(600)
        led.unplot(eggX, eggY)
    }
    if (eggX == basketX) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
```

## 8. Challenges:
- Add a score variable that increases for each egg you catch. When the egg falls, display the score and set it back to zero.
- How can you control the speed of the falling egg? Can you make it so that each egg falls at a different speed?
- (Harder) Add a proper start and end screen: before the game starts, display a title and wait for a button press. When the game ends, display the score and wait for a button press to start again. You will probably need additional variables.
