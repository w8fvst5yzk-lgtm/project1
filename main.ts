input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
})
