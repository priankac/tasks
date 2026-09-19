import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Dragon Boat Festival"
    | "Christmas"
    | "Lunar New Year"
    | "Diwali"
    | "Thanksgiving";

const Holiday_Img: Record<Holiday, string> = {
    "Dragon Boat Festival": "🎏",
    Christmas: "🎄",
    "Lunar New Year": "🌑",
    Diwali: "🪔",
    Thanksgiving: "🦃",
};
const Alphabetical_Order: Record<Holiday, Holiday> = {
    Christmas: "Diwali",
    Diwali: "Dragon Boat Festival",
    "Dragon Boat Festival": "Lunar New Year",
    "Lunar New Year": "Thanksgiving",
    Thanksgiving: "Christmas",
};

const Yearly: Record<Holiday, Holiday> = {
    "Lunar New Year": "Dragon Boat Festival",
    "Dragon Boat Festival": "Thanksgiving",
    Thanksgiving: "Diwali",
    Diwali: "Christmas",
    Christmas: "Lunar New Year",
};

export function CycleHoliday(): React.JSX.Element {
    return <div>Cycle Holiday</div>;
}
