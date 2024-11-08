import Portfolio from "../islands/Portfolio.tsx";
import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

const getNames = () => {
  console.log("TEST123 names");

  // const names = db.query("SELECT name FROM people");
  // console.log(names);
};

export default function Main() {
  const test = useSignal("");
  const db = new DB("stocks.db");
  // db.execute(`
  //       CREATE TABLE IF NOT EXISTS people (
  //           id INTEGER PRIMARY KEY AUTOINCREMENT,
  //           name TEXT
  //       )
  //       `);

  // // Run a simple query
  // for (const name of ["Peter Parker", "Clark Kent", "Bruce Wayne"]) {
  //   db.query("INSERT INTO people (name) VALUES (?)", [name]);
  // }

  // // Print out data in table
  // for (const [name] of db.query("SELECT name FROM people")) {
  //   console.log(name);
  //   names.value = [...names.value, name as string];
  // }

  // // Close connection
  // db.close();

  return (
    <>
      <Portfolio />
    </>
  );
}
