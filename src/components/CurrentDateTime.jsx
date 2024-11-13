
import dayjs from 'dayjs';

const CurrentDateTime = () => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return <div>Current Date and Time: {currentDate}</div>;
};

export default CurrentDateTime;
