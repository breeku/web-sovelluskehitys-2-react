import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

import { getNotes } from "../services/notes"

const List = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        ;(async () => {
            const data = await getNotes()
            setNotes(data)
        })()
    }, [])

    return (
        <div className='container'>
            <Table striped>
                <tbody>
                    {notes?.length > 0 &&
                        notes.map((note) => (
                            <tr>
                                <td>
                                    <p>{note.content}</p>
                                </td>
                                <td>
                                    <p>{note.important.toString()}</p>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}

export default List
