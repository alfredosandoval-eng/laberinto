let Count = 0
let Minuto = 0
music.play(music.stringPlayable("E - E - E - B - ", 140), music.PlaybackMode.UntilDone)
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showNumber(Minuto)
        Minuto += 1
        basic.pause(1000)
        Count += 1
    }
    basic.showString("" + (Count))
})
