'use client'
import { useGetAllNotesQuery } from "@/generated";
import { TodoList } from "./_component/CustomTable";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(false);
  const { data, loading, error, refetch } = useGetAllNotesQuery();
  const da = data?.getAllNotes;

  if (loading) {
    return <div style={{ color: "black", fontSize: "40px" }}>This is loading</div>;
  }

  return (
    <div>
      <body style={{ backgroundColor: mode ? 'white' : 'black', padding: '50px 600px' }}>
        <TodoList mode={mode} setMode={setMode} da={da || []} />
        <div></div>
      </body>
    </div>
  );
}
