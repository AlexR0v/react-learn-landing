import styled                from '@emotion/styled'
import { color, typography } from 'styled-system'

export const Text = styled('span')(color, typography)

Text.defaultProps = {
  fontFamily: 'text',
  color: 'dark',
}
