import React, { useState } from 'react';
import classNames from 'classnames';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Julius',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const month = selectedDate.getMonth();
  const dayNumber = selectedDate.getDate();
  const year = selectedDate.getFullYear();

  const renderWeek = () => {
    return Array.from(days).map((day, idx) => (
      <div
        key={idx}
        className={classNames('weekDays', {
          currentDay: dayNumber === currentWeek.getDate() + idx,
        })}
        onClick={() =>
          setSelectedDate(new Date(year, month, currentWeek.getDate() + idx))
        }
      >
        <span>{day}</span>
        <span>
          {new Date(year, month, currentWeek.getDate() + idx).getDate()}
        </span>
      </div>
    ));
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='selectedDate'>
          <div>{selectedDate.getFullYear()}</div>
          <div>{months[selectedDate.getMonth()]}</div>
          <div>{selectedDate.getDate()}</div>
        </div>
        <div className='btnWrap'>
          <button
            onClick={() =>
              setSelectedDate(new Date(year - 1, month, dayNumber))
            }
          >
            Prev Year
          </button>
          <button
            onClick={() =>
              setSelectedDate(new Date(year + 1, month, dayNumber))
            }
          >
            Next Year
          </button>
        </div>
        <div className='btnWrap'>
          <button
            onClick={() =>
              setSelectedDate(new Date(year, month - 1, dayNumber))
            }
          >
            Prev Month
          </button>
          <button
            onClick={() =>
              setSelectedDate(new Date(year, month + 1, dayNumber))
            }
          >
            Next Month
          </button>
        </div>
        <div className='btnWrap'>
          <button
            onClick={() => {
              setSelectedDate(new Date(year, month, dayNumber - 7));
              setCurrentWeek(new Date(year, month, dayNumber - 7));
            }}
          >
            Prev Week
          </button>
          <button
            onClick={() => {
              setSelectedDate(new Date(year, month, dayNumber + 7));
              setCurrentWeek(new Date(year, month, dayNumber + 7));
            }}
          >
            Next Week
          </button>
        </div>
        <div className='currWeek'>{renderWeek()}</div>
      </div>
    </div>
  );
};

export default DateTimePicker;
