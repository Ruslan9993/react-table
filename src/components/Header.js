import React from 'react'

export const Header = ({ headers }) => {

  return (
    <thead>
      {headers.map(header => (
        <th key={header.key}>{header.name}</th>
      ))}
    </thead>
  )
}
