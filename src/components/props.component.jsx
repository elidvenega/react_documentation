import React from "react";

export default function Props({name, num = 1}) {
  return(
    <div>
        Hello my name is {name} and the number is {num}
    </div>
  )
}
