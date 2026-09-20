import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attmpts, setAttmpts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");
    const prse: number = parseInt(requested, 10);
    function handleUse(): void {
        setAttmpts(attmpts - 1);
    }
    function handleGains(): void {
        if (!Number.isNaN(prse)) {
            setAttmpts(attmpts + prse);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attmpts}</div>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <Button disabled={attmpts === 0} onClick={handleUse}>
                use
            </Button>
            <Button onClick={handleGains}>gain</Button>
        </div>
    );
}
