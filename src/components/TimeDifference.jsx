
import dayjs from 'dayjs';

const TimeDifference = ({ startDate, endDate }) => {
  const daysDifference = dayjs(endDate).diff(dayjs(startDate), 'day');
  return <div>Days Difference: {daysDifference}</div>;
};

export default TimeDifference;
