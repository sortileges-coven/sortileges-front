import { boot } from 'quasar/wrappers';
import { QInput } from 'quasar';

export default boot(({}) => {
  QInput.props.outlined = {
    type: QInput.props.outlined,
    default: true,
  };
  QInput.props.stackLabel = {
    type: QInput.props.stackLabel,
    default: true,
  };
});
