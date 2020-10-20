/* eslint-disable */
import React      from 'react'
import styled     from '@emotion/styled'
import { layout } from 'styled-system'

const Container = styled.div(layout)

export const ArrowRightIcon = ({ width, height }) => (
  <Container width={width} height={height}>
    <svg viewBox='0 0 70 70' fill='none'>
      <circle cx={35} cy={35} r={34.5} stroke='#3BB3C4' />
      <path
        d='M46.3197 35.8334C46.3037 35.8514 46.287 35.869 46.2698 35.8863L35.2441 46.9108C34.9186 47.2362 34.9186 47.7638 35.244 48.0893C35.5694 48.4148 36.0971 48.4148 36.4225 48.0894L47.4482 37.0649C47.9466 36.5667 48.227 35.9329 48.2894 35.2821C48.3482 35.1002 48.348 34.898 48.2888 34.7162C48.2253 34.0685 47.9458 33.438 47.4502 32.9415L36.4396 21.9113C36.1144 21.5856 35.5868 21.5852 35.261 21.9103C34.9353 22.2354 34.9349 22.7631 35.26 23.0888L46.2707 34.1191C46.2862 34.1347 46.3013 34.1506 46.3159 34.1667H19.1666C18.0555 34.1667 18.0555 35.8334 19.1666 35.8334H46.3197Z'
        fill='#3BB3C4'
      />
    </svg>
  </Container>
)
