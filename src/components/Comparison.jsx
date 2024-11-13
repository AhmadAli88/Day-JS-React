
import dayjs from 'dayjs';

const Comparison = ({ date1, date2 }) => {
  return (
    <div>
      <div>Is {date1} before {date2}? {dayjs(date1).isBefore(date2).toString()}</div>
      <div>Is {date2} after {date1}? {dayjs(date2).isAfter(date1).toString()}</div>
    </div>
  );
};

export default Comparison;
