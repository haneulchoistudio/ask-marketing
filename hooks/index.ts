import { LanguageContext, ThemeContext } from '@/next-js/template-components';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
export const useLanguage = () => useContext(LanguageContext);
