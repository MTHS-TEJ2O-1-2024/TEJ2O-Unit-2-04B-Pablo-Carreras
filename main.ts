/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: pablo
 * Created on: Sep 2024
 * This program says the temperature f the microbit
*/

// says the temperature f the microbit 
let currentTemperature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
currentTemperature = input.temperature()
basic.showNumber(currentTemperature)
})
