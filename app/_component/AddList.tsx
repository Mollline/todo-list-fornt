import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateNoteMutation, useGetAllNotesQuery } from "@/generated";

interface Props {
    mode: boolean;
}


export const AddList: React.FC<Props> = ({ mode }) => {
    const [title, setTitle] = useState<string>('');

    const [createNoteMutation, { data, loading, error, }] = useCreateNoteMutation();
    const { refetch } = useGetAllNotesQuery();

    const addList = async () => {
        try {
            const res = await createNoteMutation({
                variables: {
                    input: {
                        completed: false,
                        title: title
                    }
                }
            });
            setTitle('')
            refetch()
        } catch (error) {
            console.error('Error adding note:', error);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <div style={{ display: 'flex' }}>
            <Input
                className="w-[185px]"
                placeholder="Todo list....."
                value={title}
                type="text"
                onChange={handleInputChange}
            />
            <Button
                style={{
                    margin: '0px 40px',
                    backgroundColor: mode ? 'black' : 'white',
                    color: mode ? 'white' : 'black',
                    cursor: 'pointer'
                }}
                onClick={addList}
            >
                Add
            </Button>
        </div>
    )
}
