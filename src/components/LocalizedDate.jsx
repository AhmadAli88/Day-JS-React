
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/fr';

dayjs.extend(localizedFormat);

const LocalizedDate = () => {
  const localizedDate = dayjs().locale('fr').format('LL');
  return <div>Localized Date (French): {localizedDate}</div>;
};

export default LocalizedDate;
