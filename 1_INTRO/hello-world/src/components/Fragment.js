import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <h2>Titulo h2</h2>
        <h3>Titulo h3</h3>

        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment