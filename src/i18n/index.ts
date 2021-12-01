// type definition
interface translationItem extends Object {
  zhcn: string;
  en?: string;
  zhtw?: string;
}

interface Translations<T> extends Object {
  [propertyName: string]: T | any;
}

// translation configuration
const translations: Translations<translationItem> = {
  择栖工作室: {
    zhcn: '择栖工作室',
    en: 'Zeqi Studio',
  },
  择栖: {
    zhcn: '择栖',
    en: 'Zeqi',
  },
  无翻译: {
    zhcn: '这段文字没有翻译，请联系 Zeqier 速速来补上~',
    en: 'No translation available. Please contact Zeqi Studio.',
  },
};

export default translations;
