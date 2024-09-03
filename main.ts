let Minuto = 0
let Count = 0
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showNumber(Minuto)
        Minuto += 1
        basic.pause(1000)
        Count += 1
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        led.stopAnimation()
        basic.showString("" + (Count))
    }
})
