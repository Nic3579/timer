let min = 0
let sec = 0
let alarm = 0
input.onButtonPressed(Button.A, function () {
    // amt. of time the timer goes for in min.
    min = 15
    sec = 0
    // timer still has time left? if so, return true
    while (min + sec > 0) {
        // every 60 sec it removes a min
        // and resets seconds
        if (sec == 0) {
            min += -1
            sec = 0
        }
        basic.pause(1000)
        sec += -1
        // show amt. of time left
        basic.showString("" + min + ":" + sec)
        basic.clearScreen()
    }
    alarm = 1
})
input.onButtonPressed(Button.B, function () {
    alarm = 0
})
basic.forever(function () {
    // sets off a alarm when time runs out
    if (alarm == 1) {
        music.playMelody("F E F E - G - G ", 120)
    }
})
