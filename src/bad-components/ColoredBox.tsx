import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: (newIndex: number) => void;
}

function ChangeColor({
    colorIndex,
    setColorIndex,
}: ChangeColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((colorIndex + 1) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: { color: string }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorInd, setColorInd] = useState(DEFAULT_COLOR_INDEX);
    const currColor = COLORS[colorInd];

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currColor}</span>
            <div>
                <ChangeColor
                    colorIndex={colorInd}
                    setColorIndex={setColorInd}
                />
                <ColorPreview color={currColor} />
            </div>
        </div>
    );
}
