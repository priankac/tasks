import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [stu, setStu] = useState<boolean>(true);

    const display = name === "" ? "Your Name" : name;

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStu(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                checked={edit}
                onChange={() => {
                    setEdit((prev) => !prev);
                }}
            />
            {edit && (
                <div>
                    <Form.Group controlId="edit-name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check-mode"
                        label="student"
                        checked={stu}
                        onChange={updateStudent}
                    />
                </div>
            )}
            <div>
                {display} is {stu ? "a student" : "not a student"}
            </div>
        </div>
    );
}
