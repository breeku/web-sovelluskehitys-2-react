import React, { useState } from "react"

import { Form, Button } from "react-bootstrap"

import { postNotes } from "../services/notes"

const Add = () => {
    const [content, setContent] = useState("")
    const [important, setImportant] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const success = await postNotes({ content, important })

        setError(!success)
    }
    return (
        <div className='container'>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check
                            type='checkbox'
                            label='Important'
                            onChange={() => setImportant(!important)}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
            {error && <>Something went wrong.</>}
        </div>
    )
}

export default Add
