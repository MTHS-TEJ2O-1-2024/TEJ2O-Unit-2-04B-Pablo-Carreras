/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: pablo
 * Created on: Sep 2024
 * This program randomly generates a number from 1-6
*/

// our vaiable for our random number
let randomNumber: number

basic.clearScreen()

input.onButtonPressed(Button.A, function () {
randomNumber = randint (1, 6)
basic.showNumber(randomNumber)
})
