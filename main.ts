BH1750.on()
BH1750.SetAddress(BH1750_ADDRESS.A35)
OLED.init(128, 64)
basic.forever(function () {
    OLED.writeString("Lux:" + Math.floor(BH1750.getIntensity()))
    basic.pause(500)
    OLED.clear()
})
