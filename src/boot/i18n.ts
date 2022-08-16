import { boot } from 'quasar/wrappers';
import { i18nInstance } from '@/i18n';

export default boot(({ app }) => {
  app.use(i18nInstance);
});
