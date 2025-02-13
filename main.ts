BH1750.on()
BH1750.SetAddress(BH1750_ADDRESS.A35)
OLED.init(128, 64)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)
basic.forever(function () {
    OLED.writeString("Lux:" + Math.floor(BH1750.getIntensity()))
    basic.pause(500)
    OLED.clear()
})
// 接入RGB灯，R:P0 G:p1 B:P2 GND:- 
// （GND）
basic.forever(function () {
    // 声控程序，环境光强大于等于530亮红灯，否则亮绿灯。
    if (Math.floor(BH1750.getIntensity()) >= 530) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
})
