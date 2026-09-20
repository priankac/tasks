import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Options_of_Colors = [
    "green",
    "blue",
    "red",
    "teal",
    "orange",
    "violet",
    "beige",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(Options_of_Colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {Options_of_Colors.map((option: string) => (
                <Form.Check
                    inline
                    key={option}
                    type="radio"
                    name="colors"
                    id={`color-${option}`}
                    label={option}
                    value={option}
                    checked={color === option}
                    onChange={() => {
                        setColor(option);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                }}
            >
                {color}
            </div>
        </div>
    );
}
