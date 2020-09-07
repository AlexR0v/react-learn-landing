import React              from 'react'
import { Column, Layout } from '@atlantis-lab/layout'
import { ThemeProvider }  from 'emotion-theming'
import { IntlProvider }   from 'react-intl'
import { render }         from 'react-dom'

import { Header }         from '@sections/header'
import { Hero }           from '@sections/hero'
import { theme }          from '@ui/theme'

render(
  <IntlProvider locale='ru' defaultLocale='ru'>
    <ThemeProvider theme={theme}>
      <Layout maxWidth={1440} mx='auto'>
        <Column>
          <Header />
          <Hero />
        </Column>
      </Layout>
    </ThemeProvider>
  </IntlProvider>,
  document.body.firstElementChild
)
