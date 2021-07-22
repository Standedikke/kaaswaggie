Kitronik_Move_Motor.beepHorn()
Kitronik_Move_Motor.beepHorn()
Kitronik_Move_Motor.beepHorn()
Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 6.9)
basic.forever(function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    if (Kitronik_Move_Motor.measure() < 5) {
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, 0)
    }
})
