
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const RelativeTime = ({ pastDate }) => {
  const timeAgo = dayjs(pastDate).fromNow();
  return <div>Time Ago: {timeAgo}</div>;
};

export default RelativeTime;
