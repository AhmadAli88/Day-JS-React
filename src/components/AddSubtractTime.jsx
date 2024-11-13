
import dayjs from 'dayjs';

const AddSubtractTime = () => {
  const nextWeek = dayjs().add(1, 'week').format('YYYY-MM-DD');
  const lastMonth = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
  return (
    <div>
      <div>Next Week: {nextWeek}</div>
      <div>Last Month: {lastMonth}</div>
    </div>
  );
};

export default AddSubtractTime;
