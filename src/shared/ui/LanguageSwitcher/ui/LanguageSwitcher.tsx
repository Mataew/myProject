import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};

export default LanguageSwitcher;
