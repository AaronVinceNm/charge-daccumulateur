let nB = pins.analogReadPin(AnalogPin.P0)
if (nB > 418) {
    led.point(3, 5)
} else if (nB > 403 && nB < 418) {
    led.point(3, 4)
} else if (nB > 387 && nB < 403) {
    led.point(3, 3)
} else if (nB > 356 && nB < 387) {
    led.point(3, 2)
} else if (nB > 325 && nB < 356) {
    led.point(3, 1)
} else if (nB < 325) {
    led.point(3, 0)
}

