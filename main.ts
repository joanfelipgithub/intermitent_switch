input.onLogoEvent(TouchButtonEvent.Released, function () {
    flag1 = 0
})
let flag1 = 0
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (flag1 == 0) {
            basic.pause(1000)
            flag1 = 1
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(900)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
