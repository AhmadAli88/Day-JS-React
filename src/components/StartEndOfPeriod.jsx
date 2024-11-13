
import dayjs from 'dayjs';

const StartEndOfPeriod = () => {
  const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
  const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');
  return (
    <div>
      <div>Start of Month: {startOfMonth}</div>
      <div>End of Month: {endOfMonth}</div>
    </div>
  );
};

export default StartEndOfPeriod;
