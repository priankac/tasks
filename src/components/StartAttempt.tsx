import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [atmpts, setAtmpts] = useState<number>(4);
    const [inProg, setProg] = useState<boolean>(false);

    function startQ(): void {
        if (!inProg && atmpts > 0) {
            setAtmpts(atmpts - 1);
            setProg(true);
        }
    }

    function stopQ(): void {
        if (inProg) {
            setProg(false);
        }
    }

    function mulligan_n(): void {
        if (!inProg) {
            setAtmpts(atmpts + 1);
        }
    }

    return (
        <div>
            <p>Number of attempts: {atmpts}</p>
            <Button onClick={startQ} disabled={inProg || atmpts === 0}>
                Start Quiz
            </Button>{" "}
            <Button onClick={stopQ} disabled={!inProg}>
                Stop Quiz
            </Button>{" "}
            <Button onClick={mulligan_n} disabled={inProg}>
                Mulligan
            </Button>
        </div>
    );
}
