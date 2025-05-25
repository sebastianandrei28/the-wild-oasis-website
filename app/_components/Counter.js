"use client";

import { useEffect, useState } from "react";
import { getCabins } from "../apiCabins";

export default function Counter({ users }) {
  const [count, setCounter] = useState(0);
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  console.log(users);
  return (
    <>
      <button onClick={() => setCounter((c) => c + 1)}>{count}</button>;
      <img src="https://waicvkbcfxeyyffdsuqf.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzdlMWFlNmU3LWUxNmEtNDdlOS04NjE4LTNlODlhZmI4MmIzYyJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTc0ODE4OTgzMSwiZXhwIjoxNzc5NzI1ODMxfQ.h2TXb4iNKTYDwMexMVdY5nK2rZigISBKvYmawYD5zGY"></img>
    </>
  );
}
