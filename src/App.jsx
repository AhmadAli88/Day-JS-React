
import CurrentDateTime from './components/CurrentDateTime';
import FormattedDate from './components/FormattedDate';
import RelativeTime from './components/RelativeTime';
import TimeDifference from './components/TimeDifference';
import AddSubtractTime from './components/AddSubtractTime';
import StartEndOfPeriod from './components/StartEndOfPeriod';
import Comparison from './components/Comparison';
import DayMonthYear from './components/DayMonthYear';
import LocalizedDate from './components/LocalizedDate';

const App = () => {
  return (
    <div>
      <CurrentDateTime />
      <FormattedDate date="2024-12-31" />
      <RelativeTime pastDate="2024-10-10" />
      <TimeDifference startDate="2024-01-01" endDate="2024-12-31" />
      <AddSubtractTime />
      <StartEndOfPeriod />
      <Comparison date1="2024-05-15" date2="2024-10-10" />
      <DayMonthYear />
      <LocalizedDate />
    </div>
  );
};

export default App;
