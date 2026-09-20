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
        </div>
    );
}
