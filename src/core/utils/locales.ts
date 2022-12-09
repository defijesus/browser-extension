import { enUS, es } from 'date-fns/locale';

import { Language } from '../languages';
import { currentLanguageStore } from '../state';

/**
 * Maps our `Language` string to `date-fns/locale` Locale values
 *
 * `date-fns/locale has no default export. So there is no point
 * in attempting to synchronize our `Language` strings with their
 * locale keys. This object will need to updated each time we
 * add a new supported language
 */
export const locales: Record<Language, Locale> = {
  en: enUS,
  es: es,
};

// return date-fns Locale object based on currentLanguage
export function getLocale(): Locale {
  const { currentLanguage } = currentLanguageStore.getState();
  return locales[currentLanguage];
}
