import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { AppRoutes } from './routes/index.tsx'
import { UserProvider } from './contexts/UserContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
