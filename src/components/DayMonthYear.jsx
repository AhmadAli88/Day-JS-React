
import dayjs from 'dayjs';

const DayMonthYear = () => {
  const dayOfWeek = dayjs().day();
  const month = dayjs().month() + 1; // +1 since months are zero-indexed
  const year = dayjs().year();
  
  return (
    <div>
      <div>Day of Week: {dayOfWeek}</div>
      <div>Month: {month}</div>
      <div>Year: {year}</div>
    </div>
  );
};

export default DayMonthYear;
