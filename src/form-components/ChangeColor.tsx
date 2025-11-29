import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Colors = [
    "blue",
    "green",
    "red",
    "violet",
    "purple",
    "yellow",
    "brown",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [col, setCol] = useState<string>(Colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCol(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {Colors.map((clr: string) => (
                <Form.Check
                    key={clr}
                    inline
                    type="radio"
                    name="colors"
                    id={`color-${clr}`}
                    label={clr}
                    value={clr}
                    checked={col === clr}
                    onChange={updateColor}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: col,
                    display: "inline-block",
                    marginLeft: "10px",
                }}
            >
                {col}
            </div>
        </div>
    );
}
