import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [ans, setAns] = useState<string>(options[0]);
    function changeAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAns(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Select value={ans} onChange={changeAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
