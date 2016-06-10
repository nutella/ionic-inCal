# ionic-inCal
Simple 4 operations calculator with nearly infinite precision ;)

This simple app was written for devdactic challenge #1: Build a Calculator with Ionic
for more info see https://devdactic.com/challenge-1

I choose to make as simple as possible calculator, with floating point and only plus, minus, multiply and divide
operations. I've used a Decimal.js (arbitrary precision decimal type for javascript) to handle very big numbers,
see https://github.com/MikeMcl/decimal.js

I've also added a modified version of ng-FitText.js adapted to continuosly check the element and change
the font size to better display the result of calculations using rem instead of pixel, see https://github.com/patrickmarabeas/ng-FitText.js

In the www directory you can find the sources of the app, in the resources directory there are the icon and the splash screen.

Ps. no ionic files are included so you can use yours...