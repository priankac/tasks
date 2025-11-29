import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [atmpts, setAtmpts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    function gainAttempts() {
        const amt = parseInt(request);
        if (!Number.isNaN(amt)) {
            setAtmpts(atmpts + amt);
            setRequest("");
        }
    }

    function useAttempt() {
        if (atmpts > 0) {
            setAtmpts(atmpts - 1);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {atmpts}</div>
            <Form.Group controlId="show-attempts">
                <Form.Label>Amount to gain:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequested}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={atmpts === 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
