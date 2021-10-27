let min = 0
let sec = 0
let alarm = 0
input.onButtonPressed(Button.A, function () {
    min = 10
    sec = 0
    while (min + 0 > 0) {
        basic.pause(1000)
        sec += -1
        basic.showString("" + min + ":" + sec)
        basic.clearScreen()
    }
    alarm = 1
})
input.onButtonPressed(Button.B, function () {
    alarm = 0
})
basic.forever(function () {
    // every 60 sec
    if (sec == 0) {
        min += -1
        sec = 0
    }
    if (alarm == 1) {
        music.playMelody("F E F E - G - G ", 120)
    }
})
