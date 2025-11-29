import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎊 New Year"
    | "🎃 Halloween"
    | "🍁 Thanksgiving"
    | "🎄 Christmas"
    | "🪔 Diwali";

const HOLIDAYS_Alphabetically: Holiday[] = [
    "🎄 Christmas",
    "🎊 New Year",
    "🎃 Halloween",
    "🪔 Diwali",
    "🍁 Thanksgiving",
];

const HOLIDAYS_by_Year: Holiday[] = [
    "🎄 Christmas",
    "🎊 New Year",
    "🪔 Diwali",
    "🍁 Thanksgiving",
    "🎃 Halloween",
];

function nextHoliday(current: Holiday, order: Holiday[]): Holiday {
    const ind = order.indexOf(current);
    return order[(ind + 1) % order.length];
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎊 New Year");

    const isadvance = () => {
        setHoliday(nextHoliday(holiday, HOLIDAYS_Alphabetically));
    };

    const isadvanceYear = () => {
        setHoliday(nextHoliday(holiday, HOLIDAYS_by_Year));
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={isadvance}>Advance by Alphabet</Button>
            <Button onClick={isadvanceYear}>Advance by Year</Button>
        </div>
    );
}
