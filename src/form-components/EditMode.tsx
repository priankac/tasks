import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [makeEdits, setEdits] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function createEdit(event: React.ChangeEvent<HTMLInputElement>): void {
        setEdits(event.target.checked);
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }
    function checkStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Editing"
                checked={makeEdits}
                onChange={createEdit}
            />
            {!makeEdits && (
                <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            )}
            {makeEdits && (
                <div>
                    <Form.Group controlId="editModeName">
                        <Form.Control value={name} onChange={changeName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="edit-mode-student"
                        label="Student"
                        checked={student}
                        onChange={checkStudent}
                    />
                </div>
            )}
        </div>
    );
}
