import React, { useState } from "react";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Comment } from "./Comment";
import {
    useDeleteNoteMutation,
    useEditNoteMutation,
    useGetAllNotesQuery,
} from "@/generated";
import { EditNote } from "./EditNote";

interface Props {
    mode: boolean;
    id: string;
    title: string;
    completed: boolean;
    createdAt: string; // Assuming createdAt is a string representation of timestamp
    da: any[];
}

export const SingleNote: React.FC<Props> = ({ mode, id, title, completed, createdAt, da }) => {
    const [show, setShow] = useState(true);
    const [edit, setEdit] = useState(title);
    const [isChecked, setIsChecked] = useState(completed);
    const [deleteNoteMutation] = useDeleteNoteMutation();
    const { refetch } = useGetAllNotesQuery();
    const [editNoteMutation] = useEditNoteMutation();

    const deleteHandler = async () => {
        try {
            await deleteNoteMutation({
                variables: {
                    deleteNoteId: id
                }
            });
            refetch();
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    }

    const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEdit(e.target.value);
    }

    const handleCheckboxChange = async () => {
        setIsChecked(!isChecked);
        try {
            await editNoteMutation({
                variables: {
                    input: {
                        id: id,
                        title: edit,
                        completed: !isChecked
                    },
                },
            });
            refetch();
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };
    const timestamp = Number(createdAt); // Assuming createdAt is a string representation of timestamp
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}:${month}:${day}`;

    return (
        <TableRow>
            <TableCell style={{ width: '100%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: isChecked ? 'green' : 'transparent',
                        border: isChecked ? '2px solid white' : '2px solid transparent',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', width: '90%', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Comment />
                            <div style={{ width: '400px', color: mode ? 'black' : 'white' }}>{title}</div>
                        </div>
                        <div style={{ zIndex: '4', position: 'absolute', display: show ? "none" : "flex", alignItems: 'center' }}>
                            <Input
                                style={{
                                    color: mode ? 'black' : 'white',
                                    height: '30px',
                                    border: '0',
                                    backgroundColor: mode ? 'RGB(249 249 250)' : 'RGB(122 122 123)',
                                    marginTop: '-5.5px',
                                    marginLeft: '-12px',
                                    zIndex: '-1'
                                }}
                                type="text"
                                onChange={handleEditTitle}
                                value={edit}
                            />
                            <Button
                                onClick={() => setShow(true)}
                                style={{
                                    margin: '0px 40px',
                                    backgroundColor: mode ? 'grey' : 'white',
                                    color: 'black',
                                    cursor: 'pointer',
                                    height: '30px',
                                    marginTop: '-5.5px',
                                    marginLeft: '0px',
                                }}
                            >
                                <EditNote setEdit={setEdit} da={da} edit={edit} id={id} />
                            </Button>
                        </div>
                        <div style={{ color: mode ? 'black' : 'white' }}>{formattedDate}</div> {/* Display formatted date */}
                    </div>
                    <button onClick={deleteHandler}><img width="20px" src="trash.png" alt="Delete" /></button>
                    <button onClick={() => setShow(false)}><img width="20px" src="edit.png" alt="Edit" /></button>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </TableCell>
        </TableRow>
    )
}
