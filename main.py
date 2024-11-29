nB=pins.analog_read_pin(AnalogPin.P0)
if nB > 418:
    led.point(3, 5)
elif nB > 403 and nB < 418:
    led.point(3, 4)
elif nB > 387 and nB < 403:
    led.point(3, 3)
elif nB > 356 and nB < 387:
    led.point(3, 2)
elif nB > 325 and nB < 356:
    led.point(3, 1)
elif nB < 325:
    led.point(3, 0)