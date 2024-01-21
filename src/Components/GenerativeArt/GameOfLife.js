import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const GameOfLife = ({ type, index, width, height }) => {
    let cells, cellColor;
    let scale = 8;
    let size = Math.floor(Math.max(width, height) / scale);
    let speed = 3;
    let running = true;
    let survival_rate = 0.5;
    let canvasName = "defaultCanvas" + index;
    let dragging = false;

    const clearCells = () => {
        cells = Array.from(Array(size), () => new Array(size));
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                cells[i][j] = 0;
            }
        }
    }

    const setCell = (i, j, isAlive) => {
        cells[i][j] = isAlive;
    }

    const invertCells = () => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (cells[i][j] == 1) {
                    cells[i][j] = 0;
                } else {
                    cells[i][j] = 1;
                }
            }
        }
    }

    const isBlankGrid = () => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (cells[i][j] == 1) return false;
            }
        }
        return true;
    }

    const drawCells = (p5) => {
        let population = 0;
        //no outline
        p5.noStroke();

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (cells[i][j] == 1) {
                    population += 1;
                    p5.fill(cellColor);
                    p5.rect(i * scale, j * scale, scale, scale);
                } else {
                    p5.fill(255);
                    p5.rect(i * scale, j * scale, scale, scale);
                }
            }
        }
        return population;
    }

    const initializeCells = (p5) => {
        cellColor = p5.color(Math.random(255), Math.random(255), Math.random(255));
        cells = Array.from(Array(size), () => new Array(size));

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (Math.random(1) < survival_rate) {
                    cells[i][j] = 1;
                } else {
                    cells[i][j] = 0;
                }
            }
        }
    }

    const nextGeneration = () => {
        let nextGen = Array.from(Array(size), () => new Array(size));

        let n = 0;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                n = liveNeighborCount(cells, i, j);
                if (cells[i][j] == 1) {
                    if (n < 2 || n > 3) {
                        nextGen[i][j] = 0;
                    } else {
                        nextGen[i][j] = 1;
                    }
                } else {
                    if (n == 3) {
                        nextGen[i][j] = 1;
                    } else {
                        nextGen[i][j] = 0;
                    }
                }
            }
        }
        return nextGen;
    }

    const liveNeighborCount = (cells, i, j) => {
        let liveNeighborCount = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (x == 0 && y == 0) continue;
                if (i + x >= 0 && i + x < size && j + y >= 0 && j + y < size) {
                    liveNeighborCount += cells[i + x][j + y];
                }
            }
        }
        return liveNeighborCount;
    }

    const setupGrid = (p5) => {
        p5.stroke(120);
        for (let i = 0; i < size; i++) {
            //x1, y1 to x2, y2
            p5.line(i * scale, 0, i * scale, scale*size);
            p5.line(0, i * scale, size*scale, i * scale);
        }

        p5.fill(0);
        //stroke(0);
        let x = Math.floor(p5.mouseX / scale);
        let y = Math.floor(p5.mouseY / scale);
        p5.rect(x * scale, y * scale, scale, scale);
    }

    const constrain = (num, min, max) => {
        return Math.min(Math.max(num, min), max);
    }

    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(size * scale, size * scale);
            initializeCells(p5);
        }

        p5.draw = () => {
            let population = drawCells(p5);
            setupGrid(p5);

            if (p5.frameCount % speed == 1 && running) cells = nextGeneration();
        };

        p5.mousePressed = (e) => {
            if (e.target.id === canvasName) {
                running = !running;
            }
        }

        p5.mouseDragged = (e) => {
            if (e.target.id === canvasName) {
                dragging = true;
                let x = constrain(Math.floor(p5.mouseX / scale), 0, size - 1);
                let y = constrain(Math.floor(p5.mouseY / scale), 0, size - 1);
                setCell(x, y, 1);
            }
        }

        p5.mouseReleased = (e) => {
            if (e.target.id === canvasName && dragging) {
                running = !running;
                dragging = false;
            }
        }
        p5.keyPressed = () => {
            if (p5.key == p5.CODED) {
                if (p5.keyCode == p5.UP) {
                    if (speed >= 5) speed -= 1;
                } else if (p5.keyCode == p5.DOWN) {
                    speed += 1;
                }
            }
            if (p5.key == ' ') {
                if (!isBlankGrid()) {
                    //if grid is not blank pause it
                    running = !running;
                }
                else {
                    initializeCells(p5);
                    running = true;
                }
            }
            if (p5.key == 'c') {
                invertCells();
            }

            if (p5.key == 'x') {
                clearCells();
            }
        }
    }
    return <ReactP5Wrapper sketch={sketch} />;
}

export default GameOfLife

