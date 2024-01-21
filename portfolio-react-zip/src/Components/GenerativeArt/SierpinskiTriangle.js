import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const SierpinskiTriangle = ({ index, width, height }) => {
    let iteration = 1;
    let positiveDirection = true;
    let maxIterations = 9;
    let canvasName = "defaultCanvas" + index;

    const genSierTriangle = (p5, x1, y1, x2, y2, x3, y3, n) => {
        // 'n' is the number of iteration.
        if (n > 0) {
            p5.fill(0, 200 / n, 255);
            p5.triangle(x1, y1, x2, y2, x3, y3);

            // Calculating the midpoints of all segments.
            let h2 = (x2 + x3) / 2.0;
            let w1 = (y1 + y2) / 2.0;
            let w2 = (y2 + y3) / 2.0;
            let h3 = (x3 + x1) / 2.0;
            let w3 = (y3 + y1) / 2.0;
            let h1 = (x1 + x2) / 2.0;

            // Trace the triangle with the new coordinates.
            genSierTriangle(p5, h1, w1, x2, y2, h2, w2, n - 1);
            genSierTriangle(p5, x1, y1, h1, w1, h3, w3, n - 1);
            genSierTriangle(p5, h3, w3, h2, w2, x3, y3, n - 1);
        }
    }

    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(width ? width : 1280, height ? height : 600);
            p5.background(650);
            p5.noStroke();
            p5.smooth();
            genSierTriangle(p5, 0, height, width / 2, 0, width, height, iteration);
        }

        p5.draw = () => {
        };

        p5.mouseClicked = (e) => {
            if (e.target.id === canvasName){
                if(positiveDirection) iteration += 1
                else {
                    iteration -= 1
                }
                if(iteration == maxIterations) positiveDirection = false
                if (iteration == 1) positiveDirection = true

                genSierTriangle(p5, 0, height, width / 2, 0, width, height, iteration);
            }
        }
    }
    return <ReactP5Wrapper sketch={sketch} />;
}


export default SierpinskiTriangle