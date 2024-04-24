"use client";

import React, { useState } from 'react';
export default function UserProfile({ name = "George"}){

  const [age, setCount] = useState(0);

  function celebrateBirthday(): any{
    setCount(age + 1);
  }

  return (
    <div>
      <h1>{name} Profile</h1>
      <p>Age: {age}</p>
      <button onClick={celebrateBirthday}>Happy Birthday!</button>
    </div>
  )
}
