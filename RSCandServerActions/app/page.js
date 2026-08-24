import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromisseDemo from "@/components/UsePromisseDemo";
import { Suspense } from "react";
import fs from 'node:fs/promises';

export default function Home() {
  const fetchUsersPromise = fs.readFile('dummy-db.json', 'utf-8').then((data) => JSON.parse(data));


  return (
    <main>       
      <ClientDemo>
        <RSCDemo />
        <DataFetchingDemo />
        <ServerActionsDemo />        
      </ClientDemo>
      
      <Suspense fallback={<p>Loading users via Promise...</p>}>
        <UsePromisseDemo usersPromisse={fetchUsersPromise} />   
      </Suspense>      
    </main>
  );
}
