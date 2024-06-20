import React, { useEffect } from "react";
import { useEditNoteMutation, EditNoteMutationVariables } from "@/generated";

interface Props {
    id: string;
    da: { _id: string; title: string }[];
    setEdit: React.Dispatch<React.SetStateAction<string>>;
    edit: string;
}

export const EditNote: React.FC<Props> = ({ id, da, setEdit, edit }) => {
    useEffect(() => {
        const note = da.find((e) => e._id === id);
        if (note) {
            setEdit(note.title);
        }
    }, [id, da, setEdit]);

    const [editNoteMutation, { data, loading, error }] = useEditNoteMutation();

    const editTitle = async () => {
        try {
            await editNoteMutation({
                variables: {
                    input: {
                        title: edit,
                        id: id,
                        completed: false
                    },
                } as EditNoteMutationVariables, // Ensure variables match expected types
            });
        } catch (error) {
            console.error("Error editing note:", error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div onClick={editTitle}>
            done
        </div>
    );
};
