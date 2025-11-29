import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAns] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
    }

    const Corr = answer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="check-answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>{Corr ? "✔️" : "❌"}</div>
        </div>
    );
}
