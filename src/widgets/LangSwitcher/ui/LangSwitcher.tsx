import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggle}
        className={classNames(cls.LangSwitcher, {}, [className])}
      >
        {t('хуязык')}
        {t('Язык')}
      </Button>
    </div>
  );
};
