import React from 'react';

const data = {
  name: 'James',
  hobby: 'guitar'
}

function Test() {
  return (
    <>
    <h1>Hellooo it works</h1>
    </>
  )
}

export const CurlyBraces = () => {
  return (
    <div className='component_one'>
      <h1 style={{
        backgroundColor: "green",
        color: "blue"
      }}>{data.name}</h1>
      <Test />
    </div>
  )
}
