let hours = 0
let minutes = 0
let adjust = 0
let time = ""
let ampm = false
time = ""
minutes = 0
hours = 0
function on_gesture_shake() {
    
    time = "" + hours + (":" + ("" + minutes))
    basic.showString(time)
}

input.onGesture(Gesture.Shake, on_gesture_shake)
hours = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
    
})
minutes = 0
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
    
})
ampm = false
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    ampm = !ampm
})
minutes = 0
hours = 0
basic.forever(function on_forever() {
    
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
        
    }
    
})
minutes = 0
hours = 0
adjust = 0
time = ""
ampm = false
function on_gesture_drop() {
    
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else if (hours == 0) {
            adjust = 12
        }
        
    }
    
    time = "" + ("" + adjust)
    time = time + ":"
    if (minutes < 10) {
        time = time + "0"
    }
    
    time = time + ("" + minutes)
}

input.onGesture(Gesture.Shake, on_gesture_shake)
