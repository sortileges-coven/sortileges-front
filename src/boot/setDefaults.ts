import { boot } from 'quasar/wrappers';
import { QInput, QBtn, QSpinner } from 'quasar';

export default boot(({}) => {
  QInput.props.outlined = {
    type: QInput.props.outlined,
    default: true,
  };
  QInput.props.stackLabel = {
    type: QInput.props.stackLabel,
    default: true,
  };
  QBtn.props.outline = {
    type: QBtn.props.outline,
    default: true,
  };
  QSpinner.props.color = {
    type: QSpinner.props.color,
    default: 'primary',
  };
});
