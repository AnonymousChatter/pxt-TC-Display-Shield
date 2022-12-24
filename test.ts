// Initialize TFT Display
TCMKCD.init()

// Clear screen - replaces whole screen with a black rectangle
TCMKCD.clearScreen()

// Draw a single red pixel
TCMKCD.drawPixel(10, 10, Color.Red)
basic.pause(1000)

// Draw a straight blue line
TCMKCD.drawLine(0, 0, 100, 100, Color.Blue)
basic.pause(1000)

// Draw a yellow rectangle
TCMKCD.drawRectangle(0, 0, 100, 120, Color.Yellow)
basic.pause(1000)

// Draw a green circle
TCMKCD.drawCircle(50, 50, 50, Color.Green)
basic.pause(1000)

// Clear screen - replaces whole screen with a black rectangle
TCMKCD.clearScreen()

// Show white text with black background
TCMKCD.showString("Hello TomatoCube!", 10, 10, 1, Color.White, Color.Black)
basic.pause(1000)

// Turn off display
TCMKCD.turnOff()
basic.pause(1000)

// Turn on display
TCMKCD.turnOn()
