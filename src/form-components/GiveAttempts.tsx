import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attmpts, setAttmpts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");
    const prse: number = parseInt(requested, 10);
    return (
        <div>
            <h3>Give Attempts</h3>
        </div>
    );
}
