import React from 'react'
import styled from 'styled-components'

const Day = ({ d, today, workout }) => {
  const Div = styled.button`
    display: flex;
    border: 2px solid green;
    padding: 0;
    height: 6rem;
    width: 5rem;
    margin: 0.1rem;
    background-color: white;
  `
  const DayNumber = styled.p`
    margin: 0;
  `

  return (
    <Div key={d}>
      <DayNumber>{d}</DayNumber>
    </Div>
  )
}

export default Day
