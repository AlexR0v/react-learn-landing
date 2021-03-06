/* eslint-disable */
import React      from 'react'
import styled     from '@emotion/styled'
import { layout } from 'styled-system'

const Container = styled.div(layout)

export const ArrowLeftIcon = ({ width, height }) => (
  <Container width={width} height={height}>
    <svg viewBox='0 0 70 70' fill='none'>
      <g>
        <circle cx={35} cy={35} r={34.5} stroke='#3BB3C4' />
        <path
          d='M23.6802 35.8334C23.6963 35.8514 23.7129 35.869 23.7302 35.8863L34.7559 46.9108C35.0813 47.2362 35.0814 47.7638 34.7559 48.0893C34.4305 48.4148 33.9029 48.4148 33.5774 48.0894L22.5518 37.0649C22.0534 36.5667 21.773 35.9329 21.7106 35.2821C21.6518 35.1002 21.652 34.898 21.7112 34.7162C21.7746 34.0685 22.0542 33.438 22.5498 32.9415L33.5604 21.9113C33.8856 21.5856 34.4132 21.5852 34.7389 21.9103C35.0646 22.2354 35.0651 22.7631 34.74 23.0888L23.7293 34.1191C23.7137 34.1347 23.6987 34.1506 23.6841 34.1667H50.8333C51.9444 34.1667 51.9444 35.8334 50.8333 35.8334H23.6802Z'
          fill='#3BB3C4'
        />
      </g>
    </svg>
  </Container>
)
