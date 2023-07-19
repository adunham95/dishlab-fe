import { ThemeUIContextValue, useThemeUI } from 'theme-ui'
import { ExactTheme } from '.'

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

export const useTheme = (useThemeUI as unknown) as () => ExactContextValue