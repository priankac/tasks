import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function buttonType(): void {
        setQuestion(
            qType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    const isShort = qType === "short_answer_question";

    return (
        <div>
            <div>{isShort ? "Short Answer" : "Multiple Choice"}</div>
            <Button onClick={buttonType}>Change Type</Button>
        </div>
    );
}
