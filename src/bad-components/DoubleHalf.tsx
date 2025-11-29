import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [val, setVal] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{val}</span>
            </div>
            <Button
                onClick={() => {
                    setVal(val * 2);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setVal(val / 2);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
