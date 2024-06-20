"use client";
import React, { useEffect, useState } from "react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { AddList } from "./AddList";
import { Table, TableBody, TableRow } from "@/components/ui/table";
import { SingleNote } from "./singleNote";

interface Props {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  da: any[];
}

export const TodoList: React.FC<Props> = ({ mode, setMode, da }) => {
  const [lastDay, setLastDay] = useState(false);
  const [curDate, setCurDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
    const day = currentDate.getDate();
    const formattedDate = `${year}:${month}:${day}`;
    setCurDate(formattedDate);
    console.log(formattedDate);
  }, []);

  const toggleLastDay = () => {
    setLastDay(prevLastDay => !prevLastDay);
  };

  const filteredNotes = lastDay
    ? da.filter(note => {
      const timestamp = Number(note.createdAt);
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const fdDate = `${year}:${month}:${day}`;
      return fdDate === curDate;
    })
    : da;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <AddList mode={mode} />
        <DropdownMenu>
          <div style={{ color: mode ? 'black' : 'white', padding: '10px' }}>
            <button
              onClick={toggleLastDay}
              style={{
                backgroundColor: mode ? 'black' : 'white',
                color: mode ? 'white' : 'black',
                borderRadius: '7px',
                width: '100px',
                height: '40px',
                marginLeft: '350px',
              }}
            >
              {lastDay ? 'All' : 'Last day'}
            </button>
          </div>
        </DropdownMenu>
        <DropdownMenu>
          <div style={{ color: mode ? 'black' : 'white', padding: '10px' }}>
            <button
              onClick={() => setMode(!mode)}
              style={{
                backgroundColor: mode ? 'black' : 'white',
                color: mode ? 'white' : 'black',
                borderRadius: '7px',
                width: '100px',
                height: '40px',
              }}
            >
              {mode ? 'dark' : 'light'}
            </button>
          </div>
        </DropdownMenu>
      </div>
      <div className="rounded-md border flex w-[900px]">
        <Table>
          <TableBody>
            <TableRow>
              <div
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '10px',
                  justifyContent: 'space-between',
                  display: 'flex',
                  paddingRight: '100px',
                }}
              >
                <div style={{ color: mode ? 'black' : 'white' }}>Todo Lists</div>
                <div style={{ color: mode ? 'black' : 'white' }}>Date</div>
              </div>
            </TableRow>
            {filteredNotes.map(({ id, title, completed, createdAt }) => (
              <SingleNote
                key={id}
                id={id}
                title={title}
                completed={completed}
                createdAt={createdAt}
                da={da}
                mode={mode}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground"></div>
      </div>
    </div>
  );
};
