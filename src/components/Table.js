import React from 'react'
import { Header } from './Header';
import { Body } from './Body';

export const Table = () => {

  const headers = [
    {name: '№', key: 'id'},
    {name: 'Name', key: 'name'},
    {name: 'E-mail', key: 'e-mail'},
    {name: 'Comment', key: 'comment'},
  ]
  return (
    <table>
      <Header headers={headers}/>
      <Body />
    </table>
  )
}
