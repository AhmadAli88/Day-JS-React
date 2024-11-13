
import dayjs from 'dayjs';

const FormattedDate = ({ date }) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY');
  return <div>Formatted Date: {formattedDate}</div>;
};

export default FormattedDate;
