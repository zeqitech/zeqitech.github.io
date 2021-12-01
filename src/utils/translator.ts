import translations from '../i18n';

export const translator = function (source: string): string {
  // get current lang configuration
  let currentLang = window.localStorage.getItem('currentLang');

  // prevent unconfigured lang
  switch (currentLang) {
    case 'en': {
      currentLang = 'en';
      break;
    }
    case 'zhtw': {
      currentLang = 'zhtw';
      break;
    }
    default: {
      currentLang = 'zhcn';
      break;
    }
  }

  // translation configured
  if (translations[source]) {
    return translations[source][currentLang];
  } else {
    // missing translation
    return translations['无翻译'][currentLang];
  }
};
