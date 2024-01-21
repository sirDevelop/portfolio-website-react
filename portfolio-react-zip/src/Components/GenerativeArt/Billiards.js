import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
const Billiards = ({ bypassCanvas, index, width, height, limit, WipeSize, ballRadiusLowerLimit, ballRadiusUpperLimit }) => {
    // number of balls before we wipe the screen
    let LIMIT = limit ? limit : 30
    let xPos = []
    let yPos = []
    let xSpeed = []
    let ySpeed = []
    let ballColors = []
    let ballRadii = []
    let size = 5
    let wipeScreen = false
    let wipeSize = WipeSize ? WipeSize : 220
    let running = true
    let canvasName = "defaultCanvas" + index

    const clearAll = () => {
        xPos = []
        yPos = []
        xSpeed = []
        ySpeed = []
        ballColors = []
        ballRadii = []
    }

    const restart = (p5) => {
        p5.fill(p5.color(220, 20, 60))
        p5.circle(p5.width / 2, p5.height / 2, size)
        size += 10
        if (size > p5.width * 1.2) {
            size = 5
            wipeScreen = false
        }
    }

    const checkCollisions = () => {
        if (xPos.length <= 1) return

        for (let i = 0; i < xPos.length; i++) {
            for (let j = i + 1; j < xPos.length; j++) {
                let x1 = xPos[i]
                let y1 = yPos[i]
                let s1 = ballRadii[i]

                let x2 = xPos[j]
                let y2 = yPos[j]
                let s2 = ballRadii[j]

                if (Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) <= (s1 + s2)) {
                    //collision
                    //merge balls leto earlier one
                    let newSize = Math.sqrt(Math.pow(s1, 2) + Math.pow(s2, 2))
                    if (s1 < s2) {
                        //remove s1
                        ballRadii[j] = newSize
                        removeBall(i)
                        //i--
                        //do not need since i is not incremented
                        j -= 1
                    } else {
                        //remove s2
                        ballRadii[i] = newSize
                        removeBall(j)
                        j -= 1
                    }

                    if (newSize >= wipeSize) {
                        wipeScreen = true
                        break
                    }
                }
            }
        }

        if (wipeScreen) {
            clearAll()
        }
    }

    const addBall = (p5, x, y) => {
        xPos.push(x)
        yPos.push(y)
        xSpeed.push(p5.random(2, 12) * (p5.random(0, 1) > 0.5 ? 1 : -1))
        ySpeed.push(p5.random(2, 12) * (p5.random(0, 1) > 0.5 ? 1 : -1))
        ballColors.push(p5.color(p5.random(255), p5.random(255), p5.random(255)))
        ballRadii.push(p5.random(ballRadiusLowerLimit ? ballRadiusLowerLimit : 10, ballRadiusUpperLimit ? ballRadiusUpperLimit : 35))
    }

    const removeBall = (index) => {
        xPos.splice(index, 1)
        yPos.splice(index, 1)
        xSpeed.splice(index, 1)
        ySpeed.splice(index, 1)
        ballColors.splice(index, 1)
        ballRadii.splice(index, 1)
    }
    const sketch = (p5) => {
        p5.setup = () => p5.createCanvas(width ? width : 1280, height ? height : 600);

        p5.draw = () => {
            p5.background(0);
            p5.fill(255);

            if (xPos.length > LIMIT) {
                clearAll()
                wipeScreen = true
            }

            if (wipeScreen) restart(p5)


            for (let i = 0; i < xPos.length; i++) {
                p5.fill(ballColors[i])
                p5.circle(xPos[i], yPos[i], 2 * ballRadii[i])

                if (running) {
                    xPos[i] += xSpeed[i]
                    yPos[i] += ySpeed[i]

                    if (xPos[i] <= ballRadii[i] || xPos[i] > p5.width - ballRadii[i]) {
                        xSpeed[i] *= -1
                        if (xPos[i] <= ballRadii[i]) xPos[i] += 3
                        if (xPos[i] > p5.width - ballRadii[i]) xPos[i] -= 3
                    }
                    if (yPos[i] <= ballRadii[i] || yPos[i] > p5.height - ballRadii[i]) {
                        ySpeed[i] *= -1
                        if (yPos[i] <= ballRadii[i]) yPos[i] += 3
                        if (yPos[i] > p5.height - ballRadii[i]) yPos[i] -= 3
                    }
                }

            }

            checkCollisions()
        };



        p5.mousePressed = (e) => {
            if (e.target.id === canvasName || bypassCanvas) {
                if (wipeScreen) return
                addBall(p5, p5.mouseX, p5.mouseY)
            }
        }

        p5.mouseDragged = (e) => {
            if (e.target.id === canvasName || bypassCanvas) {
                if (wipeScreen) return
                if (p5.frameCount % 6 == 1) addBall(p5, p5.mouseX, p5.mouseY)
            }
        }

        p5.keyPressed = (e) => {
            if (e.target.id === canvasName || bypassCanvas) {
                if (p5.key == ' ') { //this means space bar
                    // if(!running) running = true
                    // else running = false
                    running = !running
                }
                // if (p5.key == 'x') {
                //     clearAll();
                //     running = false;
                // }
            }
        }
    }
    return <ReactP5Wrapper sketch={sketch} />;
}
export default Billiards

// https://www.npmjs.com/package/@p5-wrapper/react