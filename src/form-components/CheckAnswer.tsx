import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswerInput">
                <Form.Label>The Answer is:</Form.Label>
                <Form.Control
                    value={ans}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAns(event.target.value);
                    }}
                />
            </Form.Group>
            <div>{ans === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
