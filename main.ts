input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(x, y)
            basic.pause(100)
            led.plot(y, x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.unplot(x, y)
            basic.pause(100)
            led.unplot(y, x)
        }
    }
})
basic.showIcon(IconNames.Heart)
basic.clearScreen()
