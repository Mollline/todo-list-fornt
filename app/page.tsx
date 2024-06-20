'use client'
import { useGetAllNotesQuery } from "@/generated";
import { TodoList } from "./_component/CustomTable";
import { useEffect, useState } from "react";
import { CircularProgress } from '@material-ui/core';
export default function Home() {
  const [mode, setMode] = useState(false);
  const { data, loading, error, refetch } = useGetAllNotesQuery();
  const da = data?.getAllNotes;
  const [daata, setDaata] = useState(null); // State to store fetched data
  const [loaading, setLoaading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Example API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        setDaata(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoaading(false); // Update loading state once fetch operation is complete
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ background: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <div >
      {loading ? (
        <CircularProgress size={150} thickness={6} />
      ) : (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(daata, null, 2)}</pre>
        </div>
      )}
    </div></div>;
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
