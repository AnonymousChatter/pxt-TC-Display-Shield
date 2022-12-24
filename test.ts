// Initialize TFT Display
TC-MKCD.init()

// Clear screen - replaces whole screen with a black rectangle
TC-MKCD.clearScreen()

// Draw a single red pixel
TC-MKCD.drawPixel(10, 10, Color.Red)
basic.pause(1000)

// Draw a straight blue line
TC-MKCD.drawLine(0, 0, 100, 100, Color.Blue)
basic.pause(1000)

// Draw a yellow rectangle
TC-MKCD.drawRectangle(0, 0, 100, 120, Color.Yellow)
basic.pause(1000)

// Draw a green circle
TC-MKCD.drawCircle(50, 50, 50, Color.Green)
basic.pause(1000)

// Clear screen - replaces whole screen with a black rectangle
TC-MKCD.clearScreen()

// Show white text with black background
TC-MKCD.showString("Hello TomatoCube!", 10, 10, 1, Color.White, Color.Black)
basic.pause(1000)

// Turn off display
TC-MKCD.turnOff()
basic.pause(1000)

// Turn on display
TC-MKCD.turnOn()
