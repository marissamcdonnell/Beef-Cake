import React, { useState } from 'react'
import moment from 'moment'

import { firstDayOfMonth, calendarDays } from '../utils/dates'

const Calendar = () => {
  const [date, setDate] = useState(moment())
  const weekdayshort = moment.weekdaysShort()

  return (
    <>
      <h4>{date.format('MMMM')}</h4>
      <div>
        <h3>
          {weekdayshort.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </h3>
        <div>{calendarDays()}</div>
      </div>
    </>
  )
}

export default Calendar
