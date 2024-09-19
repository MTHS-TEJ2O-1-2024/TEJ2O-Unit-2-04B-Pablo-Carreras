"""
Created by: Pablo
Created on: Sep 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *
import random

#variable for the random number 
random_number = 0

display.clear()


while True:
    if button_a.if_PRESSED():
        random_number = random.randint(1, 6)
        display.show(str(random_number))
