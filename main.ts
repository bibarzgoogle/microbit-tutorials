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
