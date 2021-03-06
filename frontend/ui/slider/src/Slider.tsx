import styled                            from '@emotion/styled'
import React, { useEffect, useState }    from 'react'
import { Layout }                        from '@atlantis-lab/layout'
import { position }                      from 'styled-system'

import { ArrowLeftIcon, ArrowRightIcon } from '@ui/icons'

import { SliderButton }                  from './SliderButton'

const Container = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}))

const SliderContainer = styled('div')(({ show }: any) => ({
  display: show ? 'flex' : 'none',
  position: 'relative',
  flexDirection: 'row',
  width: '100%',
}))

const StyledSlider = styled.div(({ transX }: any) => ({
  position: 'relative',
  display: 'flex',
  transform: `translateX(${transX}px)`,
  transition: '0.3s',
}))

const ButtonContainer = styled.div(
  () => ({
    position: 'absolute',
  }),
  position
)

const Slider = ({ children, slides, step }) => {
  const [transX, setTransX] = useState(0)
  const [goLeft, setGoLeft] = useState(false)
  const [goRight, setGoRight] = useState(true)

  const handleClick = direction => {
    if (direction === 'left') {
      if (transX === 0) {
        setTransX(-step * (slides.length - 1))
      } else {
        setTransX(transX + step)
      }
    }

    if (direction === 'right') {
      if (transX === -step * (slides.length - 1)) {
        setTransX(0)
      } else {
        setTransX(transX - step)
      }
    }
  }

  useEffect(() => {
    if (transX === 0) {
      setGoLeft(false)
      setGoRight(true)
    }
    if (transX !== 0) {
      setGoLeft(true)
      setGoRight(true)
    }
    if (transX === -step * (slides.length - 1)) {
      setGoRight(false)
    }
  }, [transX, setGoRight, setGoLeft])

  return (
    <SliderContainer show={children.length !== 0}>
      <ButtonContainer top={[-55, -100, -150]} left={[245, 30, 105]}>
        <SliderButton disabled={goLeft} left onClick={() => handleClick('left')}>
          <ArrowLeftIcon width={[50, 50, 70]} height={[50, 50, 70]} />
        </SliderButton>
      </ButtonContainer>
      <ButtonContainer top={[-55, -100, -150]} left={[305, 90, 188]}>
        <SliderButton disabled={goRight} onClick={() => handleClick('right')}>
          <ArrowRightIcon width={[50, 50, 70]} height={[50, 50, 70]} />
        </SliderButton>
      </ButtonContainer>
      <Layout flexBasis={['30%', 0, 0]} />
      <Container>
        <StyledSlider transX={transX}>{children}</StyledSlider>
      </Container>
    </SliderContainer>
  )
}

export default Slider
