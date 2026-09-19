import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
function rollDiff(): [number, number] {
    const left: number = d6();
    let right: number = d6();
    while (right === left) {
        right = d6();
    }
    return [left, right];
}

export function TwoDice(): React.JSX.Element {
    const [Left, Right] = rollDiff();
    const [lDie, setL] = useState<number>(Left);
    const [rDie, setR] = useState<number>(Right);
    return <div>Two Dice</div>;
}
