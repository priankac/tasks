import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [opt, setOpt] = useState<string>(options[0] ?? "");

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setOpt(event.target.value);
    }

    const correct = opt === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice-question">
                <Form.Label>Pick an answer:</Form.Label>
                <Form.Select value={opt} onChange={updateChoice}>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{correct ? "✔️" : "❌"}</div>
        </div>
    );
}
