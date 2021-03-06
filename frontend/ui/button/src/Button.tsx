import styled                                      from '@emotion/styled'
import { borders, color, layout, position, space } from 'styled-system'

import { theme }                                   from '@ui/theme'

export const Button = styled('div')(
  {
    borderRadius: theme.radii.small,
    width: '200px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.colors.whiteBlue,
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    ':hover': { background: theme.colors.hoverButton },
  },
  space,
  color,
  borders,
  layout,
  position
)
