"""
Created by: Pablo
Created on: Sep 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *


current_temperautere = temperature
display.clear()
display.show(Image.Happy)

while True:
    if button_a.is_pressed():
        display.show(str('The tmperature is: '))
        current_temperautere = temperature()
        radio.send(str(temperature()))
