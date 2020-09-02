import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Day from '../ui/Day'

export const firstDayOfMonth = () => {
  return moment().startOf('month').format('d')
}

const EmptyDay = styled.div`
  display: flex;
  border: 2px solid green;
  background-color: pink;
  padding: 0;
  height: 6rem;
  width: 5rem;
  content: '';
  margin: 0.1rem;
`
const Row = styled.div`
  display: flex;
`
export const calendarDays = () => {
  let blanks = []
  let daysInMonth = []
  let totalSlots = []
  let rows = []
  let cells = []
  let currentDay = moment().format('D')

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<EmptyDay>{''}</EmptyDay>)
  }

  for (let d = 1; d <= moment().daysInMonth(); d++) {
    if (d == currentDay) {
      daysInMonth.push(
        <div key={d} style={{ border: '1px solid pink', borderRadius: '50%' }}>
          {d}
        </div>
      )
    } else {
      daysInMonth.push(<Day d={d} />)
    }
  }

  totalSlots = [...blanks, ...daysInMonth]
  totalSlots.forEach((row, index) => {
    if (index % 7 !== 0) {
      cells.push(row)
    } else {
      rows.push(cells)
      cells = []
      cells.push(row)
    }
    if (index === totalSlots.length - 1) {
      rows.push(cells)
    }
  })

  let daysinmonth = rows.map((d, i) => {
    return <Row>{d}</Row>
  })

  return daysinmonth
}
